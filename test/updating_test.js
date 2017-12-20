//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('updating records', function(){

    var char;

    beforeEach(function(done){ //hook that make this run before each of the tests
        char = new MarioChar({ //creates a new character 
        name:'Mario',
        weight: 55
    });

    char.save().then(function(){ // TESTS IF ITS BEEN SAVED TO DATABASE, WE WANT IT TO RETURN FALSE.
        done();
    });
});
    
//creates tests
    it('Update one record in the database', function(done){ //DONE: mocha needs to know when the test is completed
          
        MarioChar.findOneAndUpdate({name:'Mario'}, {name:'Luigi'}).then(function(){
            MarioChar.findOne({_id:char._id}).then(function(result){
                assert(result.name === 'Luigi');
                done();

            });

        });
    });

    it('increments the weight by 1', function(done){ //DONE: mocha needs to know when the test is completed
        
      MarioChar.update({}, {$inc: {weight:1}}).then(function(){
          MarioChar.findOne({name:'Mario'}).then(function(record){
              assert(record.weight === 56);
              done();

          });

      });
  });



});