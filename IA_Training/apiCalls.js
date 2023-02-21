var request = require("request");

var functions = {
  createConnections: function (token, json) {
    return new Promise((resolve, reject) => {
      var bear = "Bearer " + token;
      console.log("updated token" + bear);
  
      console.log("------------------------");
      request(
        {
          method: "POST",
          url: "https://api.staging.integrator.io/v1/connections",
          headers: {
            Authorization: bear,
          },
          json: json,
        },
        function (error, response, body) {
          if (!error && response.statusCode == 201) {
            console.log("create conection log resolve");
            resolve(body._id);
          } else {
            console.log("create conection log");
            console.log(response.body);
            console.log(error);
          }
        }
      );
    });
  },
  
  getIntegration: function (token, id, callback) {
    request(
      {
        method: "GET",
        url: "https://api.staging.integrator.io/v1/integrations/" + id,
        headers: {
          Authorization: "Bearer " + token,
        },
      },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          return callback(null, body);
        } else {
          console.log("Integration Get");
          console.log("body: " + response.body);
          console.log("error: " + response.statusCode);
        }
      }
    );
  },
  
  updateIntegration: function (token, integrationId, json, callback) {
    request(
      {
        method: "PUT",
        url: "https://api.staging.integrator.io/v1/integrations/" + integrationId,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: json,
      },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log("update integration log resolve");
          return callback(null, body);
        } else {
          console.log("update integration log");
          console.log(response.body);
          console.log(error);
        }
      }
    );
  },
  
  createFlow: function (token, json) {
    return new Promise((resolve, reject) => {
      var ur = "https://api.staging.integrator.io/v1/flows";
      var bear = "Bearer " + token;
      request(
        {
          method: "POST",
          url: ur,
          headers: {
            Authorization: bear,
          },
          json: json,
        },
        function (error, response, body) {
          if (!error && response.statusCode == 201) {
            console.log("Flow creation log resolve");
            console.log(body);
            resolve(body._id);
          } else {
            console.log("Flow log");
            console.log(response.body);
            console.log(error);
          }
        }
      );
    });
  },
  
  createExport: function (token, json) {
    return new Promise((resolve, reject) => {
      var ur = "https://api.staging.integrator.io/v1/exports";
      var bear = "Bearer " + token;
      request(
        {
          method: "POST",
          url: ur,
          headers: {
            Authorization: bear,
          },
          json: json,
        },
        function (error, response, body) {
          if (!error && response.statusCode == 201) {
            console.log("Export creation log resolve");
            console.log(body);
            resolve(body._id);
          } else {
            console.log("Export log");
            console.log(response.body);
            console.log(error);
          }
        }
      );
    });
  },
  
  createImport: function (token, json) {
    return new Promise((resolve, reject) => {
      var ur = "https://api.staging.integrator.io/v1/imports";
      var bear = "Bearer " + token;
      request(
        {
          method: "POST",
          url: ur,
          headers: {
            Authorization: bear,
          },
          json: json,
        },
        function (error, response, body) {
          if (!error && response.statusCode == 201) {
            console.log("Import creation log resolve");
            console.log(body);
            resolve(body._id);
          } else {
            console.log("Import log");
            console.log(response.body);
            console.log(error);
          }
        }
      );
    });
  }
}

module.exports = functions;