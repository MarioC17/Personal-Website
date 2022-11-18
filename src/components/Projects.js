import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Project from './Project';
import ProjectList from './ProjectList';

//todo: Make this page look cool and have a section about what I'm currently working on
const Projects = () => {
    return(
        <div id="projects">
            <Box align="left" sx={{ ml: 4,my:4,height:'90vh',width:'100%'}}>
                <Typography variant="h5" component="h5" color='primary' gutterBottom>
                        Projects
                </Typography>
                <br/>
                <ProjectList/>
            </Box>
        </div>
    )
}

export default Projects