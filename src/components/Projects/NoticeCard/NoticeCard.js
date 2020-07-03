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
          <span className="d-block font-weight-bold mb-3">
            <LightbulbOnOutline />
          </span>
          <p className="font-size-md mb-3">
            all WordPress based websites have been pentested using{' '}
            <a
              href="https://wpscan.org/"
              title="WordPress Security Scanner"
              className="font-weight-bold">
              WPScan
            </a>{' '}
            on linux and{' '}
            <a
              href="https://www.acunetix.com/"
              title="Find, Fix, and Prevent Vulnerabilities"
              className="font-weight-bold">
              Acunetix
            </a>{' '}
            and are constantly monitored using{' '}
            <a
              href="https://www.wordfence.com/"
              title="Protect your websites with the best WordPress security available"
              className="font-weight-bold">
              Wordfence plugin
            </a>{' '}
            and login page is secured by <strong>2FA Authentication</strong>.
            This list is limited to currently live projects only
          </p>
        </div>
      </Card>
    </Collapse>
  );
};
export default NoticeCard;
