const goods = [
    {
        id: 1,
        name: 'skirt',
        description: 'cool skirt',
        sizes: ['xs', 's', 'm', 'l', 'xl'],
        price: 1000,
        available: true
    },
    {
        id: 2,
        name: 'short',
        description: 'cool short',
        sizes: ['xs', 's', 'm', 'l', 'xl'],
        price: 800,
        available: true
    },
    {
        id: 3,
        name: 'jeans',
        description: 'cool jeans',
        sizes: ['xs', 's', 'm', 'l', 'xl'],
        price: 2500,
        available: true
    },
    {
        id: 4,
        name: 'dress',
        description: 'cool dress',
        sizes: ['xs', 's', 'm', 'l', 'xl'],
        price: 1500,
        available: true
    },
    {
        id: 5,
        name: 'sweater',
        description: 'cool sweater',
        sizes: ['xs', 's', 'm', 'l', 'xl'],
        price: 1200,
        available: false
    },    
]

let basket = [
    {
        good: 1,
        amount: 1,
    },
    {
        good: 2,
        amount: 6,
    },     
]


function addGood(newGood, newAmount) {
    for(i = 0; i < basket.length; i++) {
        if(newGood == basket[i].good) {
            basket[i].amount = basket[i].amount + +newAmount;
            return basket;
        }
    };
    let good = {
        good: +newGood,
        amount: +newAmount,
    }
    basket.push(good);
    return basket;       
}

console.log(addGood(process.argv[2], process.argv[3]))

function delGood(goodId, amount) {
    for(let i = 0; i < basket.length; ++i) {
        if (basket[i].good == goodId) {
            if (amount >= basket[i].amount) {
                this.splice(i, 1);
                return;
            } 

            basket[i].amount -= amount;
        }    
    }
    return basket
}

console.log(delGood(process.argv[2], process.argv[3]))

function clearBasket() {
    basket.splice(0, basket.length);
    return basket
}

console.log(clearBasket()) 

function totalBasket() {
    let totalSumm = 0;
    let totalAmount = 0;
    for (let i = 0; i < basket.length; i++) {
        totalSumm += basket[i].amount * goods[basket[i].good].price;
        totalAmount += basket[i].amount; 
    }
    let total = {
        'totalSumm': totalSumm,
        'totalAmount': totalAmount,
    }
    return total
}
console.log(totalBasket())