import { useEffect } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import {BrowserRouter , Route, withRouter} from 'react-router-dom'

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Layout/>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);
