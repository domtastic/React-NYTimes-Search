import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import NYTSearch from "./components/pages/NYTSearch/NYTSearch";
import SavedArticles from "./components/pages/SavedArticles/SavedArticles";

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {articles: null};
  }
  render() {
    return (
        <Router>
      <div className="App">
<p>This is the App</p>
        <Route exact path="/" component={NYTSearch}/>
          <Route exact path="/nyts" component={NYTSearch}/>
        <Route exact path="/articles/:id" component={SavedArticles}/>
      </div>
        </Router>
    );
  }
}

export default App;
