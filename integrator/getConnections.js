const request = require('request');

const options = {
    url : "https://api.integrator.io/v1/connections",
    headers : {
        Authorization: "Bearer 9a92b97ffa3c4042a9d53ed97571513a"
    }

}

request.get(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})
