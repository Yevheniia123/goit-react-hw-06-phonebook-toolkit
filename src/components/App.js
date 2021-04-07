import SectionTitle from './SectionTitle/SectionTitle';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactList';

const App = () => (
  <div>
    <SectionTitle title="Phonebook">
      <ContactForm />
    </SectionTitle>

    <SectionTitle title="Contacts">
      <Filter />
      <ContactList />
    </SectionTitle>
  </div>
);

export default App;
