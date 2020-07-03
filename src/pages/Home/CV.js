import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
// Components
import Experiences from '../../components/CV/Experiences';
import Education from '../../components/CV/Education';
import Languages from '../../components/CV/Languages';
import Skills from '../../components/CV/Skills';
import AboutMe from '../../components/CV/AboutMe';

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
