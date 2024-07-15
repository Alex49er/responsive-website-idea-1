import React from 'react'

import { footer, blog, possibility, features, whatgpt3, header} from './containers'
import { cta, brand, navbar} from './components';

const App = () => {
  return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
  )
}

export default App
