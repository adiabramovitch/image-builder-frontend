import React, { useEffect } from 'react';

import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '@patternfly/patternfly/patternfly-addons.css';

import { Router } from './Router';
import { resolveRelPath } from './Utilities/path';

const App = (props) => {
  const navigate = useNavigate();
  const store = useStore();

  useEffect(() => {
    document.title = 'Image Builder | Red Hat Insights';
    insights.chrome.init();
    insights.chrome.identifyApp('image-builder');
    insights.chrome.hideGlobalFilter();
    const unregister = insights.chrome.on('APP_NAVIGATION', () =>
      navigate(resolveRelPath(''))
    );
    return () => {
      unregister();
    };
  }, []);

  return (
    <React.Fragment>
      <NotificationsPortal store={store} />
      <Router childProps={props} />
    </React.Fragment>
  );
};

export default App;
