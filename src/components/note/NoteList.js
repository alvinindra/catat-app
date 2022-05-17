import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <section className="section-notelist">
      <h1 className="spacing">Daftar Catatan</h1>
      <h4 className="section-notelist__subtitle">Catatan Aktif</h4>
      <div className="note-list spacing">
        {
          notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))
        }
      </div>
      <h4 className="section-notelist__subtitle">Arsip</h4>
      <div className="note-list">
        {
          notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))
        }
      </div>
    </section>
  );
}

export default NoteList