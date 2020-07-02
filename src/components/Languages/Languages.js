import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Languages = () => {
  return (
    <React.Fragment>
      <Card className="languagesCard card-box p-4">
        <h4 className="font-size-lg font-weight-bold mb-4">Languages</h4>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="text-black-50">
              Proficiency level: 0 - Poor, 10 - Excellent
            </div>
            <div className="my-1">
              <div className="font-size-sm">
                <div className="flexTable">
                  <span className="font-weight-bold mr-1">English:</span>
                  <span className="text-black-50">Spoken 7 | Written 7</span>
                </div>
                <div className="flexTable">
                  <span className="font-weight-bold mr-1">Persian:</span>
                  <span className="text-black-50">Spoken 10 | Written 10</span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default Languages;
