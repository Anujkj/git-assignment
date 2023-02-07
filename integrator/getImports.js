const request = require('request');
require('dotenv').config()

const TOKEN = process.env.TOKEN;

const options = {
    url : "https://api.integrator.io/v1/imports",
    headers : {
        Authorization: `Bearer ${TOKEN}`
    }

} 

request.get(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})
