import React from 'react';
import {
  default as SimpleReactLightbox,
  SRLWrapper
} from 'simple-react-lightbox';
// Mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const EdenMembership = () => {
  return (
    <Card className="projectCard card-box p-4">
      <div>
        <div className="card-tr-actions">
          <span className="badge badge-primary bg-amy-crisp">CMS</span>
        </div>
      </div>
      <Grid container spacing={3} className="mb-2">
        <Grid item xs={12}>
          <div className="font-size-lg font-weight-bold">
            <a href="#/">Membership Management System</a>
          </div>
          <div className="text-black-50">
            Eden Perfume Membership Management System.
          </div>

          <div className="my-3">
            <p>
              This system allows cashiers in the stores to check members status
              such as points balance, orders history, contract details… , It
              also notifies the member’s with SMS notifications.
            </p>
            <p>
              This project is based on{' '}
              <a
                href="https://reactjs.org/"
                title="A JavaScript library for building user interfaces"
                className="font-weight-bold">
                React-js
              </a>{' '}
              (front-end) and{' '}
              <a
                href="https://www.php.net/"
                title="PHP is a popular general-purpose scripting language"
                className="font-weight-bold">
                PHP
              </a>{' '}
              (back end) and also comes with an admin{' '}
              <span className="font-weight-bold">Android App</span> built using{' '}
              <a
                href="https://reactnative.dev/"
                title="Create native apps for Android and iOS using React"
                className="font-weight-bold">
                React Native
              </a>{' '}
              which simply notifies admin when an order is placed.
            </p>
            <p>
              Unfortunately I’m not able to reveal the links to this product for
              security reasons but you may view the repository on my{' '}
              <a
                href="https://www.github.com/miadv/"
                title="The world's leading software development platform"
                className="font-weight-bold">
                Github
              </a>{' '}
              it’s publicly available.
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
                      alt="eden perfume"
                      className="card-img-top rounded shadow-sm"
                      src={require('../../../assets/images/projects/eden-membership/EdenMembership.png')}
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
                      alt="eden perfume"
                      className="card-img-top rounded shadow-sm"
                      src={require('../../../assets/images/projects/eden-membership/EdenScent-app.jpg')}
                      style={{
                        maxHeight: 100,
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </a>
                </Grid>
              </Grid>
            </SRLWrapper>
          </SimpleReactLightbox>
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

export default EdenMembership;
