function solution(A, K) {
    if(A.length === K || A.length === 0) return A
    else {
        for(let i=0; i<K; i++) {
            const last = A.pop()
            A.unshift(last)
        }
        return A
    }
}
