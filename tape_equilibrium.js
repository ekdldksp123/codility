function solution(A) {
    let min = Number.MAX_SAFE_INTEGER
    const totalSum = A.reduce((acc, cur) => acc + cur, 0)
    let sum = 0

    for(let i=0; i<A.length-1; i++) {
        sum += A[i]
        min = Math.min(min, Math.abs(sum - (totalSum - sum)))
    }
    return min
}
