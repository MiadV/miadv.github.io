import React, { Component, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
// Mui
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
// utils
import MuiTheme from './theme';
import ErrorBoundary from './utils/ErrorBoundary';
// base css
import './assets/base.scss';
//  Components
import Home from './pages/Home';

//  Google tracking
ReactGA.initialize('UA-124189379-5');
// Initialize google analytics page view tracking
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        <ErrorBoundary>
          <ThemeProvider theme={MuiTheme}>
            <Suspense
              fallback={
                <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
                  <div className="w-50 mx-auto">Please wait while we load</div>
                </div>
              }>
              <Home />
            </Suspense>
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

export default App;
