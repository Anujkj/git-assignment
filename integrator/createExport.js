const request = require('request');
require('dotenv').config()


const TOKEN = process.env.TOKEN;

const options = {
    url : "https://api.integrator.io/v1/exports",
    headers : {
        'Content-Type' : "application/json",
        Authorization : `Bearer ${TOKEN}`
    },
    body : JSON.stringify({
        "name": "Nodejs Test REST Export",
        "_connectionId": "63df87b365616e73fb252270",
        "apiIdentifier": "e78bbbf7f2",
        "asynchronous": true,
        "oneToMany": false,
        "sandbox": false,
        "http": {
            "relativeURI": "/test/orders",
            "method": "GET",
            "formType": "http"
        },
        "adaptorType": "HTTPExport"
    })

}

request.post(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})
