const express = require("express");
const app = express();
const database = require("./database")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render("index.ejs", {
    numberOfItterations: 50
  })
})

app.get("/notes", (req, res) => {
  const searchTerm = req.query.searchTerm;
  const notes = database.getNotes(searchTerm);
  res.render("notes.ejs", {
    notes,
  });
})

app.get("/notes/:id", (req, res) => {
  const id = +req.params.id
  const note = database.getNote(id)
  if (!note) {
    res.status(404).render("note404.ejs")
    return
  }

  res.render("singleNote.ejs", {
    note,
  });
})

app.get("/createNote", (req, res) => {
  res.render("createNote.ejs")
})

app.post("/notes", (req, res) => {
  const data = req.body
  database.addNote(data)

  res.redirect("/notes");
})

app.post("/notes/:id/delete", (req, res) => {
  const id = +req.params.id
  database.deleteNote(id)
  res.redirect("/notes")
})

app.use(express.static("public"))


const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
