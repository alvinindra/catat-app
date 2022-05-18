import React from 'react'
import NoteForm from '../note/NoteForm'
import NoteList from '../note/NoteList'
import { getInitialData } from '../../utils/data'

class BodyApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initialData: getInitialData(),
      notes: getInitialData()
    }

    this.onCreateNoteSubmittedHandler = this.onCreateNoteSubmittedHandler.bind(
      this
    )
    this.resetNotesData = this.resetNotesData.bind(this)
    this.onSearchingHandler = this.onSearchingHandler.bind(this)
    this.onArchieveActionClicked = this.onArchieveActionClicked.bind(this)
    this.onDeleteActionClicked = this.onDeleteActionClicked.bind(this)
  }

  resetNotesData () {
    this.setState(prevState => {
      return {
        ...prevState,
        notes: this.state.initialData
      }
    })
  }

  onSearchingHandler (keyword) {
    this.resetNotesData()

    this.setState(prevState => {
      return {
        ...prevState,
        notes: prevState.notes.filter(note =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        )
      }
    })
  }

  onCreateNoteSubmittedHandler ({ title, body }) {
    this.setState(prevState => {
      const newNotes = [
        ...prevState.notes,
        {
          id: +new Date(),
          title: title,
          body: body,
          createdAt: new Date(),
          isArchieved: false
        }
      ]

      return {
        initialData: newNotes,
        notes: newNotes
      }
    })
  }

  onArchieveActionClicked (id) {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        return { ...note, isArchieved: !note.isArchieved }
      }

      return note
    })

    this.setState(() => {
      return {
        initialData: notes,
        notes: notes
      }
    })
  }

  onDeleteActionClicked (id) {
    const isAllowed = window.confirm(
      'Apakah kamu yakin ingin menghapus catatan?'
    )

    if (isAllowed) {
      const notes = this.state.notes.filter(note => note.id !== id)

      this.setState(() => {
        return {
          initialData: notes,
          notes: notes
        }
      })
    }
  }

  render () {
    return (
      <main className='body-app'>
        <NoteForm addNote={this.onCreateNoteSubmittedHandler} />
        <NoteList
          notes={this.state.notes}
          onSearchingHandler={this.onSearchingHandler}
          onArchieveActionClicked={this.onArchieveActionClicked}
          onDeleteActionClicked={this.onDeleteActionClicked}
        />
      </main>
    )
  }
}

export default BodyApp
