function fizzBuzz(num){
    if (isNaN(num))
        return 'Not a number'
    else if (num % 3 === 0 && num % 5 === 0)
        return 'FizzBuzz'
    else if (num % 3 === 0)
        return 'Fizz'
    else if (num % 5 === 0)
        return 'Buzz'
    else
        return num;
}

console.log(fizzBuzz('a'))