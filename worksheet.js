// console.log(1993);
// console.log('Kash');
// console.log(true);


            //-VARIABLES-\\    

  //TASK 1 : Days of the week\\ 

// let dayOfWeek = 'Monday'
// let console.log(dayOfWeek)

// let dayOfWeek = 'Friday'
// console.log(`I can't wait for ${dayOfWeek}!`)

  //TASK 2 : User Imput\\ 

// let animalInput = prompt("What is your favorite animal?")
// let colorInput = prompt("What is your favorite color?")
// console.log(`I've never seen a ${colorInput} ${animalInput}!`)


            //-CONDITIONALS-\\

  //TASK 1 : Meals\\

// let timeOfDay = 900;

// let bestMeal = 'Eggy Cheese Ramen';

// if(timeOfDay < 1200) {
//     console.log(bestMeal);
// }
// else if(timeOfDay > 1200 && timeOfDay < 1700) {
//     console.log(bestMeal);
// }
// else if(timeOfDay > 1700) {
//     console.log(bestMeal);
// }

    //TASK 2 : Random Number\\

// let randNum = Math.floor(Math.random() * 11);

// if(randNum >= 0 && randNum <= 2) {
//     console.log("Beatles");
// }
// else if(randNum >= 3 && randNum <= 5) {
//     console.log("Stones");
// }
// else if(randNum >= 6 && randNum <= 8) {
//     console.log("Floyd");
// }
// else if(randNum == 9 || randNum == 10) {
//     console.log("Hendrix");
// }


            //-"FOR" LOOPS-\\

    //TASK 1\\

// for(let i = 0; i < 8; i++) {
//     console.log(`${i} Javascript is cool!`);
// }

    //TASK 2\\

// for (let i=0; i < 11; i++) {
//     console.log(i);
// }

    //TASK 3\\

// let text = "";
// let text2 = "";

// for(let i =0; i < 5; i++) {
//     text = "Hello";
//     text2 = "Goodbye";
//     console.log(text);
//     console.log(text2);
// }


            //-FUNCTIONS-\\

    //TASK 1 : Favorite Movie (void functions)\\

// function printMovieName(favMovie){
//     let result;
//     result = favMovie;
//     favMovie = "";
//     return result;
// }

// let myResult = printMovieName("Apocalypto");
// console.log(myResult);

    //TASK 2 : Favorite Band\\

// function favBand(bandName){
//     bandName = prompt("Whats your favorite band?")
//      return bandName

// }
// let bandName = favBand();
// console.log(bandName)

//     //TASK 3 : Concert\\

// function concertDisplay(musicalAct){
//     myStreet = prompt("What street do you live on?")
//     result = console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
//     return result
// }
// let myResult = concertDisplay(bandName);
// console.log(myResult)


            //-ARRAYS-\\

    //TASK 1 : Desktop Items\\

let desktopItems = ['desk','macbook','main-display','power-strip','notebook','pen','vape'];
console.log(`Index 1 : ${desktopItems[1]}`)
desktopItems.push('Infinity Gauntlet')

for(let i of desktopItems) {
    console.log(i);
}
