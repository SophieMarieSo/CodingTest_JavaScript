function solution(N, stages) {
    var top = {};
    let temp = 0;
    let length = stages.length;
    let answer = [];
    for(let i = 1; i <= N; i++) {
        temp = stages.filter(el => el === i).length;
        top[i] = (temp/length);
        length -= temp;
    }
    
    let sorted = Object.entries(top).sort((a, b) => b[1] - a[1]);
    for(let element of sorted) {
	    answer.push(parseInt(element[0]))
    }
    return answer;
}