import React, { Component } from "react";
import style from "./Form.module.css"

class Form extends Component{
  state = {
   name: '',
   number: '',
  }

  // берем данные value каждого input 
    handleChange = evt => {
      this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
     
  };
// сабмит формы 
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    // console.log(this.state);
  }
  // обновление полей инпутов после нажатия сабмит 
   reset = () => {
    this.setState({ name: '', number: ''})
  }
  render() {
    const { name, number } = this.state;

    return (
       <form onSubmit={this.handleSubmit}> 
        <label className ={style.label}>
          <span>
              Name
          </span>
          <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange= {this.handleChange}
              className={style.input}
          />
        </label>
        <label className ={style.label}>
          <span>
              Number
          </span>
          <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange= {this.handleChange}
                className={style.input}
            />
        </label>
        <div className={style.buttonDiv}>
          <button type="submit" className={style.button}> Add contact</button>
        </div>
        
      </form>  
    )
  }
};

export default Form;