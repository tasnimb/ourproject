alert("Hi, We'd love to know your experience using Binge&Chill! Could you spare a minute taking this short survey?")
var answer= prompt("Y for Yes, N for No")

if (answer==="Y") {
    alert("Awesome! How would you describe your experience?")
    var answerTwo = prompt("Good, Bad or Okay")
}
if (answer=== "Good") {
    var answerThree = prompt ("Amazing! Any way we could improve?")
}
if (answer=== "Bad") {
    prompt ("How do you suggest we improve?")
}
if (answer=== "Okay") {
    prompt ( "Great, How could we improve?")
} else {
    alert ("No worries, Enjoy!")
}

