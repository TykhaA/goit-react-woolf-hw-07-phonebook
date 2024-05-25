import Form from './Form/Form';
import ListContacts from './ListContacts/ListContacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: '#010101',
        width: 400,
        margin: 'auto',
      }}
    >
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ListContacts />
      </Section>
    </div>
  );
};
export default App;
