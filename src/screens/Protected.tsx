import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ProtectedScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Protected Screen</Text>
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
