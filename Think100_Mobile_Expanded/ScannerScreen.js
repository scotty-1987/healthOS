import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ScannerScreen({ navigation }) {
  const mockScan = () => {
    // Simulate scanning "Ultra Pre Workout"
    navigation.navigate('ScanResult', { product: 'Ultra Pre Workout' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📷 Barcode Scanner</Text>
      <TouchableOpacity style={styles.scanButton} onPress={mockScan}>
        <Text style={styles.scanText}>🚀 Simulate Scan</Text>
      </TouchableOpacity>
      <Text style={styles.info}>Tap the button above to simulate scanning a product and view results.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  scanButton: {
    backgroundColor: '#39ff14',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  scanText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    color: '#bbb',
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 300,
  },
});
