//console.log('hello!');

/*Consegna:
- Data una lista della spesa
- stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente 
- con un ciclo while.

##Tools
- array
- print on page individually (ul)
- use while
*/

//Create and array that contains a grocery's list
const groceryList = [
    'Apples',
    'Bananas',
    'Strawberries',
    'Avocados',
    'Bell Peppers',
    'Carrots',
    'Broccoli',
    'Garlic',
    'Lemons/Limes',
    'Onion',
    'Parsley',
    'Cilantro',
    'Basil',
    'Potatoes',
    'Spinach',
    'Tomatoes'
];
console.log(groceryList);

//Enunciate the element in DOM
let ulistDOM = document.querySelector('.list');
//console.log(ulistDOM);

let i = 0;
//use while to create loop
while (i < groceryList.length) {
    const products = groceryList[i];
    console.log(products);

    let listItem = `<li>${products}</li>`;

    ulistDOM.insertAdjacentHTML('beforeend', listItem);


    i++
}



