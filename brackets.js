function solution(S) {
    const map = { 
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const arr = []
    for(const e of S) {
        if(arr.length > 0 && map[arr[arr.length-1]] === e) arr.pop()
        else arr.push(e) 
    }

    return arr.length === 0 ? 1 : 0
}
