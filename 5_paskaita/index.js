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
        const data = await con.db('first').collection('anime').find().toArray();//duomenu istraukimaas
        await con.close(); //prisijungimo isjungimas
        res.send (data);
    }catch (err){
        res.status(500).send({error});
    }
});

app.post('/', async (req,res)=>{
    try{
        const con = await client.connect();//prisijungimas prie duomenu bazes
        const data = await con
        .db('first')
        .collection('anime')
        .insertOne({name:'Sword art online',description:'anime',data:'2022-01-01'})
        await con.close(); //prisijungimo isjungimas
        res.send (data);
    }catch (err){
        res.status(500).send({error});
    }
});

app.listen (port,()=>{
    console.log (`It works on ${port} port`);
})