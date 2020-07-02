import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Skills = () => {
  return (
    <React.Fragment>
      <Card className="skillsCard card-box p-4">
        <h4 className="font-size-lg font-weight-bold mb-4">Skills</h4>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="my-2">
              WordPress, Photoshop, Microsoft Office, Lightroom, Cubase, Adobe
              Audition, PHP And MySQL, HTML, react, JavaScript
            </div>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default Skills;
