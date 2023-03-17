import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Mentors from '../../db/Mentors';

export default function FolderList({name,stack}) {
  return (
    <>{
      Mentors.map(({name,stack})=>{
        return (
          <>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' , cursor : "pointer"}}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={name} secondary={stack} />
                </ListItem>
              </List>
          </>
        )
      })
    }

    </>
  );
}
