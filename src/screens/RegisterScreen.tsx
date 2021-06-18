import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const RegisterScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Register Screen</Text>
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
