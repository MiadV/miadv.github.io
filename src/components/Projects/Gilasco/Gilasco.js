import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Gilasco = () => {
  return (
    <Card className="projectCard card-box p-4">
      <div>
        <div className="card-tr-actions">
          <span className="badge badge-primary bg-strong-bliss">Static</span>
        </div>
      </div>
      <Grid container spacing={3} className="mb-2">
        <Grid item xs={12}>
          <div className="font-size-lg font-weight-bold">
            <a href="https://gilasco.com">Gilasco.com</a>
          </div>
          <div className="text-black-50">
            Company online profile (static website)
          </div>

          <div className="my-3">
            <p>
              Built using{' '}
              <a
                href="https://reactjs.org/"
                title="A JavaScript library for building user interfaces"
                className="font-weight-bold">
                React-js
              </a>{' '}
              framework.
            </p>

            <p>
              Hosted on{' '}
              <a
                href="https://www.shinjiru.com.my/"
                title="Web Hosting Platform"
                className="font-weight-bold">
                Shinjiru
              </a>
              .
            </p>
          </div>

          <Grid container spacing={3} className="my-3">
            <Grid item sm={4}>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card-img-wrapper rounded">
                <img
                  alt="gilasco"
                  className="card-img-top rounded shadow-sm"
                  src={require('../../../assets/images/projects/gilasco/Gilasco-Home.png')}
                  style={{
                    maxHeight: 100,
                    objectFit: 'cover',
                    objectPosition: '0%  0%'
                  }}
                />
              </a>
            </Grid>
          </Grid>

          <div className="mt-3">
            <span className="text-danger mx-1 my-1 badge badge-neutral-danger badge-pill">
              React-js
            </span>
            <span className="text-warning mx-1 my-1 badge badge-neutral-warning badge-pill">
              JSX
            </span>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Gilasco;
