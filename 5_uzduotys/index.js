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
        const con = await client.connect();
        const data = await con.db('Work').collection('People').find().toArray();
        await con.close();
        res.send (data);
    }catch (err){
        res.status(500).send({error});
    }
});

app.post('/', async (req,res)=>{
    try{
        const con = await client.connect();
        const data = await con
        .db('Work')
        .collection('People')
        .insertOne({name:'Nasja',age:"26"})
        await con.close(); 
        res.send (data);
    }catch (err){
        res.status(500).send({error});
    }
});

app.listen (port,()=>{
    console.log (`It works on ${port} port`);
})