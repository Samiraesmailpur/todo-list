import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { selectTodos } from '@store/todolist/selectors';
import { updateStatus } from '@store/todolist/reducer';
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from '@mui/material';
import Buttons from '@components/Buttons/Buttons';
import TodoModal from '@components/TodoModal/TodoModal';
import Todo from 'src/types/todo';


const textStyles = {
  color: '#606060'
};

const Todos: React.FC = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState("All");

  const todos = useAppSelector(selectTodos);

  const completedTodosLength = todos.filter((item: Todo) => item.status === true).length;
  const uncompletedTodosLength = todos.filter((item: Todo) => item.status === false).length;
  
  const filteredTodos = 
    filter === 'All'
      ? todos 
      : filter === 'Completed'
        ? todos.filter((item: Todo) => item.status === true)
        : todos.filter((item: Todo) => item.status === false);


  const handleOpenModal = (): void => {
    setOpen(true);
  };

  const toggleTodoStatus = (id: string, status: boolean): void => {
    dispatch(
      updateStatus({
        id: id,
        newStatus: !status,
      })
    );
  };

  return (
    <>
      <Buttons handleOpenModal={handleOpenModal} setFilter={setFilter}/>
      <Box sx={{ fontSize: '18px', fontWeight: '100px'}}>
        <Typography style={textStyles}>Number of completed: {completedTodosLength}</Typography>
        <Typography style={textStyles}>Number of uncompleted: {uncompletedTodosLength}</Typography>
      </Box>
      <List>
        {filteredTodos.map(({id, name, status})=> 
          <ListItem sx={{ border: "1px solid #b0c6ff", cursor: 'pointer' }} key={id} disablePadding>
            <ListItemButton role={undefined} onClick={(): void => toggleTodoStatus(id, status)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={status === true}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText sx={{ color: '#606060' }}>{name}</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
      {open && <TodoModal setOpen={setOpen} open={open}/>}
    </>
  );
};

export default Todos;
