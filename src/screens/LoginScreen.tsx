import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const LoginScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
