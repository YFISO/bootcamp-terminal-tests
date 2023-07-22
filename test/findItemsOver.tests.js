import assert from 'assert';
import findItemsOver from '../findItemsOver.js';

const itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

const results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

const itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

const results2 = [];

const itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

const results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];


describe('Test my findItemsOver function' , function(){
    it('It should return "[{name : "pears", qty : 37},{name : "bananas", qty : 27},]" when called with "itemList", 20 ' , function(){
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });

    it('It should return "[]" when called with "itemList2", 20' , function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });

    it('It should return "[{name : "apples", qty : 40},{name : "bananas", qty : 23},{name : "apples", qty : 37}]" when called with "itemList3", 20' , function(){
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
    console.log('findItemsOver passed!');

});

