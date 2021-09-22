var mongoose = require('mongoose');

//URL
const mongoDb_url = 'mongodb://localhost/scrape';

mongoose.connect(mongoDb_url);

const db_connect = mongoose.connection;

db_connect.on('error',(err)=>{
    console.log('connection failed',err);
});

db_connect.once('open',()=>{
    console.log('\nsuccessful connection to mongo database\n');
});