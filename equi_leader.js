function solution(A) {
    let leader = undefined
    let map = new Map()

    for(const e of A) {
        map.set(e, (map.get(e) || 0) + 1)
    }

    for(const [key, value] of map) {
        if(value > A.length / 2) {
            leader = key
        }
    }

    const countArr = []
    let counts = 0
    for(let i = 0 ; i < A.length ; i++){
        if(A[i] === leader) counts++
        countArr[i] = counts
    }

    let equiLeaders = 0
    for(let i = 1 ; i < A.length ; i++){
        const left = countArr[i-1]
        const right = map.get(leader) - left
        if(left > i/2 && right > (A.length-i)/2) equiLeaders++
    }

    return equiLeaders
}
