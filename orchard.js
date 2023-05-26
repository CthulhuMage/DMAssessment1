///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

console.log('-------------Problem 1---------------------')
////It seemed easier to me to consolidate all of the numbers into one place and only doing the math once, rather than doing the math multiple times and keeping track of it.
let acresArr = []
for (let i=0; i < fujiAcres.length; i++) {
    acresArr.push(fujiAcres[i])
}
for (let i=0; i < galaAcres.length; i++) {
    acresArr.push(galaAcres[i])
}
for (let i=0; i < pinkAcres.length; i++) {
    acresArr.push(pinkAcres[i])
}
console.log(acresArr)

let totalAcres = 0

for (let i = 0; i < acresArr.length; i++) {
    totalAcres += acresArr[i]
}
console.log(totalAcres)
// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

console.log('-------------Problem 2---------------------')
let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
console.log('-------------Problem 3---------------------')
while (acresLeft > 0) {
    acresLeft -= averageDailyAcres
    days += 1
}

console.log(days)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
//I had some trouble here making the math work without storing the answer in another variable. I feel like I've done that somewhere else, but I couldn't quickly find where.
let fujiTons = []
let galaTons = []
let pinkTons = []

console.log('-------------Problem 4---------------------')
for (let i = 0; i < fujiAcres.length; i++){
    let fujis = fujiAcres[i] * 6.5
    fujiTons.push(fujis)
    
}
console.log(fujiTons)



for (let i = 0; i < galaAcres.length; i++){
    let galas = galaAcres[i] * 6.5
    galaTons.push(galas)
    
}
console.log(galaTons)

for (let i = 0; i < pinkAcres.length; i++){
    let pinks = pinkAcres[i] * 6.5
    pinkTons.push(pinks)
    
}
console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
//Seems now that back on problem 1 it would have saved time to do the math individually, because I could have just called back to that instead of redoing some of it.
//let fujiPounds =
//let galaPounds =
//let pinkPounds =
console.log('-------------Problem 5---------------------')

let fujiAcresVar = 0
for (let i = 0; i < fujiAcres.length; i++) {
     fujiAcresVar += fujiAcres[i]
}
let fujiPounds = fujiAcresVar * 2000 * 6.5
console.log(fujiPounds + ' pounds of fuji apples')


let galaAcresVar = 0
for (let i = 0; i < galaAcres.length; i++) {
     galaAcresVar += galaAcres[i]
}
let galaPounds = galaAcresVar * 2000 * 6.5
console.log(galaPounds + ' pounds of gala apples')


let pinkAcresVar = 0
for (let i = 0; i < pinkAcres.length; i++) {
     pinkAcresVar += pinkAcres[i]
}
let pinkPounds = pinkAcresVar * 2000 * 6.5
console.log(pinkPounds + ' pounds of pink apples')

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
console.log('-------------Problem 6---------------------')
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice


console.log('Profit from Fuji apples was $'+fujiProfit)
console.log('Profit from Gala apples was $'+galaProfit)
console.log('Profit from Pink apples was $'+pinkProfit)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
console.log('-------------Problem 7---------------------')

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)