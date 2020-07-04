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
          <span className="badge badge-primary bg-plum-plate">E-commerce</span>
        </div>
      </div>
      <Grid container spacing={3} className="mb-2">
        <Grid item xs={12}>
          <div className="font-size-lg font-weight-bold">
            <a href="https://ejamas.com">Ejamas.com</a>
          </div>
          <div className="text-black-50">
            Hand Bags Wholesale / Retail Store (not actively selling at this
            time but website is live)
          </div>

          <div className="my-3">
            <p>
              All modifications are applied using{' '}
              <a
                href="https://developer.wordpress.org/themes/advanced-topics/child-themes/"
                title="Wordpress Child Themes"
                className="font-weight-bold">
                Child Theme
              </a>{' '}
              to avoid breaking the base theme during updates.{' '}
            </p>

            <p>
              Website is integrated with{' '}
              <a
                href="https://analytics.google.com/analytics/"
                title="Google Analytics lets you measure your advertising ROI as well as track your Flash, video, and social networking sites and applications."
                className="font-weight-bold">
                Google Analytics
              </a>{' '}
              ,{' '}
              <a
                href="https://developers.facebook.com/docs/facebook-pixel/"
                title="The Facebook pixel is a snippet of JavaScript code that allows you to track visitor activity on your website."
                className="font-weight-bold">
                Facebook Pixel
              </a>{' '}
              ,{' '}
              <a
                href="https://mailchimp.com/"
                title="Mailchimp is an American marketing automation platform and email marketing service."
                className="font-weight-bold">
                Mailchimp
              </a>{' '}
              .
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
          <SimpleReactLightbox>
            <SRLWrapper>
              <Grid container spacing={3} className="my-3">
                <Grid item sm={4}>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper rounded">
                    <img
                      alt="ejamas"
                      className="card-img-top rounded shadow-sm"
                      src={require('../../../assets/images/projects/ejamas/Ejamas-Home.png')}
                      style={{
                        maxHeight: 100,
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  </a>
                </Grid>

                <Grid item sm={4}>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper rounded">
                    <img
                      alt="ejamas"
                      className="card-img-top rounded shadow-sm"
                      src={require('../../../assets/images/projects/ejamas/Ejamas-ProductPage.png')}
                      style={{
                        maxHeight: 100,
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  </a>
                </Grid>
                <Grid item sm={4}>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper rounded">
                    <img
                      alt="ejamas"
                      className="card-img-top rounded shadow-sm"
                      src={require('../../../assets/images/projects/ejamas/Ejamas-Products.png')}
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
            <span className="text-first mx-1 my-1 badge badge-neutral-first badge-pill">
              WordPress
            </span>
            <span className="text-warning mx-1 my-1 badge badge-neutral-warning badge-pill">
              WooCommerce
            </span>
            <span className="text-danger mx-1 my-1 badge badge-neutral-danger badge-pill">
              PHP
            </span>
            <span className="text-success mx-1 my-1 badge badge-neutral-success badge-pill">
              Photoshop
            </span>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Ejamas;
