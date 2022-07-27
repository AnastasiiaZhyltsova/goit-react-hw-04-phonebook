import { useEffect } from 'react';
import { useState } from 'react';

import { nanoid } from 'nanoid';
import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  console.log(filter);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const formSubmitHandler = contact => {
  //   const normalzeName = contact.name.toLocaleLowerCase();
  //   contacts.find(item => item.name === normalzeName)
  //     ? alert(`${contact.name} is already in contacts`)
  //     : setContacts([contact, ...contacts]);
  //   console.log(contact);
  // };

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const normalzeName = name.toLocaleLowerCase();
    contacts.find(contact => contact.name.toLocaleLowerCase() === normalzeName)
      ? alert(`${name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getContactsFilter = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    const contactFilter = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );

    return contactFilter;
  };
  getContactsFilter();
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;

// class App extends Component {
// state = {
//   contacts: [],
//   filter:'',
//   }
//   // компонент замаунтился(первый раз, 1 раз) при обновлении стр
// //  можем засетить начальные данные
//   componentDidMount(){
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     console.log(parsedContacts);
//     if (parsedContacts) {
//           this.setState({contacts: parsedContacts})

//     }
// }
// // метод жизненного цикла Вызывается сразу после обновления компонента в DOM
//   // после обновления можем что-то сделать
//   componentDidUpdate(prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log('Обновилось')
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = ({name, number}) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     }

//     const { contacts } = this.state;
//     const normalzeName = name.toLocaleLowerCase();
//    // eslint-disable-next-line
//     {contacts.find(contact => contact.name.toLocaleLowerCase() === normalzeName)
//        ? alert(`${contact.name} is already in contacts`)
//        : this.setState(({contacts}) => ({contacts: [contact, ...contacts]}))
//   }
//   };

//   deleteContact = (contactId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }))
//   }

//   changeFilter = e => {
//     this.setState({
//       filter: e.currentTarget.value
//     })
//   };

//   getContactsFilter = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLocaleLowerCase();
//     return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
//   }

//   render() {
//     const { contacts, filter } = this.state;
//     const contactsFilter = this.getContactsFilter();
//     return (
//       <div>
//          <h1>Phonebook</h1>
//         <Form
//           onSubmit={this.formSubmitHandler}
//           contacts = {contacts}
//         />

//         <h2>Contacts</h2>
//         <Filter
//           value={filter}
//           onChange={this.changeFilter}
//         />
//         <ContactList
//           contacts={contactsFilter}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
