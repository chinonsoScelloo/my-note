
const notes =[
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
  ]
  
  function getNotes(){
    return notes
  }
  exports.getNotes();

  function getNote(id){
return notes.find(note => note.id === id);
  //return note;
  }
exports.getNote();

//ADD NOTE
  function addNote(note){

  }

//DELETE NOTES
  function deleteNote(id){

  }
