import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import withCodePush from './codepush';

const App = () => {
  return (
    <View style={{
      backgroundColor:'yellow',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{fontSize:25, fontWeight:"bold"}}>Hello I am a React-Native App.</Text>
      <Text style={{fontSize:25, fontWeight:"bold"}}>CodePush</Text>
      <Text>123
      </Text>
    </View>
  );
};

export default withCodePush(App);
