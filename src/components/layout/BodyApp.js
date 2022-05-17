import React from "react";
import NoteForm from "../note/NoteForm";
import NoteList from "../note/NoteList";

function BodyApp() {
  return (
    <main className="body-app">
      <NoteForm />
      <NoteList />
    </main>
  )
}

export default BodyApp