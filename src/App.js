import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  state = {
    progress : 0,
  }

  setProgress = (progress) => 
  {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
          <NavBar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />

      <Routes>
        <Route exact path="/business" element={ <News setProgress ={this.setProgress} key='business' pageSize={8} country='in' category='business'/> } />    
        <Route exact path="/entertainment" element={ <News setProgress ={this.setProgress} key='entertainment' pageSize={8} country='in' category='entertainment'/> } />    
        <Route exact path="/" element={ <News setProgress ={this.setProgress} key='general' pageSize={10} country='in' category='general'/> } />    
        <Route exact path="/health" element={ <News setProgress ={this.setProgress} key='health' pageSize={8} country='in' category='health'/> } />    
        <Route exact path="/science" element={ <News setProgress ={this.setProgress} key='science' pageSize={8} country='in' category='science'/> } />    
        <Route exact path="/sports" element={ <News setProgress ={this.setProgress} key='sports' pageSize={8} country='in' category='sports'/> } />   
        <Route exact path="/technology" element={ <News setProgress ={this.setProgress} key='technology' pageSize={8} country='in' category='technology'/> } />    
      </Routes>
      </div>
    )
  }
}
