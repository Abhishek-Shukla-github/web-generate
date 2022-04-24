const fs = require("fs");

exports.writeWebFiles = writeFiles;

function writeFiles() {
    // const styles = "styles.css"
    // const js = "index1.js"
    const html5 = fs.readFileSync(`${__dirname}/index.html`)
    const css3 = fs.readFileSync(`${__dirname}/styles.css`)
    const js = fs.readFileSync(`${__dirname}/jsTemplate.js`)
    const filename = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}.html`, html5)
    fs.writeFileSync(`${process.cwd()}/styles.css`, css3)
    fs.writeFileSync(`${process.cwd()}/index.js`, js)
}

writeFiles();