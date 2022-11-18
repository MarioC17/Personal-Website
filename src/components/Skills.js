import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkillList from './SkillList';

//todo: add resume contents to a db
const Skills = () => {
    return(
        <div id="skills">
            <Box align="left" sx={{ ml: 4,my:4,height:'100vh',width:'100%'}}>
                <Typography variant="h5" component="h5" color='primary' gutterBottom>
                        Skills
                </Typography>
                <br/>
                <SkillList/>
            </Box>
        </div>
    )
}

export default Skills