var url = "mongodb://localhost:27017/learnyoumongo";
var age = process.argv[2];

var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err,db) {
    if (err) console.log(err);
    var parrots = db.collection('parrots');
    parrots.find({
        age: {
            $gt: +age
        }
    }).toArray(function(err, documents) {
        if (err) console.log(err);
        console.log(documents)
        db.close();
    })
})