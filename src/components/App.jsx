import { GlobalStyle } from './GlobalStyle';
import { Box } from 'components/Box';
import {useState,useEffect} from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./Contacts/ContactList";
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, filterContact } from 'redux/action';


function App(){

  // const [contacts, setContacts] = useState(() => 
  // JSON.parse(localStorage.getItem('contacts')) ?? 
  
  // [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]
  // );

  // const [filter, setFilter] = useState('');

  //  useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  //  }, [contacts])


  
   const onDeleteButton = idContact => {
     setContacts(contacts.filter(contact => contact.id !== idContact));
       };

  

  //     const addContact = ({ name, number }) => {
  //       const id = nanoid();
  //       const contactItem = {
  //         id,
  //         name,
  //         number,
  //       };
    
  //       if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
  //         alert(`${name} is already in contacts`);
  //         return;
  //       };
    
  //       setContacts(prevState => [contactItem, ...prevState]
  //       );
  //     };
    
      const changeFilter = event => {
       setFilter(event.currentTarget.value);    
        };
    
      
      const normalizedFilter = filter.toLocaleLowerCase();
       const filteredContactList = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
       );

    return (
      <Box
      display = 'flex'
      flexDirection = 'column'
      alignItems = 'center'
      justifyContent = 'center'
      fontSize = {24}
      padding= {15}
      >
     <div>
      <h1>Phonebook</h1>
      </div>
       
       
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        {contacts.length > 0 ? (
          <ContactList
            contacts={filteredContactList}
            onDeleteButton={onDeleteButton} />
        
            ) : (
              <p>Contact list is empty</p>
            )}

     
      <GlobalStyle />
      
      </Box>
      
    );
    
  }


export default App;