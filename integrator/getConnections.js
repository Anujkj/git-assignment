const request = require('request');
require('dotenv').config()

const TOKEN = process.env.TOKEN;
console.log(TOKEN);

const options = {
    url : "https://api.integrator.io/v1/connections",
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
