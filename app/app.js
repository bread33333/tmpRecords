var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	app = express();
app.engine('html',require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static('statics'));

app.get('/',function(req,res){
	res.render('index.html');
})

app.listen(8080,function(){
	console.log('App is Ready!');
})