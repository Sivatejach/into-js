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
    const categoryMap = {};

    for (let i = 0; i < transactions.length; i++) {
        const category = transactions[i].category;
        const price = transactions[i].price;

        if (categoryMap[category]) {
            categoryMap[category] += price;
        } else {
            categoryMap[category] = price;
        }
    }

    console.log(categoryMap)

    const result = [];
    for (let category in categoryMap) {
        result.push({ category: category, totalSpent: 
            
            
            [category] });
    }
    
   

    return result;
}

// Sample input
const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656163200000, price: 30, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656249600000, price: 15, category: 'Electronics', itemName: 'Charger' }
];

// Running the function and logging the output
console.log(calculateTotalSpentByCategory(transactions));