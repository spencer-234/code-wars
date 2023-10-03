function mango(quantity, price) {
    let sum = 0;
    for (let i = 1; i <= quantity; i++) {
        if (i % 3 !== 0) {
            sum += price;
        }
    }
    return sum;
}