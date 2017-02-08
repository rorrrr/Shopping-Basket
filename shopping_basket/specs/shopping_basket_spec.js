var assert = require('assert');
var shopping_basket = require('../shopping_basket');
var item1 = require('../item1');
var item2 = require('../item2');
var customer2 = require('../customer2');
var customer1 = require('../customer1');

describe('Shopping Basket', function(){

  beforeEach( function() {
    shopping_basket.items.length = 0;
  }),

  it('should be empty at start', function() {
    assert.equal(0, shopping_basket.items.length);
  }),

  it('can add item to basket', function() {
    shopping_basket.add(item1);
    assert.equal(1, shopping_basket.items.length);
  }),

  it('can remove item from basket', function() {
    shopping_basket.add(item1);
    shopping_basket.remove(item1);
    assert.equal(0, shopping_basket.items.length);
  })

  it('can add multiple items to basket', function() {
    shopping_basket.add(item1);
    shopping_basket.add(item2);
    assert.equal(2, shopping_basket.items.length);
  }),

  it('can get price of empty basket', function(){
    assert.equal(0, shopping_basket.total(customer2));
  }),

  it('can get price of item in basket', function(){
    shopping_basket.add(item1);
    assert.equal(10, shopping_basket.items[0].price);
  }),

  it('can get total price of basket', function(){
    shopping_basket.add(item1);
    assert.equal(10, shopping_basket.total(customer2))
  }),

  it('can apply 10% discount over £20', function(){
    shopping_basket.add(item1);
    shopping_basket.add(item2);
    assert.equal(27, shopping_basket.total(customer2))
  }),

  it('can apply 5% loyalty discount to over £20 basketTotal', function(){
    shopping_basket.add(item1);
    shopping_basket.add(item2);
    assert.equal(25.65, shopping_basket.total(customer1))
  }),

  it('can apply %5 loyalty discount to under £20', function(){
    shopping_basket.add(item1);
    assert.equal(9.5, shopping_basket.total(customer1))
  }),

  it('can count multiple items in basket', function(){
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    assert.equal(0, shopping_basket.countMultiples(item2))
    assert.equal(4, shopping_basket.countMultiples(item1))
  }),

  it('can check if item is BOGOF', function(){
    shopping_basket.add(item1);
    assert.equal(true, item1.bOGOF)
  }),

  // it('can show list of bOGOF items in basket', function(){
  //   shopping_basket.add(item1);
  //   shopping_basket.add(item1);
  //   shopping_basket.add(item1);
  //   shopping_basket.add(item1);
  //   shopping_basket.add(item2);
  //   shopping_basket.add(item2);
  //   shopping_basket.add(item2);
  //   shopping_basket.add(item2);
  // })

  it('cant use BOGOF discount on one item thats BOGOF', function(){
    shopping_basket.add(item1);
    assert.equal(0, shopping_basket.bogOfDiscount())
  }),

  it('can use BOGOF discount on 2 item thats BOGOF', function(){
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    assert.equal(10, shopping_basket.bogOfDiscount())
  }),

  it('cant use BOGOF discount on 3 item thats BOGOF', function(){
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    assert.equal(10, shopping_basket.bogOfDiscount())
  });

  it('can do final test on items with bogof, loyalty and over 20 discount', function(){
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    shopping_basket.add(item2);
    shopping_basket.add(item2);
    shopping_basket.add(item2);
    assert.equal(68.4, shopping_basket.total(customer1))
  })




});