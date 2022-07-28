function solution(S) {
    const map = { '(':')'}
    const str = []

    for(const e of S) {
        if(str.length > 0 && map[str[str.length - 1]] === e) str.pop()
        else str.push(e)
    }
    return str.length === 0 ? 1 : 0
}
