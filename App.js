import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FacebookScreen from './Screens/fb'
import InstagramScreen from './Screens/in'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Container/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator({
  Facebook: {screen: FacebookScreen}, 
  Instagram: {screen: InstagramScreen}
})

const Container = createAppContainer(Tab)