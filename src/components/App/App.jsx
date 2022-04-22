import { MessageList } from '../MessageList/MessageList';
import contactsList from '../../data/dataContacts.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <MessageList list={contactsList}/>
    </Container>
  )
};
