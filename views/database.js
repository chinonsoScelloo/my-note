
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
  


  function getNotes(){
    return notes
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
      id:notes.length+1,
      timestamp:Date.now()
    })

  }
module.exports.addNote = addNote;

//DELETE NOTES
  function deleteNote(id){
notes = notes.filter((note)=>{ note.id === id});
//console.log(notes)
}
  exports.deleteNote = deleteNote;
