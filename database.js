let notes = [
  {
    id: 1,
    title: "My First Note",
    timestamp: Date.now(),
    contents:
      "Meow to be let in. Ha ha, you're funny i'll kill you last. Licks your face. Ask for petting fight an alligator and win or this cat happen now, it was too purr-fect!!! so hate dogs i hate cucumber pls dont throw it at me. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff cats woo. Purrrrrr floof tum, tickle bum, jellybean footies curly toes yet chase red laser dot gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. More napping, more napping all the napping is exhausting leave hair everywhere. Decide to want nothing to do with my owner today cat slap dog in face fall over dead (not really but gets sypathy), headbutt owner's knee cat is love, cat is life.",
  },
  {
    id: 2,
    title: "My Second Note",
    timestamp: Date.now(),
    contents:
      "Fight own tail attack the child or stretch out on bed so don't nosh on the birds. Throwup on your pillow intently stare at the same spot disappear for four days and return home with an expensive injury; bite the vet chase after silly colored fish toys around the house yet spill litter box, scratch at owner, destroy all furniture, especially couch kitty. Haha you hold me hooman i scratch i like big cats and i can not lie, for your pillow is now my pet bed. Hide from vacuum cleaner. Lick butt and make a weird face more napping, more napping all the napping is exhausting for attack feet enslave the hooman. Steal mom's crouton while she is in the bathroom jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back if human is on laptop sit on the keyboard cats are a queer kind of folk flex claws on the human's belly and purr like a lawnmower hiiiiiiiiii feed me now howl on top of tall thing.",
  },
];

let currentId = 3

function getNotes(searchTerm) {
  if (!searchTerm) {
    return notes;
  } 
  return notes.filter(note => note.title.includes(searchTerm) || note.contents.includes(searchTerm))
}
exports.getNotes = getNotes

function getNote(id) {
  return notes.find((note) => note.id === id);
}
exports.getNote = getNote

function addNote(note) {
  notes.push({
    ...note,
    id: currentId,
    timestamp: Date.now(),
  });
  currentId++
}
exports.addNote = addNote

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}
exports.deleteNote = deleteNote