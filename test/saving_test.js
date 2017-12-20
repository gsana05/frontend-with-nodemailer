//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('saving records', function(){
    
    it('saves a record to the database', function(done){ //DONE: mocha needs to know when the test is completed
        var char = new MarioChar({ //creates a new character 
            name:'Mario'

        });

        char.save().then(function(){ // TESTS IF ITS BEEN SAVED TO DATABASE, WE WANT IT TO RETURN FALSE.
            assert(char.isNew === false); //returns true (NEW) if its not saved to the database. Returns false (NOT NEW) if its been saved to the database
            done();
        });
    });
});