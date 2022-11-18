import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Jobs from './Jobs';

//todo: add resume contents to a db
const WorkExperience = () => {
    return(
        <div id="experience" >
            <Box align="left" sx={{ ml: 4,my:4,height:'100vh',width:'100%'}}>
                <Typography variant="h5" component="h5" color='primary' gutterBottom>
                        Work Experience
                </Typography>
                <br/>
                <Jobs/>
            </Box>
        </div>
    )
}

export default WorkExperience