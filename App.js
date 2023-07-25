// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PostList from './screens/PostList';
import PostDetails from './screens/PostDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PostList">
        <Stack.Screen name="PostList" component={PostList} options={{ title: 'Posts' }} />
        <Stack.Screen name="PostDetails" component={PostDetails} options={({ route }) => ({ title: route.params.post.title })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
