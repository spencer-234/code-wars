function countRedBeads(n) {
    let redBeads = 0
    for (let i = 0; i < n; i++) {
      if (i > 0) {
        redBeads += 2;
      }
    }
    return redBeads;
}