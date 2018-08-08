import React, { Component } from "react";
import { hot } from "react-hot-loader";

const cls = require("./App.css");

export class App extends Component<{}, { text: string }> {
  public state = {
    text: "Hello, World!",
  };

  public bang = () => {
    this.setState(({ text }) => ({ text: `${text}!` }));
  }

  public render() {
    const { text } = this.state;

    return (
      <div>
        <h1 className={cls.title}>
          {text}
        </h1>
        <button onClick={this.bang} id="bang" type="button">
          Bang!
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
