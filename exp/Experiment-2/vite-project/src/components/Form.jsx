import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form() {
  return (
    <div style={{ width: '300px', margin: '40px auto' }}>
      <TextField
        label="Name"
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        required
        margin="normal"
      />
      <Button variant="contained" fullWidth>
        Submit
      </Button>
    </div>
  );
}

export default Form;
