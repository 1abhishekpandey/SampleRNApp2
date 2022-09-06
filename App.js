import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import rc, {RUDDER_LOG_LEVEL} from '@rudderstack/rudder-sdk-react-native';
import braze from '@rudderstack/rudder-integration-braze-react-native';

const initialization = async () => {
  const config = {
    dataPlaneUrl: 'https://rudderstacbumvdrexzj.dataplane.rudderstack.com',
    logLevel: RUDDER_LOG_LEVEL.VERBOSE,
    withFactories: [braze]
  };
  
  await rc.setup('2ECWdegkwEBdcOpB4uwWT9bKnKH', config);
  
  await rc.identify("test_userIdiOS", {
    "email": "testuseriOS@example.com",
    "location": "UK"
  });
  const props = {
    k1: 'v1',
    k2: 'v3',
    k3: 'v3',
    name: 'Miraj'
  };
  await rc.track('New React Native event', props);
  await rc.screen('New React Native screen', props);
}

export default function App() {
  
  (async function () {
    initialization()
  })();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
