import * as React from "react";
import "./App.css";

const logo = require("./logo.svg");

interface AppProps {
  name: string;
}

class App extends React.Component<AppProps> {
  componentWillMount() {
    // fuck you
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;