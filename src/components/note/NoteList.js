import React from 'react'

import NoteListActive from './NoteListActive'
import NoteListArchieved from './NoteListArchieved'

function NoteList ({ notes }) {
  return (
    <section className='section-notelist'>
      <div className='section-notelist__header'>
        <h1>Daftar Catatan</h1>
        <input
          className='note-form__title'
          type='text'
          placeholder='Cari judul ...'
          required
        />
      </div>
      <NoteListActive notes={notes} />
      <NoteListArchieved notes={notes} />
    </section>
  )
}

export default NoteList
