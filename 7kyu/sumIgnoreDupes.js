function sumNoDuplicates(numList) {
    let newList = numList.filter((item, index, list) => list.indexOf(item) === list.lastIndexOf(item));
    return newList.reduce((sum, item) => sum + item, 0);
}