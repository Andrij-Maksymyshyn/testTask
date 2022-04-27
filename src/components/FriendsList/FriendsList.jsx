import { Avatar } from '@mui/material';
import { IconContact, Ul, Box, Div1, Div2, H3, Li, Span } from './FriendsList.styled';
import PropTypes from 'prop-types';



export const FriendsList = ({ visibleContacts, onSelect }) => {       
   
    return (        
        <>            
        <Ul>
            {visibleContacts.map((contact) => (
                <Li key={contact.id} onClick={() => onSelect(contact)}>
                    <Box>
                    <Div1>
                        <Avatar style={{ marginRight: '4px' }}>
                                <IconContact/>               
                        </Avatar>
                            <div>
                                <H3>{contact.name}</H3>
                                <Span>{contact.message}</Span>
                            </div>
                    </Div1>
                    <Div2>
                            <Span>{contact.createdAt.slice(0, 19)}</Span>
                    </Div2>
                    </Box>
                    <hr style={{color: 'cadetblue'}}/>
                </Li>                
            ))}
            </Ul>            
        </>
    )    
};

FriendsList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onSelect: PropTypes.func.isRequired,
};






