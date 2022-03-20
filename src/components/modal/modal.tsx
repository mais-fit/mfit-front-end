import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import MediaCard from '../card';
import CloseIcon from '@mui/icons-material/Close';

import './modal.css'
import { borderRadius } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  borderRadius: '10px'
};

export default function FlavorsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button> {/** Esse botão vai para o exemplo, será retirado do componente mais tarde */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

          <Box sx={style}>
              <Box sx={{ display: 'flex', flexDirection: 'row-reverse', flex: 1 }}>
                <Button onClick={handleClose} className="CloseButton" variant="contained" disableElevation sx={{ borderRadius: '0 5px 0 5px'}}>
                  <CloseIcon />
                </Button>
              </Box>

              <Box className='flavorsPanel' >
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
                  <MediaCard />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
                <Button sx={{ padding: '10px 30px'}}>Salvar</Button>
              </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
