const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Visitor = require('../visitantes/model/visitor.model');
require('dotenv').config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
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