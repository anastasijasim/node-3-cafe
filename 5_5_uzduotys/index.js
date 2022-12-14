require ('dotenv').config();
const express = require ('express');
const cors = require ('cors');
const {MongoClient} = require ('mongodb');

const app = express();
const port = process.env.PORT || 8080;
const URI = process.env.URI;

const client = new MongoClient(URI);

app.use(cors());
app.use (express.json());

app.get('/', async (req,res)=>{

    try{
        const con = await client.connect();//prisijungimas prie duomenu bazes
        const data = await con.db('uzduotys5').collection('tekstas').find().toArray();//duomenu istraukimaas
        await con.close(); //prisijungimo isjungimas
        res.send (data);
    }catch (err){
        res.status(500).send({error});
    }
});

app.get ('/posts',async (req,res)=>{
    try{
        const con = await client.connect();//prisijungimas prie duomenu bazes
        const data = await con.db('uzduotys5').collection('tekstas').find().toArray();//duomenu istraukimaas
        await con.close(); //prisijungimo isjungimas
        res.send (data);
    }catch (err){
        res.status(500).send({error});
    }
})

app.get ('/posts/:id',async (req,res)=>{
    try{
        const ObjectId = require ('mongodb').ObjectId;
        id = ObjectId(+req.params.id);
        const con = await client.connect();
        if (+req.params.id){
            const data = await con.db('uzduotys5').collection('tekstas').find({id:req.params.id}).toArray();
            res.send(data)
        }else{
            const data = await con.db('uzduotys5').collection('tekstas').find().toArray();
            res.send(data)
        }
        await con.close(); //prisijungimo isjungimas
    }catch (err){
        res.status(500).send({error});
    }
})

app.get('/posts', async (req, res) => {
    try {
      const con = await client.connect();
      if (req.query.title) {
        const data = await con.db('uzduotys5').collection('tekstas').find({ title: req.query.title }).toArray();
        res.send(data);
      } else {
        const data = await con.db('uzduotys5').collection('tekstas').find().toArray();
        res.send(data);
      }
      await con.close();
    } catch (error) {
      res.status(500).send({ error });
    }
  });

app.listen (port,()=>{
    console.log (`It works on ${port} port`);
})