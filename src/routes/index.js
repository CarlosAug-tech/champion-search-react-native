import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const Route = createStackNavigator();

export default function Routes() {
  return (
    <Route.Navigator initialRouteName="homepage" headerMode={false}>
      <Route.Screen name="homepage" component={Home} />
    </Route.Navigator>
  );
}
