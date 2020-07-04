import React, { Fragment } from 'react';
import {
  default as SimpleReactLightbox,
  SRLWrapper
} from 'simple-react-lightbox';
// components
import MasonryGallary from './components/MasonryGallary';
import GallaryItem from './components/MasonryGallary/GallaryItem';
// gallary array
import { gallary } from './data';

const ProfileGallary = () => {
  return (
    <Fragment>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="mt-2">
            <MasonryGallary>
              {gallary.map((item) => (
                <GallaryItem
                  key={item.id}
                  src={item.src}
                  title={item.category}
                  video={item.video}
                />
              ))}
            </MasonryGallary>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Fragment>
  );
};

export default ProfileGallary;
