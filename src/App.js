import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ranking from './containers/Ranking';
import {Switch,Route,Redirect} from 'react-router-dom';
import Nav from './containers/Nav';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reboot/>
        <AppBar>
          <Typography type='title' color='inherit' className = 'title'>
          Yahoo ショッピング　ランキング
          </Typography>
        </AppBar>
        <Nav/>
        <Switch>
          <Route path='/all' component={Ranking}/>
          <Route path = '/category/1'
            render= {() => <Redirect to = '/all'/>}/>
          <Route path='/category/:id' 
            render={
              ({match}) => <Ranking categoryId={match.params.id}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
