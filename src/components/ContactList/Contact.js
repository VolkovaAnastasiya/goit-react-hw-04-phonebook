import s from './ContactList.module.css';

function Contact({ contacts, onDeleteContact }) {
  //   return <li>{children}</li>;
  return contacts.map(({ name, number, id }) => (
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
  ));
}

export default Contact;
