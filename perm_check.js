function solution(A) {
    const max = A.sort((x,y) => x-y)
    for(let i=0; i<A.length; i++) {
        if(A[i] !== i+1) return 0
    }
    return 1
}
