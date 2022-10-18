//Q11
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountPrice = prices[i] * (1 - discount);
        discounted.push(discountPrice);
    }

    //console.log(i);
    //console.log(length);

    return discounted;
}

console.log(discountPrices([100, 200, 300], 0.5));