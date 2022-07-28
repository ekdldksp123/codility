function solution(H) {
    const stack = []
    let blocks = 0

    for(const e of H) {
        // 이전 블럭의 높이 > 현재 블럭의 높이 && 스택에 값이 있을 경우 걔속 pop
        while(stack.length > 0 && e < stack[stack.length - 1]) {
            stack.pop()
        }
		// 이전 블럭의 높이 < 현재 블럭의 높이 || 스택이 비었을 경우 push! blocks++
        if (stack.length === 0 || e > stack[stack.length - 1]) {
            blocks++
            stack.push(e)
        }
    }
    return blocks

}
