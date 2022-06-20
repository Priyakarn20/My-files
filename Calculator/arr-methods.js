let fruits = [ "banana","apple","grapes","pine apple","orange","water melon"]
//toString method - converts an array to a comma separated String.
fruits.toString();

//join method- joins array elements into  separate string, * used as a separator
fruits.join(" * ")

//pop method-to remove last item out of array
fruits.pop();

 //fruits = fruits.pop();     ...this method returs the item that was popped out .

//shift method- remove first item out of array
fruits.shift();

//unshift method - adds new item to the beginning of an array..returns new length of an array
fruits.unshift("Guava")

//push method- it adds new item at the last position ..returns new length
fruits.push("Peach");

//concat method- simply merging two arrays into a new one
let food1 = ["burger","pizza","momos","samosa"]
let food2= ["jalebi","dosa","biryani","kabab"]
let food = food1.concat(food2);

//Splice method- used to add items items into an array
fruits.slice(2, 4 ,"Musk melon" , "Pomegranate");

//slice method - breaks an array from particular item, it can take two items also
fruits.slice(4);
fruits.slice(3,4);

//sort method - It rearranges an array alphabetically 
fruits.sort();

//reverse method- it reverses the array, first we sort an array then we reverse it .
fruits.sort();
fruits.reverse();








