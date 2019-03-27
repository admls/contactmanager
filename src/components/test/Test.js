import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    id: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          title: data.title,
          id: data.id
        });
      });
  }

  // componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  render() {
    const { title, id } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>{title}</h3>
      </div>
    );
  }
}

export default Test;
