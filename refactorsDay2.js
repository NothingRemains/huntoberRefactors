function relativeDistanceToDate(dateA, dateB) {
    if (dateA === dateB) { return `They're the same number of days away!` }

    const ratioAtoB = calculateDaysUntil(dateA) / calculateDaysUntil(dateB)

    if (ratioAtoB <= 0.5) {
        return `If you thought ${dateA.toDateString()} was a long wait, wait until you see how long it is until ${dateB.toDateString()}.`
    } else if (ratioAtoB < 1) {
        return `Don't worry, ${dateA.toDateString()} isn't too much farther away than ${dateB.toDateString()} in the scheme of things.`
    } else {
        return `You know ${dateA.toDateString()} is closer, right?`
    }
}

function ratioDistanceBetweenDates(dateA, dateB) {
    if (dateA === dateB) { return `Same exact date there, mate.` }

    const ratioAtoB = calculateDaysUntil(dateA) / calculateDaysUntil(dateB)
    const dateBIsLater = ratioAtoB > 1

    return `Looks like ${dateBIsLater ? dateB.toDateString() : dateA.toDateString()} is ${Math.max(ratioAtoB, 1/ratioAtoB).toFixed(2)} times farther away than ${(dateBIsLater) ? dateA.toDateString() : dateB.toDateString()}`
}

function timeUntilEachDate(dateA, dateB) {
    return `You have ${calculateDaysUntil(dateA)} days left until ${dateA.toDateString()}, and ${calculateDaysUntil(dateB)} days left until ${dateB.toDateString()}.`
}

function calculateDaysUntil(targetDate) {
    const currentDate = new Date()
    return Math.ceil(Math.abs(currentDate.getTime() - targetDate.getTime()) / (1000*60*60*24))
}
