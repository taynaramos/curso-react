import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Contacts from './components/Contacts';
import Filters from './components/Filters';

class App extends React.Component {
  render() {
    return (
      <>

        <Topbar/>
        <Filters />
        <Contacts />

      </>
    )
  }
}

export default App;
