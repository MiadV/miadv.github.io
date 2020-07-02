import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from 'react-router-dom';
// Mui
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';

const ModalRoute = ({ component: Component, ...rest }) => {
  let history = useHistory();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  let close = (e) => {
    e.stopPropagation();
    setOpen(false);
    history.goBack();
  };

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Dialog
          aria-labelledby="modal-item"
          fullScreen={fullScreen}
          maxWidth="md"
          open={open}
          onClose={close}
          scroll="body"
          transitionDuration={500}>
          <Component {...matchProps} />
        </Dialog>
      )}
    />
  );
};

ModalRoute.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default ModalRoute;
