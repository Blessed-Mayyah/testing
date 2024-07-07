const {expect} = require('chai');
const multiply = require('../multiply');

describe('multiply', function(){
    it('should multiply two numbers correctly', function(){
        const result = multiply(2, 3);
        expect(result).to.equal(6);
    });
});