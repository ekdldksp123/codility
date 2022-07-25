function solution(A) {
    let minAvg = (A[0] + A[1])/2
    let minIdx = 0

    for(let i=0; i<A.length; i++) {
        let sum = A[i]
        // 배열 내 최소 avg 를 구하기 위해서는 slice 를 2,3개만 해야 한다고 한다(*)
        for(let j=i+1; j <=i+2; j++) {
            sum += A[j]
            let avg = sum / (j-i+1)

            if(minAvg > avg) {
                minAvg = avg
                minIdx = i
            }
        }
    }

    return minIdx
}
