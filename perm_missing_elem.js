function solution(A) {
    const arr = A.length === 0 ? [] : A.sort((x,y) => x-y)
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== i+1) return i+1
    }
    return arr.length+1
}
