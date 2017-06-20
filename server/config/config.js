var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://msiu001:multivision@ds115752.mlab.com:15752/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}