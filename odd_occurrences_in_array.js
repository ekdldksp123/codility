function solution(A) {
    const map = new Map()
    for(const e of A) {
        map.set(e, (map.get(e) || 0)+1)
    }
    for(const [key,value] of map) {
        if(value % 2 !== 0) return key
    }
}
