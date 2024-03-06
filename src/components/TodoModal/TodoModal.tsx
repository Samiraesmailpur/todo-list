import { Dispatch, SetStateAction, useState } from 'react';
import { addTodo } from '@store/todolist/reducer';
import { useAppDispatch } from '@store/hooks';
import { Box, Dialog, DialogContent, DialogActions, TextField, Button } from '@mui/material';


type TodoModalProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
};


const TodoModal: React.FC<TodoModalProps> = ({setOpen, open}) => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string>("");


  const handleClose = (): void => {
    setOpen(false);
  };

  const MAX_CHARACTERS = 10;


  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>): void => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const name = formJson.name;
            if(name.length <= MAX_CHARACTERS) {
              dispatch(addTodo(name));
              handleClose();
            } else {
              setErrorMessage(`Please enter a value with a length less than or equal to ${MAX_CHARACTERS} characters`);
            }
          
          },
        }}
      >
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            type="text"
            fullWidth
            className='form'
          />
          {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};


export default TodoModal;