import React from 'react';
import {View} from 'react-native';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#5856D5',
        width: 1000,
        height: 1200,
        top: -400,
        transform: [{rotate: '-70deg'}],
      }}
    />
  );
};
