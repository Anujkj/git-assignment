const request = require('request');

const options = {
    url : "https://api.integrator.io/v1/connections",
    headers : {
        'Content-Type' : "application/json",
        Authorization : "Bearer 9a92b97ffa3c4042a9d53ed97571513a"
    },
    body : JSON.stringify({
        "type": "netsuite",
        "name": "Nodejs NetSuite connection",
        "offline": false,
        "_sourceId": "63c8e6b48cf6535a1e7a7787",
        "netsuite": {
            "account": "TSTDRV1257171",
            "roleId": "3",
            "requestLevelCredentials": true,
            "dataCenterURLs": {
                "restDomain": "https://tstdrv1257171.restlets.api.netsuite.com",
                "webservicesDomain": "https://tstdrv1257171.suitetalk.api.netsuite.com",
                "systemDomain": "https://tstdrv1257171.app.netsuite.com"
            },
            "tokenId": "******",
            "tokenSecret": "******",
            "entityId": "44385",
            "wsdlVersion": "2020.2",
            "concurrencyLevel": 1,
            "suiteAppInstalled": false,
            "authType": "token-auto"
        },
        "microServices": {
            "disableNetSuiteWebServices": false
        }
    })

}

request.post(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})
