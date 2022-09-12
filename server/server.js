const express = require('express');
const app = express();
const path = require('path')
const bodyparser = require('body-parser')
const tipsRouter = require('./routes/tips')

// set templating Engine
app.set('view engine', 'ejs')


app.use(bodyparser.urlencoded({extended:true}))
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use(express.json());

app.use('/', tipsRouter);

app.listen(3000, () => console.log('Our app listening on port 3000'));