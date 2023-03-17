import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SliderSizes from './SliderSizes';
import RadioButtonsGroup from './RadioButtonsGroup';
import FormLabel from '@mui/material/FormLabel';
import ComboBox from './ComboBox';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const filters = [
    {

    }
  ]

  const list = () => (
    <Box
      sx={{ width: 300, padding : "10px" }}
      role="presentation"
    >
      <p>range</p>
      <p><SliderSizes/></p>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key="hello">
          <button onClick={toggleDrawer(anchor, true)} className="w-14 h-14  p-2 border-2 border-violet-500/30 rounded-full flex justify-center align-middle items-center text-xlg text-[#7400e8] cursor-pointer"><i className="fa-solid fa-filter"></i></button>
          <SwipeableDrawer
            // anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
          <div className='w-[300px] p-4 grid grid-cols-1 gap-12 '>
              <div className='flex gap-2  align-middle items-center font-bold text-3xl'> 
                <p>filter</p>
                <i className="fa-solid fa-filter"></i>
              </div>
              <div className='font-semibold grid grid-cols-1 gap-4'>
                <div>
                <FormLabel id="demo-radio-buttons-group-label">range</FormLabel>
                  <SliderSizes/>
                </div>
                <div>
                  <FormLabel id="demo-radio-buttons-group-label">level</FormLabel>
                  <br/>
                  <p className='pl-3 '>
                    <RadioButtonsGroup/>
                  </p>
                </div>
                <div>
                  <FormLabel id="demo-radio-buttons-group-label">Stacks</FormLabel>
                  <p className='pl-3 pt-1'>
                    <ComboBox/>
                  </p>
                </div>
              </div>
          </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
