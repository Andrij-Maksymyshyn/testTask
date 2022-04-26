import { useState, useEffect } from 'react';
import { Filter } from '../Filter/Filter';
import { FriendsList } from '../FriendsList/FriendsList';

// import contactsList from '../../data/dataContacts.json';
import { Container, MainBox, SecondBlock, Header, H2, NeedContactBox, IconCurrentContact, CurrentContact, AvatarDiv, TitleCurrent, DateCurrent } from './App.styled';
import { Avatar } from '@mui/material';


export const App = () => {
  const [contacts, setContacts] = useState([
    {
  "createdAt": "2022-04-21T22:33:07.289Z",
  "name": "Gilbert Roberts",
  "message": "Rerum illo voluptas.",
  "id": "1"
 },
 {
  "createdAt": "2022-04-21T22:00:29.603Z",
  "name": "Duane Green",
  "message": "Aut dignissimos eos enim rerum eveniet sint.",
  "id": "2"
 },
 {
  "createdAt": "2022-04-22T09:06:04.230Z",
  "name": "Juanita Murphy",
  "message": "Eaque molestias omnis ad ipsum deleniti quis eius.",
  "id": "3"
 },
 {
  "createdAt": "2022-04-22T07:49:40.556Z",
  "name": "Lynn Mertz",
  "message": "Accusamus quisquam corrupti quia officia porro.",
  "id": "4"
 },
 {
  "createdAt": "2022-04-22T10:40:00.000Z",
  "name": "Mildred Wolf",
  "message": "Reiciendis similique autem velit corrupti aspernatur.",
  "id": "5"
 },
 {
  "createdAt": "2022-04-22T01:37:16.437Z",
  "name": "Malcolm Bayer",
  "message": "Aut natus quia.",
  "id": "6"
 },
 {
  "createdAt": "2022-04-21T18:35:33.548Z",
  "name": "Doreen Bradtke",
  "message": "Quaerat nisi sapiente.",
  "id": "7"
 }
  ]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('');


  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };


  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);



  return (
    <>
      <MainBox>
        <Header>
        <AvatarDiv>
          <Avatar style={{ marginRight: '4px'}}>
                <IconCurrentContact/>               
          </Avatar>          
        </AvatarDiv>   
        <Filter value={filter} onChange={changeFilter} />        
      </Header>
      <SecondBlock>

         
          
        {selectedContact && <NeedContactBox>          
          <CurrentContact>
            <Avatar style={{ marginRight: '4px', backgroundColor: 'green' }}>
                <IconCurrentContact/>               
            </Avatar>          
             <h3>{selectedContact.name}</h3>
          </CurrentContact>
          <hr style={{color: 'cadetblue'}}/>

            <CurrentContact>
            <Avatar style={{ marginRight: '4px', backgroundColor: 'green' }}>
                <IconCurrentContact/>               
            </Avatar>          
             <TitleCurrent>{selectedContact.message}</TitleCurrent>             
            </CurrentContact>
          <DateCurrent>{selectedContact.createdAt.slice(0, 10)}</DateCurrent>  
      </NeedContactBox>}
      </SecondBlock>
      </MainBox>




      <H2>Chats</H2>      
      <Container>
       <FriendsList visibleContacts={getVisibleContacts()} onSelect={setSelectedContact} />
        
    </Container>
    </>
  )
};
