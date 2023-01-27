const request = require('request');
const fs = require('fs');

request("https://www.google.com/", (err, res, body) => {
    if(err) {
        return err;
    }

    fs.writeFile('google-homepage.txt', body, 'utf8', (err) => {
        if(err){
            return err;
        }

        console.log('Dome');
    })
})