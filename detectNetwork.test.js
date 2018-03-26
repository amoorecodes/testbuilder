/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

var addNumbers = function(ln, prefixLength) {
  var answer = '';
  for(var i = 0; i < (ln - prefixLength); i++) {
    answer += '5';
  }
  return answer;
}
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() { 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

// describe("Diner's Club", function() {
//   it('has a prefix of 38 and a length of 14', function() {
//     if(detectNetwork('38345678901234') !== "Diner's Club") {
//       throw new Error('Test failed');
//     }
//   });
// });

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('it has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
});

describe('Discover', function() {
  var expect = chai.expect;
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512345678901234')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6512345678901234567')).to.equal('Discover');
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it(('has a prefix of ' + prefix + ' and a length of 16'), function() {
      expect(detectNetwork(prefix + '1234567890123')).to.equal('Discover');
      });
    it(('has a prefix of ' + prefix + ' and a length of 19'), function() {
      expect(detectNetwork(prefix + '1234567890123456')).to.equal('Discover');
      });
    })(prefix);
  }
});

describe('Maestro', function() {
  var expect = chai.expect;
  var prefix = ['5018', '5020', '5038', '6304'];
   for (var ln = 12; ln <= 19; ln++) {
    for(var i = 0; i < prefix.length; i++) {
      (function(ln, i) {
        it('has a prefix of ' + prefix[i] + ' and a length of ' + ln, function() {
          expect(detectNetwork(prefix[i] + addNumbers(ln, 4))).to.equal('Maestro');
        });
      }) (ln, i);
    };
  };
});

describe('should support China UnionPay', function() {
  var expect = chai.expect; 
  for(var length = 16; length <= 19; length++) {
    for(var prefix = 622126; prefix <= 622925; prefix++) {
      (function(length, prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          expect(detectNetwork(prefix.toString() + addNumbers(length, prefix.toString().length))).to.equal('China UnionPay');
        });
      })(length, prefix);
    };
    for(var prefix = 624; prefix <= 626; prefix++) {
      (function(length, prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          expect(detectNetwork(prefix.toString() + addNumbers(length, prefix.toString().length))).to.equal('China UnionPay');
        });
      })(length, prefix);
    };
    for(var prefix = 6282; prefix <= 6288; prefix++) {
      (function(length, prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
          expect(detectNetwork(prefix.toString() + addNumbers(length, prefix.toString().length))).to.equal('China UnionPay');
        });
      })(length, prefix);
    };
  };
});

describe('should support Switch', function() {
  var expect = chai.expect;
  var length = [16,18,19];
  var prefix = ['4903','4905','4911','4936','564182','633110','6333','6759'];
  // length.forEach(function(element) {
  //   prefix.forEach(function(code) {
  //     (function(element, code) {
  //       it('has a prefix of ' + code + ' and a length of ' + element, function(){
  //         expect(detectNetwork(code + addNumbers(element, code.length))).to.equal('Switch');
  //       });
  //     })(element, code);
  //   });
  // });
  for(var i = 0; i < length.length; i++) {
    for(var n = 0; n < prefix.length; n++) {
      (function(i,n) {
        it('has a prefix of ' + prefix[n] + ' and a length of ' + length[i], function(){
          expect(detectNetwork(prefix[n] + addNumbers(length[i], prefix[n].length))).to.equal('Switch');
        });
      })(i,n);
    };
  }
});





// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19