import { useState } from 'react';
import { FriendsList } from '../FriendsList/FriendsList';
import contactsList from '../../data/dataContacts.json';
import { Container, H2, NeedContactBox, IconCurrentContact, CurrentContact, P } from './App.styled';
import { Avatar } from '@mui/material';


export const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  return (
    <>
      <H2>Chats</H2>
      <Container>
      <FriendsList list={contactsList} onSelect={setSelectedContact} />
        {selectedContact && <NeedContactBox>          
          <CurrentContact>
            <Avatar style={{ marginRight: '4px', backgroundColor: 'green' }}>
                <IconCurrentContact/>               
            </Avatar>          
             <P>{selectedContact.name}</P>
          </CurrentContact>
          <hr style={{color: 'cadetblue'}}/>
        {/* <p>{selectedContact.message}</p>
        <p>{selectedContact.createdAt.slice(0, 10)}</p> */}
      </NeedContactBox>}
    </Container>
    </>
  )
};
