function solution(A) {
    let pairs = 0
    const circles = A.map((v,i) => [i-v, i+v]).sort((x,y) => x[0] - y[0])
    
    for(let i=0; i<circles.length; i++) {
        for(let j=i+1; j<circles.length;j++) {
            if(circles[i][1] >= circles[j][0]) { // 이미 소팅해놨으니 뒤에 있는 애의 min 이 앞에 있는 애의 max 보다 작거나 같은지만 비교!
                pairs++
            } else break // break 만 잘써도 이중 for 문에서의 알고리즘 복잡도를 낮출 수 있다
            if(pairs > 10000000) return -1
        }
    }
    return pairs
}
