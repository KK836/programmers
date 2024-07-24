function solution(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  let answer = array.reduce((a, b) => a + b, 0);
  return answer;
}
