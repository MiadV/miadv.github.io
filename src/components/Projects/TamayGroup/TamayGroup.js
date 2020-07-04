import React from 'react';
import {
  default as SimpleReactLightbox,
  SRLWrapper
} from 'simple-react-lightbox';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Ejamas = () => {
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
            <a href="https://tamaygroup.com">TamayGroup.com</a>
          </div>
          <div className="text-black-50">
            Company online profile (static website)
          </div>

          <div className="my-3">
            <p>Simple HTML + CSS (Bootstrap) </p>

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
          <SimpleReactLightbox>
            <SRLWrapper>
              <Grid container spacing={3} className="my-3">
                <Grid item sm={4}>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper rounded">
                    <img
                      alt="tamaygroup"
                      className="card-img-top rounded shadow-sm"
                      src={require('../../../assets/images/projects/tamaygroup/TamayGroup-Home.png')}
                      style={{
                        maxHeight: 100,
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  </a>
                </Grid>
              </Grid>
            </SRLWrapper>
          </SimpleReactLightbox>
          <div className="mt-3">
            <span className="text-warning mx-1 my-1 badge badge-neutral-warning badge-pill">
              CSS
            </span>
            <span className="text-danger mx-1 my-1 badge badge-neutral-danger badge-pill">
              HTML
            </span>
            <span className="text-info mx-1 my-1 badge badge-neutral-info badge-pill">
              Cpanel
            </span>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Ejamas;
