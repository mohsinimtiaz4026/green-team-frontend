import { Box } from '@mui/material';
import { FaStar } from 'react-icons/fa';

const Stars = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: props.filled ? '#3e7844' : '#ffffff',
          padding: 0.2,
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <FaStar color={props.filled ? '#fff' : '#3e7844'} />
      </Box>
      &nbsp;
    </>
  );
};

export default Stars;
