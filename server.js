const express = require('express');
const nodemon = require('nodemon');
const app = express();
const database = require('./views/database')
app.set("views engine","ejs");

app.get('/', (req, res) => {
   // res.send(`<h1>${Date()}</h1>`);
   res.render("index.ejs",{
    numberOfiterations : 20
   });
});

app.get('/notes',(req,res)=>{
  const notes = database.getNotes();
  res.render('notes.ejs',{notes});
})
app.get('/notes/:id',(req,res)=>{
  const id = +req.params.id;
  //const note = notes.find(note => note.id === id);
  const note = database.getNote(id);
  if(!note){
    res.status(404).render("note404.ejs");
    return;
  }
  //res.send(note)
  res.render('singleNote.ejs',
  {note,});
})

//app.use(express.static("public"))
// app.get('/goodbye', (req,res)=>{
//     res.send('GOODBYE')
// })
app.use(express.static("public"));

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});