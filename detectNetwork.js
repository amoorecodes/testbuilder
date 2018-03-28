// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var ccPrefix = ['38', '39', 
	                '34', '37',
					'4',
					'51','52','53','54','55',
					'6011', '644', '645', '646', '647', '648', '649', '65',
					'5018', '5020', '5038', '6304'];
	var dinersClub = ccPrefix.slice(0,2);
	var amex = ccPrefix.slice(2,4);
	var visa = ccPrefix[4];
	var masterCard  = ccPrefix.slice(5,10);
	var discover = ccPrefix.slice(10,18);
	var maestro = ccPrefix.slice(18, 22);
	var chinaUnionPay = [];
	  for(var i = 622126; i <= 622925; i++) {
        chinaUnionPay.push(i.toString());
      };
      for(var i = 624; i <= 626; i++) {
      	chinaUnionPay.push(i.toString());
      }
      for(var i = 6282; i <= 6288; i++) {
      	chinaUnionPay.push(i.toString());
      }
    var switchCard = ['4903','4905','4911','4936','564182','633110','6333','6759']
	var isPrefix = function (element) {
		return element === cardNumber.substring(0, element.length);
	}
	var length = function(desiredLength) {
		return desiredLength === cardNumber.length;
	}

	if(dinersClub.some(isPrefix) && length(14)) {
		return 'Diner\'s Club';
	} else if (amex.some(isPrefix) && length(15)) {
		return 'American Express';
	} else if (masterCard.some(isPrefix) && length(16)) {
		return 'MasterCard';
	} else if (discover.some(isPrefix) && [16,19].some(length)) {
		return 'Discover';
	} else if (maestro.some(isPrefix) && [12,13,14,15,16,17,18,19].some(length)) {
		return 'Maestro';
	} else if (chinaUnionPay.some(isPrefix) && [16,17,18,19].some(length)) {
		return 'China UnionPay';
	} else if (switchCard.some(isPrefix) && [16,18,19].some(length)) {
		return 'Switch';
	} else if (isPrefix(visa) && [13,16,19].some(length)) {
		return 'Visa';
	}

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


