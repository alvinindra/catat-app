import React from 'react'

import Footer from './layout/Footer'
import BodyApp from './layout/BodyApp'
import Header from './layout/Header'

function App () {
  return (
    <React.StrictMode>
      <Header />
      <BodyApp />
      <Footer />
    </React.StrictMode>
  )
}

export default App
