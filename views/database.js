
let notes =[
    {
    id: 1,
    title:"my first note",
    content:"i here to make a different, to heal the wounds and reassure the low spirited.",
    timestamp: Date.now()
  },
  {
    id: 2,
    title:"my second note",
    content:"Okay!, jotting things down",
    timestamp: Date()
  }
  ];
  
let currentNote = 3;


  function getNotes(searchItem){
    if(searchItem){
   // console.log(searchItem);
   return notes.filter(note=> note.title.includes(searchItem) || note.content.includes(searchItem));
  }
    return notes;
  //return the searchitem note when searchitem is true
  };
  exports.getNotes = getNotes;

  function getNote(id){
return notes.find(note => note.id === id);
  //return note;
  }
module.exports.getNote = getNote;

//ADD NOTE
  function addNote(note){
    notes.push({
      ...note,
      //id:notes.length+1,
      id:currentNote,
      timestamp:Date.now()
    })
    currentNote++;

  }
module.exports.addNote = addNote;

//DELETE NOTES
  function deleteNote(id){
//notes = notes.filter((note)=>{ note.id !== id});
notes = notes.filter((note) => note.id !== id);

//notes.slice(id);
//console.log(notes)
}
  exports.deleteNote = deleteNote;
