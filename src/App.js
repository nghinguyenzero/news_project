import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
// import NewsList from './components/NewsList';
// import History from './components/History';
// import Search from './components/Search';
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        {/* Menu */}
        <Menu></Menu>
        <div className="container">
          <div className="row">
            {this.showContentMenu(routes)}
          </div>
        </div>
      </Router>
    );
  }
  showContentMenu = (routes) => {
    var result = [];
    if (routes.length > 0) {
      result = routes.map((route, index) => {
       return(<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />);
      })

    }
    return <Switch>{result}</Switch>;
  }
}

export default App;
