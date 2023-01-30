const fs = require('fs')  
const async = require('async');
const archiver = require('archiver');
const request = require('request');

const data = ['https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg', 'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg','https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg', 'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg', 'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg','https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg'];

let i = 1;
let j = 1;
let folderName = `images-${j}`;
let count = 1;
    
const downloadImages = async function() {
    data.map((url) => {
        if (count > 5) {
            j++;
            folderName = `images-${j}`
            count = 1;
        }
        if (!fs.existsSync(`${folderName}`)) {
            fs.mkdirSync(`${folderName}`);
        }

        request(url).pipe(fs.createWriteStream(`./${folderName}/${count}.jpg`));
        const output = fs.createWriteStream(`${folderName}/images.zip`);
        const archive = archiver('zip', {
          zlib: { level: 9 }
        });
        archive.pipe(output);
        archive.directory(`${folderName}`, false);
        archive.finalize();
        count++;
    })
}

downloadImages()