function solution(S, P, Q) {
    const result = []

    for(let i=0; i<P.length; i++) { 
        const str = S.slice(P[i], Q[i]+1)
        //상수 타입일 경우 map 이랑 Math.min 사용하지 않고 분기처리해서 푸는게 더 빠륾
        if(str.includes('A')) result.push(1)
        else if(str.includes('C')) result.push(2)
        else if(str.includes('G')) result.push(3)
        else if(str.includes('T')) result.push(4)
    }
    return result
}
