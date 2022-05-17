import React from "react";

function NoteForm() {
  return (
    <aside className="note-form">
      <h1 className="spacing">Buat Catatan</h1>
      <form>
        <p className="note-form__title-limit">Sisa karakter: 50</p>
        <input className="note-form__title" type="text" placeholder="Tulis judul ..." required />
        <textarea className="note-form__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required>
        </textarea>
        <button type="submit">Catat</button>
      </form>
    </aside>
  );
}

export default NoteForm