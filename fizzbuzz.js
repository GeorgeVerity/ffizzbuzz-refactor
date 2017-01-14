//count through numbers 1 to 20 and figure out if each one is divisible by 3, 5, or both.

answer = prompt("number")
console.log(parseInt(answer))


trump = function(){
for (i=1; i<=parseInt(answer); i++){
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      document.write('FizzBuzz');
    } else if (i % 3 === 0) {
      document.write('Fizz')
    }
  } else if (i % 5 === 0) {
    document.write('Buzz')
  } else {
    document.write(i);
  }
}
}
trump()
