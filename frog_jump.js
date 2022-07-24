function solution(X, Y, D) {
    if(Y === X) return 0 // no jump needed
    const distance = Y-X
    const quotient = distance/D
    if(quotient > 1) {
        if(Number.isInteger(quotient)) return quotient
        return Math.trunc(distance/D + 1)
    } else return 1
}
