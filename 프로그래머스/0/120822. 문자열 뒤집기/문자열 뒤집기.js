function solution(my_string) {
  let answer = my_string.split("");
  answer.reverse(my_string);
  let reversedstirng = answer.join("");

  return reversedstirng;
}