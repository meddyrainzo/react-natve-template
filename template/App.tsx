import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

type AppProps = {};

const App: FC<AppProps> = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Hello world</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
