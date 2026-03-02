//Exercise 2: Loop control and conditions
//Use array created in Exercise 1.

//Array creation:
let numbers = []
//Counter declaration
let counter = 1
//While loop to fill the array with numbers from 1 to 20
while (counter <= 20) {
    numbers.push(counter)
    counter++
}

//Part 1: Print all the elements in the array using a for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
//Part 2: Print only the even numbers in the array using a for loop and an if statement
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}
//Part 3: Modify the loop so that it stops when it reaches number 10.
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 11) {
            break
        }
        console.log(numbers[i]) 
    }  