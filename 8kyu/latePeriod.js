function periodIsLate(last, today, cycleLength) {
    let difference = today.getTime() - last.getTime();
    let oneDayInMs = 1000 * 60 * 60 * 24;
    let daysPassed = Math.round(difference / oneDayInMs);
    return (daysPassed > cycleLength) ? true : false;
}