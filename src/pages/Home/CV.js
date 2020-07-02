import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
// Components
import Experiences from '../../components/Experiences';
import Education from '../../components/Education';
import Languages from '../../components/Languages';
import Skills from '../../components/Skills';
import AboutMe from '../../components/AboutMe';

const CV = () => {
  return (
    <>
      <Grid item xs={12} className="mb-4">
        <Experiences />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <Education />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <Languages />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <Skills />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <AboutMe />
      </Grid>
    </>
  );
};

export default CV;
