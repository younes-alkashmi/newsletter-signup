const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/sign-up.html');
    
});



app.post('/',(req,res)=>{
    
	let pass = req.body.basicPass
	let name = req.body.userName   
	let email = req.body.userMail 
    
	console.log(res.statusCode);
    if(name && email && pass){
        res.sendFile(__dirname + '/success.html') 
	}
    else 
        res.sendFile(__dirname + '/failure.html')
});

app.post('/failure', (req,res)=> res.redirect('/'));


app.listen(3000,_=>console.log('port is on 3000.'));
