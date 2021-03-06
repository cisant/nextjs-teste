import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

const TodoItem = React.forwardRef(({ todo, ...props }, ref) => (
  <ListItem ref={ref} {...props} alignItems="flex-start">
    <ListItemAvatar>
      <Avatar />
    </ListItemAvatar>
    <ListItemText
      primary={todo.title}
      secondary={
        <React.Fragment>
          <Typography component={'div'} variant="body2" color="textPrimary">
            {`Completo: ${todo.completed ? 'Sim' : 'Não'}`}
          </Typography>
        </React.Fragment>
      }
    />
  </ListItem>
));

TodoItem.displayName = 'TodoItem';

export default TodoItem;
