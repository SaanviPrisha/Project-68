import * as React from 'React'
import {  View , Text, StyleSheet } from 'react-native'

export default class Instagram extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This would be the page for Instagram.</Text>
            </View>
        )
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
  
