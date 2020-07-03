import React from 'react';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const TamayShoes = () => {
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
            <a href="https://tamayshoes.com">TamayShoes.com</a>
          </div>
          <div className="text-black-50">
            An online leather products store based on WooCommerce.
          </div>

          <div className="my-3">
            <p>
              Website is bootstrapped with a premium theme as a starting point.
              I had to customize the Home page due to the employer’s request (I
              usually avoid full screen sliders since it’s not that trendy
              nowadays and leave some gap for the UI to breathe).
            </p>
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
              Added <span className="font-weight-bold">Light Box</span> for
              Products Single Page Zoom (on product image click).
            </p>
            <p>
              Implemented an affiliate’s dashboard for each affiliate user (done
              by manipulating some third party plugins and customizing it
              according to employer’s loyalty program).
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
              Some functionalities are disabled due to employers request such as
              Product Quick View and 2nd Image on Hover.
            </p>
            <p>
              Hosted on{' '}
              <a
                href="https://www.siteground.com/"
                title="Web Hosting Platform"
                className="font-weight-bold">
                SiteGround
              </a>{' '}
              (Singapore servers), all the staging’s and backups are managed
              inside SiteGround’s dashboard.
            </p>
          </div>

          <Grid container spacing={3} className="my-3">
            <Grid item sm={4}>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card-img-wrapper rounded">
                <img
                  alt="edenscent"
                  className="card-img-top rounded shadow-sm"
                  src={require('../../../assets/images/projects/tamayshoes/Tamayshoes-Home.png')}
                  style={{
                    maxHeight: 100,
                    objectFit: 'cover',
                    objectPosition: '0%  0%'
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
                  alt="edenscent"
                  className="card-img-top rounded shadow-sm"
                  src={require('../../../assets/images/projects/tamayshoes/Tamayshoes-ProductPage.png')}
                  style={{
                    maxHeight: 100,
                    objectFit: 'cover',
                    objectPosition: '0%  0%'
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
                  alt="edenscent"
                  className="card-img-top rounded shadow-sm"
                  src={require('../../../assets/images/projects/tamayshoes/Tamayshoes-Products.png')}
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
export default TamayShoes;
