import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//todo: add resume download, linkedin link and github link. Also add hobbies here and personality stuff
const Introduction = () => {
    return(
        <div id="introduction">
            <Box align="left" sx={{ display: 'flex', alignItems: 'center',ml: 4,my:4,width:'40%',height: '100vh'}}>
                <Stack>
                    <Typography variant="h4" component="h1" color='primary' gutterBottom>
                        Mario Calderon
                    </Typography>
                    <Typography variant="h6" component="h6" color='primary' gutterBottom>
                        Edmonton,AB · mariocalderon00@gmail.com
                    </Typography>
                    <Typography variant="h6" component="p" color='secondary' gutterBottom>
                        A recent computer science graduate looking for entry level software and web development opportunities.
                        I am currently working on improving my skills in the SERN stack as I continue my journey of lifelong learning.
                    </Typography>
                </Stack>
            </Box>
        </div>
    )
}

export default Introduction