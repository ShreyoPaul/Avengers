import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import './/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <IconButton className='f replay'>
            <ReplayIcon fontSize='lagre'/>
        </IconButton>
        <IconButton className='f close'>
            <CloseIcon fontSize='lagre'/>
        </IconButton>
        <IconButton className='f starrate'>
            <StarRateIcon fontSize='lagre'/>
        </IconButton>
        <IconButton className='f fav'>
            <FavoriteIcon fontSize='lagre'/>
        </IconButton>
        <IconButton className='f flash'>
            <FlashOnIcon fontSize='lagre'/>
        </IconButton>
        
    </div>
  )
}

export default Footer