import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import AddChannel from './pages/AddChannel';
import EditChannel from './pages/EditChannel';
import manageChannel from './components/ChannelServices/manageChannel';
import ViewChannel from './pages/viewChannel';




function App() {
  return (
    <Router>
      <div className>
        <Navbar/>
        <br/>
        <Route path="/addChannel" component={AddChannel} />
        <Route path="/edit/:id" component={EditChannel} />
        <Route path="/viewChannel" component={ViewChannel} />
        <Route path='/manageChannel' component={manageChannel} />
      </div>
    </Router>
  );
}

export default App;
