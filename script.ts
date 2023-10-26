/* Fuknce soucet, deklaruje cislo1, cislo2, vraci nam cislo1 + cislo2
    pak v konstatne ukladam do "Vysledek" hodnotu funkce, kde pouziju 2cisla
    Console log vyprintuje vysledek
*/
function soucet (num1:number,num2:number): any{
    return num1 + num2
}

const vysledek = soucet (5,6)
 console.log(vysledek)


/* 
Datove typy:
    number = 3, 2.1, -5
    string = "pes", 'pes'
    boolean = true, false
     objects = {age: 30}
*/

//lekce 4
/*
const = neda se dal prepisovat
let = jde v prubehu scriptu prepsat jinou hodnotou
*/
const myName: string = "Tomas"
const age: number = 31
const adult: boolean = false


//Lekce 5
/* Realitní kancelár
Popisujeme dum. Dum má 4 okna, 1 dvere, barva je bílá, vsku má 50 metru, je nový, má garáz.

Vasím úkolem je tyto hodnoty zanést do
následujicim promennych a napsat k nim vzdy
správný datový typ:

windows
 doors
 color
 height
isNew (ano, ne)
garage (ano, ne)

vypiste promenné do konzole

const windows: number = 4
const doors: number = 1
const color: string = "white"
const height: number = 50
const isNew: boolean = true
const garage: boolean = true

console.log(windows, doors, color, height, isNew, garage)
*/

//lekce 6
/* Vylepsení Realitní kanceláre 
const windows = 4
const doors = 1
const color = "bílá"
const height = 50
const isNew = true
const garage = true
*/

//Lekce 7
/*const person = {
    name: "Tomas",
    age: 31
}

console.log(person.name)
console.log(person.age)
*/

//lekce 8
// const windows = 4
// const doors = 1
// const color = "bílá"
// const height = 50
// const isNew = true
// const garage = true
/* Objekt v realitní kancelári
Vytvorte objekt+s názvem house, který bude
obsahovat vechny vyse uvedené promenné.
Pouzijte pro zápis co nejednodussí zpúsob
(nemusite specifikovat, jaka promenna je jaky typ)
Vypiste vechny vlastnosti do konzole|
 

const house = {
    windows : 4,
    doors : 1, 
    color : "bílá",
    height : 50,
    isNew : true,
    garage : true
}
console.log(house.windows, house.doors, house.color, house.height, house.isNew, house.garage)
*/

//lekce 9
/* Pole! */

const employees = ["Tomas", "Jana", "Petr", "Pavel"]
console.log(employees)
console.log(employees[0])
console.log(employees[3])