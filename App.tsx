import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedSplash from "./src/components/AnimatedSplash";
import { useState } from "react";

export default function App() {
    const [showSplash, setShowSplash] = useState(true);

  if (showSplash) return <AnimatedSplash onFinish={() => setShowSplash(false)} />;
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
