const bodyparser = "body-parser";
const express = "express";
const expresshandlbs = "express-handlebars";
const port = 2000;
const mgdb = "mongoose";

const app = express();

//handlebars
app.engine('hbs', expresshandlbs({ defaultlayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs')

//bodyParser

app.use(bodyparser.urlencoded({ extended: true }));


//mongodb

//routers

app.listen(port, function() {
    console.log("écoute le port" + port);
})