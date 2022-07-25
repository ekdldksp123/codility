function solution(A, B, K) {
    let cnt = parseInt(B / K) - parseInt(A / K)
    if(A % K === 0) cnt ++
    return cnt
}
