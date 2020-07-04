import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const AboutMe = () => {
  return (
    <React.Fragment>
      <Card className="aboutMeCard card-box p-4">
        <h4 className="font-size-lg font-weight-bold mb-4">About Me</h4>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="my-1">
              <div className="font-size-sm">
                <div className="flexTable">
                  <span className="font-weight-bold mr-1">Gender:</span>
                  <span className="text-black-50">Male</span>
                </div>
                <div className="flexTable">
                  <span className="font-weight-bold mr-1">Birthdate:</span>
                  <span className="text-black-50">02-03-1992</span>
                </div>
                <div className="flexTable">
                  <span className="font-weight-bold mr-1">Nationality:</span>
                  <span className="text-black-50">Iranian</span>
                </div>
              </div>
              <div className="flexTable">
                <span className="font-weight-bold mr-1">Address:</span>
                <span className="text-black-50">
                  No. 2006, Sri Bukit Ceylon, Bukit Ceylon, 50200, Kuala Lumpur,
                  Kuala Lumpur, Malaysia
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default AboutMe;
