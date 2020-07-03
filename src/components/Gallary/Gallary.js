import React, { Fragment, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// components
import MasonryGallary from './components/MasonryGallary';
import GallaryItem from './components/MasonryGallary/GallaryItem';
// gallaru array
import { gallary } from './data';

const ProfileGallary = () => {
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState(gallary);

  const fetchMoreData = () => {
    if (items.length >= gallary.length) {
      setHasMore(false);
      return;
    }
  };

  return (
    <Fragment>
      <div className="mt-2">
        <InfiniteScroll
          dataLength={gallary.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          <MasonryGallary>
            {items.map((item) => (
              <GallaryItem
                key={item.id}
                src={item.src}
                title={item.category}
                video={item.video}
              />
            ))}
          </MasonryGallary>
        </InfiniteScroll>
      </div>
    </Fragment>
  );
};

export default ProfileGallary;
