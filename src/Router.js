import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Menu from './components/Menu';
import MyOrder from './components/MyOrder';
import TabIcon from './components/TabIcon';
import MyOrderTabIcon from './components/MyOrderTabIcon';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="main"
        tabs
        tabBarStyle={{ backgroundColor: '#eee' }}
        tabBarSelectedItemStyle={{ backgroundColor: '#ddd' }}
      >
        <Scene
          key="menu"
          component={Menu}
          title="Menu"
          icon={TabIcon}
          initial
          sceneStyle={sceneStyle}
        />
        <Scene
          key="myOrder"
          component={MyOrder}
          icon={MyOrderTabIcon}
          title="My Order"
          sceneStyle={sceneStyle}
        />
      </Scene>
    </Router>
  );
};

const sceneStyle = { paddingTop: 65, paddingBottom: 50 };

export default RouterComponent;
