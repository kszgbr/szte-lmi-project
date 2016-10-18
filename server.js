/*******************************************************************************
Packages
********************************************************************************/
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var path = require("path");
var router = express.Router();
/*******************************************************************************
App config
********************************************************************************/
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*******************************************************************************
Middlewares
********************************************************************************/
router.use(function(req, res, next){
    console.log("some request has been processed");
    next();
});
/*******************************************************************************
Routes
********************************************************************************/
// app.get('/', function (req, res) {
//     res.send("it's alive!");
// });
router.get('/test', function(req, res) {
    res.json({ message: "Hello continuous delivery!" });
});

app.use('/api', router);
/*******************************************************************************
Start the server
********************************************************************************/
app.listen(port, function () {
    console.log('Magic happens on port ' + port);
});
