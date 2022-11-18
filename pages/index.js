import { Stack } from '@mui/material';
import * as React from 'react';
import Introduction from '../src/components/Introduction';
import WorkExperience from './../src/components/WorkExperience';
import Copyright from './../src/components/Copyright';
import styles from '../src/index.module.css'
import Education from '../src/components/Education';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import Sidebar from './../src/components/Sidebar';
import  Grid  from '@mui/material/Grid';

export default function Index() {
  return (
    <div>
        {/* <div className={styles.sidebarContainer}>
            dssss
        </div> */}
        <Sidebar/>
        <Grid className={styles.mainContainer} container spacing={1}>
            <Grid item xs={12} md={12} sm={12}>
                <Introduction/>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
                <WorkExperience/>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
                <Education/>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
                <Projects/>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
                <Skills/>
            </Grid>
        </Grid>
        <Copyright/>
    </div>
  );
}

