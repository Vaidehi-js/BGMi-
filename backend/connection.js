const mongoose = require ('mongoose');
const dbName = "gungame"
const dbUrl = "";

mongoose.connect (dbUrl)
.then((result) => {
    
    console.log ('connection successfull, database connected');
}).catch((err) => {
    
});
module.exports = mongoose;