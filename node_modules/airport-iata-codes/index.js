const data = require('./csvjson8.json');

function airport(params) {
    let arr = [];
    if (params === "undefined" || params === undefined || params === "") {
        data.map((dat) => {
            arr.push(dat);
        })
    } else {
        data.map((dat) => {
            if (dat.iata_code.toLowerCase().search(params.toLowerCase()) !== -1) {
                arr.push(dat);
            }
        })
    }
    return arr;   
}
module.exports = airport