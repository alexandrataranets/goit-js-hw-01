function makeTrancaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You order ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTrancaction(5, 3000));
console.log(makeTrancaction(3, 1000));
console.log(makeTrancaction(10, 500));