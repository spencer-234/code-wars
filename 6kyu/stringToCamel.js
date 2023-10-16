function toCamelCase(str){
    return str.split("").map((char, i, arr) => {
      if (arr[i - 1] === '-' || arr[i - 1] === '_') {
        return arr[i].toUpperCase();
      } else {
        return arr[i];
      }
    }).join('').replace(/-|_/g, "");
}