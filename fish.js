function solution(A, B) {
    const downFish = []
    let aliveFishCount = A.length

    for(let i=0; i < A.length; i++) {
        if(B[i] === 1) {
            downFish.push(i)
        } else {
            while(downFish.length > 0) {
                aliveFishCount--
                const fishIdx = downFish.pop()
                if(A[fishIdx] > A[i]) {
                    downFish.push(fishIdx)
                    break
                }
            }
        }
    }
    return aliveFishCount
}
