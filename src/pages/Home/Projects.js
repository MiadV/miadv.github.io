import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
// Components
import NoticeCard from '../../components/Projects/NoticeCard';
import TamayShoes from '../../components/Projects/TamayShoes';
import EdenScent from '../../components/Projects/EdenScent';
import EdenMembership from '../../components/Projects/EdenMembership';
import Ejamas from '../../components/Projects/Ejamas';
import TamayGroup from '../../components/Projects/TamayGroup';
import Gilasco from '../../components/Projects/Gilasco';

const Projects = () => {
  return (
    <>
      <Grid item xs={12} className="mb-4">
        <NoticeCard />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <TamayShoes />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <EdenMembership />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <EdenScent />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <Gilasco />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <Ejamas />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <TamayGroup />
      </Grid>
    </>
  );
};
export default Projects;
