const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv/config');

//import routes
const postsRoute = require('./routes/posts');
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//routes
app.get('/', (req,res) => {
    res.send('We are on Home')
});

//connect db
mongoose.connect(
    process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

//listen to server
app.listen(3000);