//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Deleting records', function(){

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
    it('delete one record from the database', function(done){ //DONE: mocha needs to know when the test is completed
          
        MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
                assert(result === null);
                done();

            });

        });
    });


});