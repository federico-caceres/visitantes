const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema(
{ 
    date: Date, 
    name: 'string' 
});

module.exports = mongoose.model('Visitor', visitorSchema);
