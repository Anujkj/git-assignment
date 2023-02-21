const calls = require("./ioCalls.js");

var obj = {
    installer:{
        connectorInstallerFunction: function(options, callback){
            console.log("Install function called with options - ", options);
            calls.getIntegration(options.bearerToken, options._integrationId, function(error, intObj){
                console.log("Adding install steps");
                var integrationObj = JSON.parse(intObj);
                console.log("Integration Object - ", integrationObj);
                integrationObj.install.push(
                    {
                        name: "NetSuite Connection",
                        description: "Configure NetSuite account credentials",
                        imageURL: "/",
                        completed: false,
                        installerFunction: "verifyNetSuiteConnection"
                    },
                    {
                        name: "Rest Connection",
                        description: "Configure Rest account credentials",
                        imageURL: "/",
                        completed: false,
                        installerFunction: "verifyRestConnection"
                    }
                );
                integrationObj.mode = "install";
                calls.updateIntegration(options.bearerToken, options._integrationId, integrationObj, function(error, updatedIntegrationObj){
                    console.log("Integration Install configuration done!!!");
                    return callback(null,null);
                });
            });
        },

        verifyNetSuiteConnection: function(options, callback){
            calls.getIntegration(options.bearerToken, options._integrationId, function(error, intObj){
                var integrationObj = JSON.parse(intObj);
                integrationObj.install[0].completed = true
                calls.updateIntegration(options.bearerToken, options._integrationId, integrationObj, function(err, body){
                    return callback(null, {
                        "success": true,
                        "stepsToUpdate": body.install
                    });
                });
            });
        },

        verifyRestConnection: function(options, callback){
            calls.getIntegration(options.bearerToken, options._integrationId, function(error, intObj){
                var integrationObj = JSON.parse(intObj);
                
                integrationObj.install[1].completed = true
                integrationObj.mode="settings";
                calls.updateIntegration(options.bearerToken, options._integrationId, integrationObj, function(err, body){
                    return callback(null, {
                        "success": true,
                        "stepsToUpdate": body.install
                    });
                });
            });
        },

        connectorUpdateFunction: function (options, callback) {
            console.log("Update Function called with options - ", options)
            calls.getIntegration(options.bearerToken, options._integrationId, function(error, intObj){
                var integrationObj = JSON.parse(intObj);
                integrationObj.updateInProgress = false;
                calls.updateIntegration(options.bearerToken, options._integrationId, integrationObj, function(err, body){
                    return callback(null, null);
                });
            });
        }
    },
    uninstaller:{
        preUninstallFunction: function (options, callback) {
            console.log("Pre uninstall function called with options - ", options);

            calls.getIntegration(options.bearerToken, options._integrationId, function(err, intObj){
                var integrationObj = JSON.parse(intObj);
                integrationObj.mode = "uninstall";
                calls.updateIntegration(options.bearerToken, options._integrationId, integrationObj, function(err, body){
                    return callback(null, {
                        "success": true,
                        "removeIntegration": true
                    });
                });
            });
        },
        connectorUninstallerFunction: function(options, callback){
            console.log("Uninstall function called with options - ", options);
            return callback(null, {
                "success": true,
                "stepsToUpdate": []
            })
        }
     
    },
    settings:{
        persistSettings: function(options, callback){
            calls.getIntegration(options.bearerToken, options._integrationId, function(err, intObj){
                var integrationObj = JSON.parse(intObj);
                console.log("Pending settings: ", integrationObj.pending);
                calls.updateIntegration(options.bearerToken, options._integrationId, integrationObj, function(err, body){
                    return callback(null, {
                        "sucess": true,
                        "pending": []
                    })
                });
            });
        }
    }
};

module.exports = obj;