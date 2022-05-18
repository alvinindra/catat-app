import React from 'react'

function NoteItem ({ title, body, createdAt }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const formattedCreatedAt = new Date(createdAt).toLocaleDateString(
    'id-ID',
    options
  )

  return (
    <div className='note-item'>
      <div className='note-item__title'>{title}</div>
      <div className='note-item__body'>{body}</div>
      <div className='note-item__date'>{formattedCreatedAt}</div>
    </div>
  )
}

export default NoteItem
