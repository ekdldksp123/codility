function solution(A) {
    const map = new Map()
    const half = A.length/2
    let dominant = undefined

    for(const e of A) {
        map.set(e, (map.get(e) || 0) +1)
    }
    for(const [key, value] of map) {
        if(value > half) dominant = key
    }
    if(!dominant) return -1
    return A.lastIndexOf(dominant)
}
