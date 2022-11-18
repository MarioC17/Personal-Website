import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Grid} from '@mui/material';
//todo: add resume contents to a db
const Education = () => {
    return(
        <div id="education">
            <Box sx={{ ml: 4,my:4,height:'90vh',width:'100%'}}>
                <Typography variant="h5" component="h1" color='primary' gutterBottom>
                        Education
                </Typography>
                <Grid container
                    direction="row"
                    height="100%"
                    justifyContent="left"
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    justify="flex"
                    alignItems="center">
                    <Grid item xs={12} md={6} sm={3}>
                        <Typography variant="h6" component="h6" color='primary'>
                                MacEwan University
                        </Typography>
                        <Typography variant="h7" component="h7" color='#808080' gutterBottom>
                            Bachelor’s Degree in Computer Science, minor in business studies
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sm={3} alignItems="right">
                        <Typography variant="p" component="p" color='primary' gutterBottom>
                            2017 - 2022
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Education