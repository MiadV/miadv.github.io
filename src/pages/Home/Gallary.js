import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
// Components
import NoticeCard from '../../components/Gallary/NoticeCard';
import MyGallary from '../../components/Gallary/';

const Gallary = () => {
  return (
    <>
      <Grid item xs={12} className="mb-4">
        <NoticeCard />
      </Grid>
      <Grid item xs={12} className="mb-4">
        <MyGallary />
      </Grid>
    </>
  );
};
export default Gallary;
