// 1. Grade Calculator
console.log("--- Grade Calculator ---");
function gradeCalculator(score){
  if(score < 0 || score > 100){
    console.log(score + " = Invalid score");
  } else if(score >= 70){
    console.log(score + " = A");
  } else if(score >= 60){
    console.log(score + " = B");
  } else if(score >= 50){
    console.log(score + " = C");
  } else {
    console.log(score + " = F");
  }
}
gradeCalculator(85);
gradeCalculator(65);
gradeCalculator(55);
gradeCalculator(40);
gradeCalculator(105);

// 2. Number Guessing Game
console.log("\n--- Guessing Game ---");
let secret = 7;
let guesses = [3, 9, 5, 7];
for(let i=0; i<5; i++){
  let g = guesses[i];
  if(!g) break;
  console.log("Attempt " + (i+1) + ": guessed " + g);
  if(g === secret){
    console.log("Correct! Guessed in " + (i+1) + " attempts");
    break;
  } else if(i === 4){
    console.log("Game over! Number was " + secret);
  } else {
    console.log(g < secret ? "Too low" : "Too high");
  }
}

// 3. FizzBuzz to 30
console.log("\n--- FizzBuzz to 30 ---");
for(let i=1; i<=30; i++){
  if(i%3===0 && i%5===0) console.log("FizzBuzz");
  else if(i%3===0) console.log("Fizz");
  else if(i%5===0) console.log("Buzz");
  else console.log(i);
}