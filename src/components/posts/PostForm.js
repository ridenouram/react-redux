import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    submitFunc: PropTypes.func.isRequired
  };

  state = {
    title: '',
    body: ''
  }


  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.submitFunc(this.state.title, this.state.body);
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
        <input type='text' name='body' value={this.state.body} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
