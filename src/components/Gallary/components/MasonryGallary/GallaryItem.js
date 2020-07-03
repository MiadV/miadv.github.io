import React from 'react';
import PropTypes from 'prop-types';

const GallaryItem = ({ src, title, video }) => {
  if (video) {
    return (
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
    );
  }
  return (
    <div className="masonry_item_wrapper">
      <div className="masonry_item_content">
        <span className="badge badge-primary">{title}</span>
      </div>
      <img src={src} alt="src" className="masonry_item_image" />
    </div>
  );
};
export default GallaryItem;

GallaryItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
