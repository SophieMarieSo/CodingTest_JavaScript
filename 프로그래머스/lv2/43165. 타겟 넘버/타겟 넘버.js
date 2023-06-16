function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;
    
    const calc = (depth, index) => {
        if(depth < length) {
            calc(depth + 1, index + numbers[depth]);
            calc(depth + 1, index - numbers[depth]);   
        } else {
            if(index === target) answer++;
            
        }
    }
    
    calc(0, 0);
    
    return answer;
}