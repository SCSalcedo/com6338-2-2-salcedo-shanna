function greet() {

    var name = prompt('What is your name?'); alert('Hello, ' + name)

    var age = prompt('How old are you?'); console.log(parseInt(age))

    var birthday = confirm('Has your birthday passed this year?'); if (birthday === true) { alert( 'You were born in the year ' + (2023 - age))

         } else { alert ('You were born in the year ' + ((2023 - 1) - age))
        
    }
    const today = new Date('May 27, 23');

console.log(today.getFullYear());

}