const hashmap = require('./.vscode/hashmap');

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
  lotr.set('Maiar', 'Sauron');\
  \
  \xz
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  console.log(lotr);
  console.log(lotr.get('Hobbit'));
  console.log(lotr.get('Maiar'));
}

main();
//problem 2:
//logs 'Hello world.', '10'
//logs 'Hello world.', '20'