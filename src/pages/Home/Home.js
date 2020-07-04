import React, { useState, Suspense, lazy } from 'react';
// Mui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
// components
import HeroSection from '../../components/HeroSection';
import ProfileCard from '../../components/ProfileCard';
const CV = lazy(() => import('./CV'));
const Projects = lazy(() => import('./Projects'));
const Gallary = lazy(() => import('./Gallary'));

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg" className="py-5">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <Card className="card-box w-100">
            <Tabs
              value={currentTab}
              indicatorColor="secondary"
              textColor="primary"
              variant="fullWidth"
              onChange={handleTabChange}>
              <Tab label="CV" />
              <Tab label="Projects" />
              <Tab label="Gallary" />
            </Tabs>
          </Card>
          {/* CV */}
          <Suspense fallback={<div>Loading...</div>}>
            <TabPanel value={currentTab} index={0} className="my-3">
              <CV />
            </TabPanel>
            <TabPanel value={currentTab} index={1} className="my-3">
              <Projects />
            </TabPanel>
            <TabPanel value={currentTab} index={2} className="my-3">
              <Gallary />
            </TabPanel>
          </Suspense>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
