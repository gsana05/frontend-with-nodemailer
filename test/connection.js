const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

// connect to the database before test run
before(function(done){ //BEFORE: is a mocha hook
    //connect to mongoDB
  mongoose.connect('mongodb://localhost/testaroo');
  mongoose.connection.once('open', function(){
    console.log('mongoose to mongodb connection has been made');
    done();
  }).on ('error', function(error){
    console.log('mongoose failed connection to mongodb:', error);
  });
});

// drop/delete characters collection before each test. so you dont get a list of the same data in robomongo
beforeEach(function(done){
    //drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();

    });
});


