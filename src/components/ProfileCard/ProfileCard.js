import React from 'react';
// Mui
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// Icons
import Github from 'mdi-material-ui/Github';
import Instagram from 'mdi-material-ui/Instagram';
import Facebook from 'mdi-material-ui/Facebook';
import Whatsapp from 'mdi-material-ui/Whatsapp';

const ProfileCard = () => {
  return (
    <Card className="card-box text-center p-4">
      <div>
        <div className="card-tr-actions"></div>
        <div className="card-tl-actions">
          <Tooltip arrow title="status">
            <span className="badge badge-primary">Available</span>
          </Tooltip>
        </div>
      </div>
      <div className="avatar-icon-wrapper rounded-circle mx-auto">
        <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
          <div className="rounded-circle border-3 border-white overflow-hidden">
            <img
              alt="..."
              className="img-fluid"
              src={require('../../assets/images/miad.jpg')}
              style={{ maxWidth: 150 }}
            />
          </div>
        </div>
      </div>
      <div className="my-3">
        <h4 className="font-size-lg font-weight-bold m-0">Miad Vosoughi Nia</h4>
        <span className="text-black-50 d-block ">MY, Kuala Lumpur</span>
      </div>
      <div className="text-center my-3">
        <span className="text-first mx-1 my-1 badge badge-neutral-first badge-pill">
          Web developer
        </span>
        <span className="text-warning mx-1 my-1 badge badge-neutral-warning badge-pill">
          Javascript
        </span>
        <span className="text-danger mx-1 my-1 badge badge-neutral-danger badge-pill">
          React
        </span>
        <span className="text-success mx-1 my-1 badge badge-neutral-success badge-pill">
          WordPress
        </span>
        <span className="text-danger mx-1 my-1 badge badge-neutral-danger badge-pill">
          Photoshop
        </span>
      </div>

      <p className="text-black-50 my-3">
        I’m a self-taught programmer with high enthusiasm for new technologies.
        I have done many project including yet not limited to eCommerce, Static
        websites and Managment systems as well as MS Access databases.
      </p>

      <div className="font-size-sm p-3 bg-light rounded-sm">
        <div className="d-flex justify-content-between">
          <span className="font-weight-bold">Email:</span>
          <span className="text-black-50">Miadsoft@gmail.com</span>
        </div>
        <div className="d-flex justify-content-between py-2">
          <span className="font-weight-bold">Phone:</span>
          <span className="text-black-50">+60173677473</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="font-weight-bold">Location:</span>
          <span className="text-black-50">MY, Kuala Lumpur</span>
        </div>
      </div>
      <div className="pt-3">
        <Tooltip arrow title="Github">
          <IconButton
            href="https://github.com/miadv"
            variant="outlined"
            className="d-50 m-2 text-github">
            <Github />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Instagram">
          <IconButton
            href="https://instagram.com/miad.vosoughi"
            variant="outlined"
            className="d-50 m-2 text-instagram">
            <Instagram />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Facebook">
          <IconButton
            href="https://www.facebook.com/Miad.Vosoughi.Nia"
            variant="outlined"
            className="d-50 m-2 text-facebook">
            <Facebook />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Whatsapp">
          <IconButton
            href="https://api.whatsapp.com/send?phone=60173677473&text=Hi%20Miad%20I%20found%20this%20number%20on%20your%20portfolio"
            variant="outlined"
            className="d-50 m-2 text-whatsapp">
            <Whatsapp />
          </IconButton>
        </Tooltip>
      </div>
    </Card>
  );
};

export default ProfileCard;
