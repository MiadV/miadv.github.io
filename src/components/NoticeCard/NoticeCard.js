import React, { useState } from 'react';
// Mui
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
// Icon
import Close from 'mdi-material-ui/Close';
import LightbulbOnOutline from 'mdi-material-ui/LightbulbOnOutline';

const NoticeCard = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Card className="card-box bg-plum-plate border-0 text-center mb-4">
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

        <div className="bg-composed-wrapper--image rounded" />
        <div className="bg-composed-wrapper--content text-light p-5">
          <span className="d-block font-weight-bold mb-3">
            <LightbulbOnOutline />
          </span>
          <p className="font-size-md mb-3">
            You are currently looking at my CV which might be a little outdated
            at this time but don't worry
          </p>
        </div>
      </Card>
    </Collapse>
  );
};
export default NoticeCard;
