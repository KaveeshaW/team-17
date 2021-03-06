import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

export default class ResourcePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      job:{}
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <p>
        <Alert variant="primary">
        <a href="/"><img src = "/homeicon.png" align="right" height="50px" width="50px"/></a>
            <Alert.Heading>Check your Progress</Alert.Heading>
        </Alert>
        <div align = "center">
        <img src="/datadash.png"/>
        </div>

      </p>
    );
  }
}
