import { useState, useEffect } from 'react';
import { Filter } from '../Filter/Filter';
import { FriendsList } from '../FriendsList/FriendsList';
import { fetchJoke } from 'services/fetchApi';

// import contactsList from '../../data/dataContacts.json';
import { Container, MainBox, SecondBlock, Header, H2, NeedContactBox, IconCurrentContact, CurrentContact, AvatarDiv, TitleCurrent, DateCurrent, JokeTitle, JokeTitleDate } from './App.styled';
import { Avatar } from '@mui/material';


export const App = () => {
  const [contacts, setContacts] = useState([
    {
  "createdAt": "2020-04-21 10:17 PM",
  "name": "Gilbert Roberts",
  "message": "Rerum illo voluptas.",
  "id": "1"
 },
 {
  "createdAt": "2020-0-24 11:07 PM",
  "name": "Duane Green",
  "message": "Aut dignissimos eos enim rerum eveniet sint.",
  "id": "2"
 },
 {
  "createdAt": "2020-04-26 17:14 AM",
  "name": "Juanita Murphy",
  "message": "Eaque molestias omnis ad ipsum deleniti quis eius.",
  "id": "3"
 },
 {
  "createdAt": "2020-04-27 16:22 AM",
  "name": "Lynn Mertz",
  "message": "Accusamus quisquam corrupti quia officia porro.",
  "id": "4"
 },
 {
  "createdAt": "2020-04-29 13:52 AM",
  "name": "Mildred Wolf",
  "message": "Reiciendis similique autem velit corrupti aspernatur.",
  "id": "5"
 },
 {
  "createdAt": "2020-04-30 15:42 AM",
  "name": "Malcolm Bayer",
  "message": "Aut natus quia.",
  "id": "6"
 },
 {
  "createdAt": "2020-04-21 18:35 PM",
  "name": "Doreen Bradtke",
  "message": "Quaerat nisi sapiente.",
  "id": "7"
 }
  ]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('');
  const [joke, setJoke] = useState('');
  

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
    if (selectedContact) {
      fetchJoke()
        .then(data => {
         
        const { data: { value, created_at } } = data;

           setTimeout(() => {
             setJoke({
               value,
               created_at,
             }); 
            }, 3000)

                   
      })
    }
  }, [selectedContact]);

  


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
            <DateCurrent>{selectedContact.createdAt.slice(0, 19)}</DateCurrent>

            {joke && <JokeTitle>{joke.value}</JokeTitle>}
            {joke && <JokeTitleDate>{joke.created_at.slice(0, 16)} AM</JokeTitleDate>}
            
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
