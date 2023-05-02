import { Paper, TextField, InputAdornment } from '@mui/material'
import React from 'react'
import { AiOutlineLink, AiOutlineEnter } from 'react-icons/ai'

export default function SearchingBar() {
  return (
    <Paper elevation={6} sx={{ width: '80%', marginTop: '3rem'}}>
        <TextField
            id=""
            label="Paste the article link"
            color='secondary'
            InputProps={{
                startAdornment: 
                <InputAdornment position='start'>
                    <AiOutlineLink className='text-xl text-gray-500' />
                </InputAdornment>,
                endAdornment: 
                <InputAdornment position='end'>
                    <AiOutlineEnter className='text-xl text-gray-500' />
                </InputAdornment>
            }}
            sx={{ width: '100%'}}
        />
    </Paper>
  )
}
