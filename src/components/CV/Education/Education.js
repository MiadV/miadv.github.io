import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Education = () => {
  return (
    <React.Fragment>
      <Card className="educationCard card-box p-4">
        <h4 className="font-size-lg font-weight-bold mb-4">Education</h4>
        <Grid container spacing={3} className="mb-2">
          <Grid item xs={12} md={3} className="dateContainer">
            <div>2011 - 2014</div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="font-size-lg font-weight-bold">
              Science and Research Branch of Fars University
            </div>
            <div className="dateSm">2011 - 2014</div>
            <div className="text-black-50">
              Bachelor's Degree in Chemical Engineering | Iran
            </div>
            <div className="my-3">
              <div className="font-size-sm">
                <div className="flexTable">
                  <span className="font-weight-bold mr-1">Major:</span>
                  <span className="text-black-50">Chemical Engineering</span>
                </div>
                <div className="flexTable">
                  <span className="font-weight-bold mr-1">GPA:</span>
                  <span className="text-black-50">16.54 / 20.0</span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default Education;
