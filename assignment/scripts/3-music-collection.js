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
addToCollection('Gish', 'Smashing Pumpkins', 1991);
addToCollection('Last Splash', 'The Breeders', 1993);
addToCollection('Come On Die Young', 'Mogwai', 1999);

console.log('Collection is:', collection);

function showCollection(array){
  console.log('Number of albums in my collection:', array.length);
  for(let object of array){
    console.log(`${object.title} by ${object.artist}, published in ${object.yearPublished}`); 
  }  
}
showCollection(collection)
console.log('The name, artist, and release year of the 1st album in my my collection {expect () }:' ,collection[0]);
console.log('The 5th artist in my collection is The Breeders:', collection[4].artist);
console.log('The 4th album title in my collection is Gish:' ,collection[3].title);
console.log('The 3rd album in my collection came out in 1991:',collection[2].yearPublished);

//FUNCTION to findByArtist
// INPUT(S) artist
// loop thru COLLECTIONS array to see if the artist inputted in the findByArtist function matches the one in the array. 
// if the artist is found in the album, add the album to artistArray 
// OUTPUT(S) 
// 

function findByArtist(artist){
  let artistArray = [];
  for(let album of collection){
    if(artist === album.artist){
      artistArray.push(album);
    }  
  } // end for loop
  return artistArray;
} // end function

console.log(findByArtist('Pixies')); 
console.log('expect "siamese dream" and "gish"', findByArtist('Smashing Pumpkins'));
console.log('expect "come on die young"',findByArtist("Mogwai"));

foundArray = findByArtist('Van Halen');

// function to search
// INPUT artist and year
// OUTPUT new array containing all search criteria of all the items in the COLLECTION
// if there is no artist or yearPublished in search, return entire collection

function search(artist, yearPublished){
  let newSearchArray =[];
  if(artist === undefined && yearPublished === undefined){return collection} 
  for(let album of collection){
    if( artist === album.artist || yearPublished === album.yearPublished){
      newSearchArray.push(album);
    } 
  }  // end for loop
  return newSearchArray
} // end function

console.log('Searched Smashing Pumpkins, expect "siamese dream" and "gish"', search('Smashing Pumpkins'));
console.log('Searched collection and 1991, expect "trompe le monde" and "gish"', search(collection, 1991));

console.log('Searched collection and 1993, expect "last splash" and "siamese dream"', search(collection, 1993));
console.log('Searched collection and 2002, expect "()"', search(collection, 2002));
console.log('Ran function with 0 parameters, expect full COLLECTION', search());
console.log('Searched daugschidt and 1993, expect IDK', search('daugschidt', 1993 ));


// console.log(search('Sigur Ros', 2002));
