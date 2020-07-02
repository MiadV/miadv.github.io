import React, { useState } from 'react';
// Mui
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
// Icon
import Close from 'mdi-material-ui/Close';

const HeroSection = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Card className="card-box bg-composed-wrapper bg-midnight-bloom border-0 text-center mb-4">
        <div className="card-tr-actions">
          <IconButton
            className="text-white"
            style={{ zIndex: 1000 }}
            aria-label="close"
            onClick={() => {
              setOpen(false);
            }}>
            <Close fontSize="inherit" />
          </IconButton>
        </div>

        <div className="bg-composed-img-2 bg-composed-wrapper--image rounded" />
        <div className="bg-composed-wrapper--content text-light p-5">
          <h4 className="font-size-xl font-weight-bold mb-2">
            Hey, Welcome...
          </h4>
          <p className="font-size-md mb-3">
            You are currently looking at my CV which might be a little outdated
            at this time but don't worry
            <br /> you can always contact me for a more UpToDate CV and may be
            some coffee{' '}
            <span role="img" aria-label="emoji">
              ☕
            </span>
            .
          </p>
        </div>
      </Card>
    </Collapse>
  );
};

export default HeroSection;
