import Container from '@mui/material/Container';
import * as React from 'react';
import Introduction from '../src/components/Introduction';
import Copyright from '../src/components/Copyright';

export default function Index() {
  return (
    <div class="wrapper">
        <Container>
            <Introduction/>
        </Container>
        <Copyright />
    </div>    
  );
}
