import React from "react";
import style from "./ContactList.module.css"
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <ol className={style.contacts}>
      {contacts.map(({id, name, number}) => (
        <li key={id} className={style.contact} >
          <p className={style.name}>{name} :</p>
          <p className={style.number}>{number}</p>

          <button
            className={style.button}
            type="button"
            onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>        
      ))}
    </ol>
  </div>
);


export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}