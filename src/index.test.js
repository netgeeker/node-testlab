import {expect} from 'chai';

describe('My first test', function () {

    it('should pass', function () {
        expect(true).to.equal(true);
    });
});

describe('Testing create module', () => {

    it('should match return value', () => {
        expect(1).to.equal(1);
    });
});
