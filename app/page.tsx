import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Link } from '@mui/material';

async function getData() {
  const res = await fetch('https://www.melivecode.com/api/attractions')
  if (!res.ok) {
    throw new Error('Fetching data failed')
  }
  return res.json()
}

interface Attractions {
  id: number,
  name: string,
  detail: string,
  coverimage: string,
  lattitude: number,
  longitude: number
}

export default async function Page() {
  const data = await getData()
  //console.log(data)

  return (
    <Container maxWidth="xl">
      <h1 className='flex text-green-400 justify-center' >World Walker 🥷🏼</h1>
      <Grid container spacing={2}>
        {data.map((a: Attractions) => (
          <Grid item xs={12} md={4} key={a.id}> 
             <Card sx={{ maxWidth: 900 }} >
              <CardMedia
                sx={{ height: 300 }}
                image={a.coverimage}
                title={a.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {a.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={'/'+a.id}>
                  Learn more
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
