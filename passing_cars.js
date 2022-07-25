function solution(A) {
    let east = 0 
    let west = 0
    
    for(const e of A) {
        if(e === 0) east ++
        else if(e === 1) {
            west += east //서쪽으로 가는 차가 나타났을 때 이미 동쪽으로 간 차와 짝이 될 수 있다
        }
    }

    if(west > 1000000000) return -1 //요건 문제 조건쓰
    return west
}
