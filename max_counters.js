function solution(N, A) {
    const arr = Array(N).fill(0)
    let maxCounter = 0
    let maxToSet = 0

    for (const e of A) {
        if (e === N + 1) {
            maxToSet = maxCounter
        } else {
            arr[e-1] = Math.max(arr[e-1] + 1, maxToSet + 1);
            maxCounter = Math.max(arr[e-1], maxCounter); // Math.max(...arr) 보다 Math.max(arr[e-1], maxCounter) 이 훨씬 빠르다!
        }
    }
    return arr.map(v => Math.max(v, maxToSet));
}
