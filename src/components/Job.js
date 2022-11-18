import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { ListItem, Grid } from '@mui/material';

const Job = ({title,company,description,tenure}) => {
    return(
        <Grid container
        direction="row"
        justifyContent="left"
        alignItems="left"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6} sm={3}>
                <Typography variant="h6" component="h6" color='primary'>
                        {title}
                </Typography>
                <Typography variant="h7" component="h7" color='#808080' gutterBottom>
                        {company}
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 4,color: 'white' }}>
                    {description.map(bullet => 
                        <ListItem sx={{ display: 'list-item' }} key={bullet}>
                            <Typography variant="p" component="p" color='primary' gutterBottom>
                                {bullet}
                            </Typography>
                        </ListItem>
                )}
                </List>
            </Grid>
            <Grid item xs={12} md={6} sm={3} alignItems="right">
                <Typography variant="p" component="p" color='primary' gutterBottom>
                   {tenure}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Job