import React, { Component } from "react"
import Login from './Pages/Login';
import Home from './Pages/Home'
import Header from './Components/Header';
import Jobs from './Pages/Jobs';
import {  BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
       
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Header branding="Test js"/>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route  exact path="/jobs" component={Jobs} />
         
        </Switch>
       
      </div>
      </Router>
    )
  }
}

export default App
