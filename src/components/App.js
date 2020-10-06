import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import styled from 'styled-components';

const Div = styled.div`
  margin: 0 auto;
  padding: 10px 10px;
  max-width: 500px;
`;
const TitleH1 = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const TitleH2 = styled(TitleH1)``;

export default function App() {
  return (
    <Div>
      <TitleH1>Phonebook</TitleH1>

      <ContactForm />

      <TitleH2>Contacts</TitleH2>

      <Filter />

      <ContactList />
    </Div>
  );
}
