var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error with database... '));
    db.once('open', function callback(){
        console.log('multivision db opened');
    });

     var userSchema = mongoose.Schema({
         firstName: String,
         lastName: String,
         userName: String,
         salt: String,
         hashed_pwd: String,
         roles: [String]
     });

     userSchema.methods = {
         authenticate: function(passwordToMatch) {
             return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
         }
     }

     var User = mongoose.model('User', userSchema);

     User.find({}).exec(function(err, collection){
         if(collection.length === 0) {
             var salt, hash;
             salt = createSalt();
             hash = hashPwd(salt, 'mario');
             User.create({firstName:'Mario', lastName:'Siu', userName:'mario', salt: salt, hashed_pwd: hash, roles: ['admin'] });
             salt = createSalt();
             hash = hashPwd(salt, 'yisel');
             User.create({firstName:'Yisel', lastName:'Garcia', userName:'yisel', salt: salt, hashed_pwd: hash, roles: []});
             salt = createSalt();
             hash = hashPwd(salt, 'enzo');
             User.create({firstName:'Enzo', lastName:'Siu', userName:'enzo', salt: salt, hashed_pwd: hash});
         }
     })

function createSalt(){
         return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt); //create a hash message authentication code (hmac)
    return hmac.update(pwd).digest('hex');
}

/*Alternative algorithm*/
/*
function hashPwd(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt); //create a hash message authentication code (hmac)
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
 }
*/
}