// var names = ['Marko', 'Ninja', 'Nidzo'];

// names.forEach(function (name){
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
//     console.log('brrrm');

// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Marko'));

// var person = {
//     name: 'Marko',
//     greet: function (){
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// };

// person.greet();

// Izazov podrucije

function add (a, b){
    return a + b;
};

//addStatment
 var addStatment = (a,b) => {
    return a+b;
}
//addExpression
 var addExpression = (a ,b) => a + b;
// });

console.log(addExpression(2,3));
console.log(addExpression(22,9));
