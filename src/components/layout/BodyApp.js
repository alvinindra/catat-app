import React from 'react'
import NoteForm from '../note/NoteForm'
import NoteList from '../note/NoteList'
import { getInitialData } from '../../utils/data'

class BodyApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: getInitialData()
    }

    this.onCreateNoteSubmittedHandler = this.onCreateNoteSubmittedHandler.bind(
      this
    )
  }

  onCreateNoteSubmittedHandler ({ title, body }) {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date(),
            isArchieved: false
          }
        ]
      }
    })
  }

  render () {
    return (
      <main className='body-app'>
        <NoteForm addNote={this.onCreateNoteSubmittedHandler} />
        <NoteList notes={this.state.notes} />
      </main>
    )
  }
}

export default BodyApp
