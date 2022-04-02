import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      <Contact contacts={contacts} onDeleteContact={onDeleteContact} />
      {/* {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          {name} : <span className="">{number}</span>
          <button
            type="button"
            className={s.btn}
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))} */}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
