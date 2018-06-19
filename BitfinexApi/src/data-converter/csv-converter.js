const fs = require('fs');
const BitfinexConfig = require('../../config/bitfinex-config');
const Json2csvParser = require('json2csv').Parser;

class CsvConverter {
    convertToCsv(data) {
        const fields = BitfinexConfig.dataFields;
        const json2csvParser = new Json2csvParser({ fields });
        const csv = json2csvParser.parse(data);

        this.createFile(csv, 'csv');
    }
    
    createFile(data, extension) {
        var stream = fs.createWriteStream(`statics/data.${extension}`);
        stream.once('open', function(fd) {
          stream.write(data);
          stream.end();
        });
        console.log('Aquivo gravador com sucesso!');
    }
}

module.exports = CsvConverter;