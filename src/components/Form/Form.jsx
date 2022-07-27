import { useState } from 'react';
// import { nanoid } from 'nanoid';
import style from './Form.module.css';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // берем данные value каждого input
  const handleChange = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // сабмит формы
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  // обновление полей инпутов после нажатия сабмит
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form>
      <label className={style.label} onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={style.input}
        />
      </label>
      <label className={style.label}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          className={style.input}
        />
      </label>
      <div className={style.buttonDiv}>
        <button type="submit" className={style.button}>
          {' '}
          Add contact
        </button>
      </div>
    </form>
  );
}

export default Form;
