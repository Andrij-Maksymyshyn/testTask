import { Avatar } from '@mui/material';
import { IconContact, Ul, Box, Div1, Div2, H3, Li, Span } from './MessageList.styled';
import {Link} from "react-router-dom";


export const MessageList = ({ list }) => {
    return (
        <>
            <h2>Chats</h2>
        <Ul>
            {list.map(({createdAt, name, message, id}) => (
                <Li key={id}>
                    <Link to={'/{contactId}'}>
                        <Box>
                    <Div1>
                        <Avatar style={{ marginRight: '4px' }}>
                                <IconContact/>               
                        </Avatar>
                            <div>
                                <H3>{name}</H3>
                                <Span>{message}</Span>
                            </div>
                    </Div1>
                    <Div2>
                            <Span>{createdAt.slice(0, 10)}</Span>
                    </Div2>
                    </Box>
                    </Link>
                    <hr style={{color: 'cadetblue'}}/>
                </Li>                
            ))}
        </Ul>
        </>
    )
};