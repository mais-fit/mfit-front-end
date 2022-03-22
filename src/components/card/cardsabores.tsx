import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './card.css'

interface IMediaCard {
  imagePath: string
}

export default function MediaCardFlavor(props: IMediaCard) {
  const imagePath = props.imagePath
  return (
    <Card className='flavorCard' sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="300"
        image={imagePath}
        alt="green iguana"
      />
      <div className='flavorName'>
        Nome do sabor

      </div>
      <div className= 'Flex'>
        <Button className='ButtonEdit' variant="contained">-</Button>
        <String>15</String>
        <Button className='ButtonEdit' variant="contained">+</Button>
      </div>
 
    </Card>
  );
}
