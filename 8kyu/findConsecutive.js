function firstNonConsecutive (numbers) {
    for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] !== (numbers[i - 1] + 1)) {
              return numbers[i];
          }
    }
    return null;
}