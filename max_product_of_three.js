function solution(A) {
    A.sort((x,y) => y-x)
    return Math.max(A[0]*A[1]*A[2], A[0]*A[A.length-1]*A[A.length-2])    
}
