const request = require('request');

const options = {
    url : "https://api.integrator.io/v1/imports",
    headers : {
        'Content-Type' : "application/json",
        Authorization : "Bearer 9a92b97ffa3c4042a9d53ed97571513a"
    },
    body : JSON.stringify({
        "name": "Nodejs Test Slack import",
        "_connectionId": "63df88db41f25733242d4317",
        "apiIdentifier": "icc3c503c3",
        "ignoreExisting": false,
        "ignoreMissing": false,
        "oneToMany": false,
        "assistant": "slack",
        "sandbox": false,
        "assistantMetadata": {
            "resource": "chat",
            "version": "latest",
            "operation": "chat_postmessage"
        },
        "mapping": {
            "fields": [
                {
                    "generate": "channel",
                    "hardCodedValue": "training"
                },
                {
                    "extract": "customername",
                    "generate": "text"
                },
                {
                    "generate": "as_user",
                    "hardCodedValue": "Anuj Kumar Jaimini"
                }
            ]
        },
        "http": {
            "relativeURI": [
                "chat.postMessage"
            ],
            "method": [
                "POST"
            ],
            "body": [
                null
            ],
            "batchSize": 1,
            "requestMediaType": "json",
            "successMediaType": "json",
            "errorMediaType": "json",
            "strictHandlebarEvaluation": true,
            "sendPostMappedData": true,
            "formType": "assistant",
            "response": {
                "resourceIdPath": [
                    null
                ],
                "successPath": [
                    "ok"
                ],
                "successValues": [
                    [
                        "true"
                    ]
                ]
            }
        },
        "rest": {
            "relativeURI": [
                "chat.postMessage"
            ],
            "method": [
                "POST"
            ],
            "body": [
                null
            ],
            "responseIdPath": [
                null
            ],
            "successPath": [
                "ok"
            ],
            "successValues": [
                "true"
            ]
        },
        "adaptorType": "RESTImport"
    })

}

request.post(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})
