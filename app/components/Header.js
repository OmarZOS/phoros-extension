import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import style from './Header.css';


export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header>
        <img className={style.main_img} src='img/icon-128.png'></img>
        {/* <h1>He</h1> */}
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="From where to start the extraction process?"
        />
      </header>
    );
  }
}
