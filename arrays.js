const myarr = ['xyz', 12 , true , undefined];

console.log(myarr);
console.log(typeof myarr);
console.log(Array.isArray(myarr));

const movies = ['godzilla','Deadpool','dark knight','Spiderman','Animal'];

console.log(movies.length);

//indexing

console.log(movies[3]);
console.log(movies.indexOf('Animal'));
//movies[50]='flash';
//console.log(movies[50]);
console.log(movies.at(-47));

//slicing
console.log(movies.slice(0));

console.log(movies.slice(-5,-2));

// adding and removing elements

movies.push('Jaani Dushman');  // adds element at the end of array
console.log(movies);
movies.pop(movies);
console.log(movies);
movies.unshift('Echo');
console.log(movies);
movies.shift();
console.log(movies);

//splice

movies.splice(3,1); //removes element starting from index 3 , 1 is the number of how many elements will be deleted
console.log(movies);
movies.splice(3);
console.log(movies);
movies.splice(2,2,'Batman','Ironman');
movies.splice(2,0,'Aquaman','catman');
console.log(movies);

//traverse

for(let i=0; i<movies.length;i++){
  console.log(movies[i]);
}

for(let mov of movies){
  console.log(mov);
}