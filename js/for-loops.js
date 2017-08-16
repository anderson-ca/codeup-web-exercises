var userNum = prompt("give me a number from 1 to 10");


for (var i = 0; i <= 10; i++) {

     var x = i * userNum;

    console.log(userNum + " x " + i + " = " + x);

}







var randNum = Math.floor(Math.random() * (200 - 20)) + 20;


for (var i = 0; i <=10; i++) {
    var randNum = Math.floor(Math.random() * (200 - 20)) + 20;
    if (randNum % 2 !== 0) {
        console.log(randNum + " is odd");
    } else {
        console.log(randNum + " is even");
    }
}