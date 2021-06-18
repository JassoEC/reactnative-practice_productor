import React from 'react';
import {View, Image} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../assets/react-logo-white.png')}
        style={{height: 100, width: 100}}
      />
    </View>
  );
};
