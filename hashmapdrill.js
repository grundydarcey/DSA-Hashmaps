const HashMap = require('./hashmap');
const { _hashString } = require('./hashmap');
const hashmap = require('./hashmap');

function main() {
  const lotr = new hashmap();
  const MAX_LOAD_RATIO = 0.5;
  const SIZE_RATIO = 3;
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  console.log(lotr);
  console.log(lotr.get('Hobbit'));
  console.log(lotr.get('Maiar'));
}

main();
//Maiar and Hobbit has the discrepancy because there are two different values for each of their keys
//Capacity is at 8 becuase that's what it starts at


//problem 2:
//logs 'Hello world.', '10'
//logs 'Hello world.', '20'


const problemThree = new HashMap();
problemThree._hashString(10, 22, 31, 4, 15, 28, 17, 88, 59);
console.log(problemThree);