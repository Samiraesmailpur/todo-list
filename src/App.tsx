import Todos from "@components/Todos/Todos";
import Container from '@mui/material/Container';

const App = (): JSX.Element => {
  return (
    <Container  maxWidth="lg">
      <Todos />
    </Container>
  );
};

export default App;