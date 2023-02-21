const request = require("request");

var functions = {
    getIntegration: function(token, id, callback){
        request(
            {
                method: "GET",
                url: "https://api.staging.integrator.io/v1/integrations/" + id,
                headers: {
                    Authorization: "Bearer " + token
                }
            },
            function(err, res, body){
                if(!err && res.statusCode==200)
                    return callback(null, body);
                else
                    console.log("Response - ", res);
            }
        );
    },
    updateIntegration: function(token, id, integrationObj,callback){
        request(
            {
                method: "PUT",
                url: "https://api.staging.integrator.io/v1/integrations/" + id,
                headers: {
                    Authorization: "Bearer " + token
                },
                json: integrationObj
            },
            function(err, res, body){
                if(!err && res.statusCode==200){
                    console.log("Integration update successful");
                    return callback(null, body);
                }
                else{
                    console.log(`Error\nResponse - ${res}\nUpdated Integration object - ${body}`);
                }
            }
        );
    }
}

module.exports = functions;