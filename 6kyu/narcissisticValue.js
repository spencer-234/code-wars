function narcissistic(value) {
    // Code me to return true or false
    let sum = 0;
    let splitNum = value.toString().split("");
    let newSplitNum = splitNum.map((number) => number ** splitNum.length);
    newSplitNum.forEach(item => {
        sum += item;
    })
    return (sum === value) ? true : false;
}