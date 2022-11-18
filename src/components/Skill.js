import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
const Skill = ({skills,category}) => {
    return(
        <div>
        <Stack>
            <Typography variant="h6" component="h6" color='primary'>
                {category}
            </Typography>
            <Typography variant="h7" component="h7" color='#808080'>
                {skills.join(" | ")}
            </Typography>
        </Stack>
        <br/>
        </div>
    )
}

export default Skill