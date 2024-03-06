import { Button, Box } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

type ButtonsProps = {
  setFilter: Dispatch<SetStateAction<string>>
  handleOpenModal: () => void
};

const Buttons: React.FC<ButtonsProps>  = ({handleOpenModal, setFilter}) => {
  return(
    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
      <Button variant="outlined" onClick={handleOpenModal}>Add todo</Button>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button variant="contained" onClick={(): void => setFilter("All")}>All</Button>
        <Button variant="contained" color="success" onClick={(): void => setFilter("Completed")}>Completed</Button>
        <Button variant="contained" color='error' onClick={(): void => setFilter("Uncompleted")}>Uncompleted</Button>
      </Box>
    </Box>
  );
};


export default Buttons;