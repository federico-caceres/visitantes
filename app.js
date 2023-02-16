const express = require('express');
const mongoose = require('mongoose');
const Visitor = require('../visitantes/model/visitor.model');
const app = express();
require('dotenv').config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true })
.then(() => console.log('Connected!'));

app.get('/', (req, res) => {

    let nameVisitor = req.query.name ? req.query.name : 'Anonimo';

    Visitor.create({ 
            date: new Date(),
            name: nameVisitor 
        }, 
    function(err){
        console.log(err);
    });


  res.send("El visitante fue almacenado con éxito");
});

app.listen(3000, () => console.log('Listening on port 3000!'));