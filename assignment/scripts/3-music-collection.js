console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  // code to be executed
  let album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return album;
}

addToCollection('()', 'Sigur Ros', 2002);
addToCollection('Siamese Dream', 'Smashing Pumpkins', 1993);
addToCollection('Tromple le Monde', 'Pixies', 1991);
addToCollection('Gish', 'Smashing Pumkins', 1991);
addToCollection('Last Splash', 'The Breeders', 1993);
addToCollection('Come On Die Young', 'Mogwai', 1999);

console.log('collection is:', collection);

function showCollection(array){
  console.log('Number of albums in my collection:', array.length);
  for(let index of array){
    console.log(`${index.title} by ${index.artist}, published in ${index.yearPublished}`); 
  }  
}
showCollection(collection)
console.log(collection[0]);
console.log(collection[0].artist);