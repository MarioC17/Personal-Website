import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import styles from '../index.module.css'
const Project = ({title,field,skillsUsed,description,github=null,youtube=null}) => {
    return(
        <div>
        <Stack>
            <Typography variant="h6" component="h6" color='primary'>
                {title}
            </Typography>
            <Typography variant="h7" component="h7" color='#808080'>
                {field}
            </Typography>
            <Typography variant="h7" component="h7" color='#808080'>
                Skills: {skillsUsed.join(", ")}
            </Typography>
            <Grid container direction="row" alignItems="center">
                {github && 
                <Grid item>
                    <GitHubIcon className={styles.clickableIcon} color="primary" onClick={() => window.open(github)}/>
                </Grid>}
                {youtube &&
                <Grid item>
                    <YouTubeIcon color="primary" className={styles.clickableIcon} onClick={() => window.open(youtube)}/>
                </Grid>}
            </Grid>
            <Typography variant="p" component="p" color='primary'>
                {description}
            </Typography>
        </Stack>
        <br/>
        </div>
    )
}

export default Project