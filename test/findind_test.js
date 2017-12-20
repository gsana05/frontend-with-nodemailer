//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('finding records', function(){

    var char;

    beforeEach(function(done){ //hook that make this run before each of the tests
        char = new MarioChar({ //creates a new character 
        name:'Mario'
    });

    char.save().then(function(){ // TESTS IF ITS BEEN SAVED TO DATABASE, WE WANT IT TO RETURN FALSE.
        done();
    });
});
    
//creates tests
    it('finds one record from the database', function(done){ //DONE: mocha needs to know when the test is completed
          
        MarioChar.findOne({name:'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        });     
    });

    it('finds one record by ID from the database', function(done){ //DONE: mocha needs to know when the test is completed
        
      MarioChar.findOne({_id:char._id}).then(function(result){
          assert(result._id.toString() === char._id.toString());//toString: turns id objects into strings which allows to compare id and makes mocha test
          done();
      });     
  });

});