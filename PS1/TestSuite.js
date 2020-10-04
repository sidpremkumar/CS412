const {reverseAlphabetical} = require('./PS1.P1');
const {doCalculation} = require('./PS1.P2');
const {stringFunc} = require('./PS1.P3');

// const describe = require('mocha').describe;
// const it = require('mocha').it; 
const expect = require('chai').expect;
// RUN WITH: 'mocha TestSuite.js' 
// OR: 'npm test'

describe('PS1.P1 - Tests', () => {
    it('abc should return cba', () => {
        let result = reverseAlphabetical('abc');
        expect(result).to.be.equal('cba');
    })

    it('supercalifragilisticexpialidocious should return xuutsssrrppoollliiiiiiigfeedcccaaa', () => {
        let result = reverseAlphabetical('supercalifragilisticexpialidocious');
        expect(result).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
    })

})

describe('PS1.P2 - Tests', () => {
    it('8%5 should return 3', () => {
        let result = doCalculation('8%5');
        expect(result).to.be.equal(3);
    })
    it('2%1 should return 0', () => {
        let result = doCalculation('2%1');
        expect(result).to.be.equal(0);
    })
    it('8*4 should return 32', () => {
        let result = doCalculation('8*4');
        expect(result).to.be.equal(32);
    })
    it('5*10 should return 50', () => {
        let result = doCalculation('5*10');
        expect(result).to.be.equal(50);
    })
    it('8/3 should return 2.6666666666666665', () => {
        let result = doCalculation('8/3');
        expect(result).to.be.equal(2.6666666666666665);
    })
    it('100/3 should return 33.333333333333336', () => {
        let result = doCalculation('100/3');
        expect(result).to.be.equal(33.333333333333336);
    })
    it('1+9 should return 10', () => {
        let result = doCalculation('1+9');
        expect(result).to.be.equal(10);
    })
    it('100+30 should return 130', () => {
        let result = doCalculation('100+30');
        expect(result).to.be.equal(130);
    })
    it('100-3 should return 97', () => {
        let result = doCalculation('100-3');
        expect(result).to.be.equal(97);
    })
    it('400-100 should return 300', () => {
        let result = doCalculation('400-100');
        expect(result).to.be.equal(300);
    })
})

describe('PS1.P3 - Tests', () => {
    it('supercalifragilisticexpialidocious should return [ \'super\', \'califragilisti\', \'cexpialido\', \'cious\' ]', () => {
        let result = stringFunc('supercalifragilisticexpialidocious', (input) => input.split(/(?=c)/g))
        expect(result).to.have.length(4);
        expect(result).to.deep.equal([ 'super', 'califragilisti', 'cexpialido', 'cious' ])
    })
    it('supercalifragilisticexpialidocious should return a dict', () => {
        var result = stringFunc('supercalifragilisticexpialidocious', (input) => {
            let resultNew = input.replace("a", "A");
            let numberReplaced = input.match(/a/g).length;
            return {
                originalString: input, 
                modifiedString: resultNew, 
                numberReplaced: numberReplaced,
                length: resultNew.length,
            }
        })
        console.log(result);
        expect(result).to.deep.equal({
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifragilisticexpialidocious',
            numberReplaced: 3,
            length: 34
          })
        expect(result).to.have.property('originalString');
        expect(result).to.have.property('modifiedString');
        expect(result).to.have.property('numberReplaced');
        expect(result).to.have.property('length');
    })

})