import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Results from './components/Results';

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light',
      }));
    },
  };

  render() {
    return (
      <Router>
        <div className={this.state.theme}>
          <div className="container">
            <Nav
              theme={this.state.theme}
              toggleTheme={this.state.toggleTheme}
            />
            <Switch>
              <Route exact path="/">
                <Popular theme={this.state.theme} />
              </Route>
              <Route exact path="/battle">
                <Battle theme={this.state.theme} />
              </Route>
              <Route path="/battle/results">
                <Results />
              </Route>
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

// When you are using React v 17 you can use this.
// ReactDOM.render(<App />, document.getElementById('app'))

// While using React v18 use this (You can check the react version in package.json file)
// import ReactDOM from 'react-dom/client'
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
