import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface myParams {
  params: {
    id:string
  }
}

async function getData(id:string) {
  const res = await fetch('https://www.melivecode.com/api/attractions/'+id)
  if (!res.ok) {
    throw new Error('Error fetching')
  }
  return res.json() 
}

export default async function Page({ params }: myParams){
  const data = await getData(params.id)
  return (
    <Container maxWidth="md">
       <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={data.attraction.coverimage}
            title={data.attraction.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {data.attraction.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.attraction.detail}
            </Typography>
          </CardContent>
        </Card>
    </Container>
  )
}
