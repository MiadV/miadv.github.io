import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Experiences = () => {
  return (
    <React.Fragment>
      <Card className="experienceCard card-box p-4">
        <h4 className="font-size-lg font-weight-bold mb-4">Experience</h4>
        <Grid container spacing={3} className="mb-2">
          <Grid item xs={12} md={3} className="dateContainer">
            <div>Dec 2017 - Present</div>
            <span className="font-size-sm text-black-50 d-block">
              (2 years 7 months)
            </span>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="font-size-lg font-weight-bold">Web Developer</div>
            <div className="dateSm">Dec 2017 - Present</div>
            <div className="text-black-50">
              Tamay Business Group sdn. bhd. | Kuala Lumpur, Malaysia
            </div>

            <div className="my-3">
              <p>
                Designed and developed an online membership system based on
                (React-js, PHP backend, android app using react-native)
              </p>
              <p>
                Developed an expense management system based on MS Access and
                MY-SQL.
              </p>
              <p>
                Designed and maintained several static and e-commerce
                websites(customized Woo-commerce) including company’s online
                profile.
              </p>
              <p>Planned Runned social media marketing campaigns (SMM)</p>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="mb-2">
          <Grid item xs={12} md={3} className="dateContainer">
            <div>Mar 2016 - Nov 2017</div>
            <span className="font-size-sm text-black-50 d-block">
              (1 year 9 months)
            </span>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="font-size-lg font-weight-bold">Web Developer</div>
            <div className="dateSm">Mar 2016 - Nov 2017</div>
            <div className="text-black-50">
              Hormozgan Science & Technology Center | Iran
            </div>
            <div className="my-3"></div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="mb-2">
          <Grid item xs={12} md={3} className="dateContainer">
            <div>Feb 2015 - Oct 2016</div>
            <span className="font-size-sm text-black-50 d-block">
              (1 year 9 months)
            </span>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="font-size-lg font-weight-bold">
              Hydrotest Group Technician
            </div>
            <div className="dateSm">Feb 2015 - Oct 2016</div>
            <div className="text-black-50">
              PETRO SANAT Persian Gulf Start Oil Company | Iran
            </div>
            <div className="my-3">
              Developed a Comprehensive database for Hydro-test Group based on
              MS Access with real time work progress reports
            </div>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default Experiences;
