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
      <Card className="card-box card-box bg-neutral-primary border-2 card-border-top border-first text-center mb-4">
        <div className="card-tr-actions">
          <IconButton
            style={{ zIndex: 1000 }}
            aria-label="close"
            onClick={() => {
              setOpen(false);
            }}>
            <Close fontSize="inherit" />
          </IconButton>
        </div>

        <div className="bg-composed-wrapper--image rounded" />
        <div className="bg-composed-wrapper--content  p-4">
          <span className="d-block font-weight-bold font-size-xxl mb-3">
            <LightbulbOnOutline />
          </span>
          <p className="font-size-md mb-3">
            These are some of my photo editing works which includes Product
            Photo Editing, Social Media Posts, Photo Retouching etc...
          </p>
        </div>
      </Card>
    </Collapse>
  );
};
export default NoticeCard;
