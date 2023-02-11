import logo from './logo.svg';
import './App.css';
import CommonTable from './components/Table';
import { Grid } from '@mui/material';

function App() {
  return (
    <>
    <Grid container mt={4}>
      <Grid item lg={6} xs={11} margin="auto">
        <CommonTable/>
      </Grid>
    </Grid>
    </>
  );
}

export default App;
