var shortUrl = require("node-url-shortener");
const fs = require('fs');

const data = ['https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg', 'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg','https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg'];

const urlShortner = (data) => {
    Promise.all(
        data.map((org_url) => {
            shortUrl.short(org_url, function (err, url) {
                if(err){
                    throw err;
                }
                let pair = `${org_url}, ${url}\n`
                fs.appendFile('./data.csv', pair, (err)=> {
                    if(err){
                        throw err;
                    }
                });
                
                console.log(url);
            });
        })
    )
}

urlShortner(data);