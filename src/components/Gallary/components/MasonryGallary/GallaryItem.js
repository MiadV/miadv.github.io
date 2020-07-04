import React from 'react';
import PropTypes from 'prop-types';

const GallaryItem = ({ src, video }) => {
  if (video) {
    return (
      <div className="masonry_item_wrapper" style={{ overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          width="100%"
          poster={src}
          style={{ backgroundColor: 'black' }}
          controlsList="nodownload">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
  return (
    <div className="masonry_item_wrapper">
      <img src={src} alt="portfolio" className="masonry_item_image" />
    </div>
  );
};
export default GallaryItem;

GallaryItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
