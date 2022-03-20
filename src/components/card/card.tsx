import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import './card.css'

export default function MediaCard() {
  return (
    <Card className='flavorCard' sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://s2.glbimg.com/zCucirf9qhCtELEw9mHdvE4OZH8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/17/marmita.jpg"
        alt="green iguana"
      />
      <div className='flavorName'>
        Nome do sabor
      </div>
    </Card>
  );
}
