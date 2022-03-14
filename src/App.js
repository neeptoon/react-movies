import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'
import Movies from './components/Movies'


function App() {
  return (
      <React.Fragment>
          <Header/>
          <Main/>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
