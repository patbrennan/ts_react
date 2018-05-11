import * as React from "react"; // gives access to everything React has to offer

interface HomeProps { // provide blueprint for properties that components have
  name: string;
  age: number;
}

export class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div>
        Hello There, {this.props.name}, you are {this.props.age}, right?
      </div>
    );
  }
}

