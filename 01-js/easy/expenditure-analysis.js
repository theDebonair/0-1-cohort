/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const out = [];

  function pushObj(index) {
    const newObj = {};
    
    newObj.category = transactions[index].category;
    newObj.totalSpent = transactions[index].price ? transactions[index].price : 0;
    
    out.push(newObj);
  }
  
  for (let i=0; i<transactions.length; i++) {
    let found = false;

    for (let j=0; j<out.length; j++) {
      if (out[j].category === transactions[i].category) {
        found = true;
        out[j].totalSpent += transactions[i].price;
      }
    }

    if (!found) {
      pushObj(i);
    }
  }
  return out;
}

console.log(calculateTotalSpentByCategory([{
  id: 1,
  timestamp: 1656076800000,
  price: 100,
  category: 'Italian',
  itemName: 'Pizza',
}, {
  id: 2,
  timestamp: 1656076800001,
  price: 40,
  category: 'Snacks',
  itemName: 'Samosa',
}]));

module.exports = calculateTotalSpentByCategory;
