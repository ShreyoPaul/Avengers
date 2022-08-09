import React from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon className='headerIcon 1' fontSize='large'/>
        </IconButton>
        <img src="http://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="" srcset="" />
        <IconButton>
        <ForumIcon className='headerIcon 2'fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Header