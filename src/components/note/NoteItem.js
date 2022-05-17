import React from 'react';

function NoteItem({ title, body, createdAt }) {
  return (
    <div className="note-item">
      <div className='note-item__title'>{title}</div>
      <div className='note-item__body'>{body}</div>
      <div className='note-item__date'>{createdAt}</div>
    </div>
  );
}

export default NoteItem