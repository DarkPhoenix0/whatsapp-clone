import React from 'react'
import { Avatar } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import profil from '../assets/images/nadia.jpg';
import SearchForm from "./Search_form";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className='header'>
          <Avatar alt="K" src={profil}/>
          <div className='buttons'>
            <div className='btn'>
              <MessageIcon/>
            </div>
            <div className='btn'>
              <MoreVertIcon/>
            </div>
          </div>
        </div>
      <SearchForm/>
    </div>
  )
}

export default Sidebar