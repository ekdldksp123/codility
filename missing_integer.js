function solution(A) {
    if(A.sort((x,y) => y-x)[0] < 0) return 1
    const arr = Array.from({length: A[0]-1}, (v,i) => 0)

    for(const e of A) {
        arr[e-1] += 1
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) return i + 1 
    }
    // [1,2,3] 처럼 배열 내 빠진 요소가 없는 경우
    return A[0]+1
}
