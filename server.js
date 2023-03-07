const express = require('express');
const nodemon = require('nodemon');
const app = express();
app.set("views engine","ejs");

app.get('/', (req, res) => {
   // res.send(`<h1>${Date()}</h1>`);
   res.render("index.ejs",{
    numberOfiterations : 20
   });
});
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

app.get('/notes',(req,res)=>{
  res.render('notes.ejs',{notes});
})
app.get('/notes/:id',(req,res)=>{
  const id = +req.params.id;
  const note = notes.find(note => note.id === id);
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