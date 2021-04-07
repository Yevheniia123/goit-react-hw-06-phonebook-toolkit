import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookAction from '../../redux/phonebook/phonebook-action';

const ContactList = ({ filterName, deleteId }) => (
  <ul>
    {filterName.map(item => (
      <li key={item.id}>
        <span>
          {item.name} : {item.number}
        </span>

        <button
          type="button"
          className={s.deleteitem}
          onClick={() => {
            deleteId(item.id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  filterName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteId: PropTypes.func.isRequired,
};

const getFilterContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(allContacts =>
    allContacts.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  filterName: getFilterContact(state.phonebook.items, state.phonebook.filter),
});

const mapDispachToProps = dispatch => ({
  deleteId: id => dispatch(phonebookAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispachToProps)(ContactList);
