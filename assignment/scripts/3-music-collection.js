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

addToCollection('Siamese Dream', 'Smashing Pumpkins', 1993);
addToCollection('Tromple le Monde', 'Pixies', 1991);
addToCollection('Gish', 'Smahing Pumkins', 1991);
addToCollection('Last Splash', 'The Breeders', 1993);
addToCollection('Come On Die Young', 'Mogwai', 1999);
addToCollection('()', 'Sigur Ros', 2002);

console.log('collection is:', collection);

function showCollection(artist){
  console.log(artist.length);
}