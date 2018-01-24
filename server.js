var express = require('express');
var bodyParser = require('body-parser');
var getArea = require('./area');
var app = express();


app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var router = express.Router();
router.get('/', function (req,res) {
   console.log("funzione get");
   res.send("Risposta GET");
});
router.get('/getArea', function(req, res){
	var x = req.query.side1;
	var y = req.query.side2;
	console.log(x, y);
	var result =getArea([x, y]);
	if(result == -1){
		res.status(400);
		res.json(-1);
	}else{
		res.json({
			"code": 200,
			"Risposta": result+" e’ l’area calcolata"
		});
	}
});

app.use('/', router);

app.listen(80, function(){
    console.log("Node is running on port",80);
});