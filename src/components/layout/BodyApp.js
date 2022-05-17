import React from "react";
import NoteForm from "../note/NoteForm";
import NoteList from "../note/NoteList";
import { getInitialData } from '../../utils/index';

function BodyApp() {
  const notes = getInitialData();

  return (
    <main className="body-app">
      <NoteForm />
      <NoteList notes={notes} />
    </main>
  )
}

export default BodyApp