const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');

const parser = new  xml2js.Parser();

fs.readFile('./xmData.xml', (err, data)=> {
    if(err){
        throw err;
    }
    parser.parseString(data, (err, res) => {
        if(err){
            throw err;
        }
        console.log(util.inspect(res, false, null, true));
    })
})