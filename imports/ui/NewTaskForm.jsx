import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Tasks } from '../api/tasks.js'
 
export default class NewTaskForm extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
 
  render() {
    return (
      <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
    );
  }
}
 
// Task.propTypes = {
//   // This component gets the task to display through a React prop.
//   // We can use propTypes to indicate it is required
//   task: PropTypes.object.isRequired,
// };

