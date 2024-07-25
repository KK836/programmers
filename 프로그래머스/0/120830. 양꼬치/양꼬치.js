function solution(n, k) {
  const ggoch = 12000;
  const drinks = 2000;
  let answer = 0;
  let free = 0;

  for (let i = 0; i < n; i++) {
    answer += ggoch;
    if ((i + 1) % 10 === 0) {
      free++;
    }
  }

  let consumedrinks = k - free;
  if (consumedrinks < 0) {
    consumedrinks = 0;
  }

  answer += consumedrinks * drinks;
  return answer;
}