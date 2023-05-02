import { Container, Stack, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GitHubButton } from '@/styles/materials'
import SearchingBar from './SearchingBar'

export default function Hero() {
  return (
    <Container maxWidth='xl' sx={{ position: 'relative'}}>
        <Stack marginTop='2rem' direction='row' justifyContent='space-between'>
            <Typography variant="h4" color="initial">
                Summarize
            </Typography>
            <GitHubButton size='small' variant='contained' sx={{ bgcolor: 'black'}}>
                <AiFillGithub className='text-3xl' />
            </GitHubButton>
        </Stack>
        <Box marginTop='5rem' display='flex' alignItems='center' flexDirection='column'>
            <h2 className='text-5xl font-bold'>Summarize your Articles with <span>OpenAI</span></h2>
            <p className='mt-[1rem]'>Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries</p>
            <SearchingBar />
        </Box>       
    </Container>
  )
}
