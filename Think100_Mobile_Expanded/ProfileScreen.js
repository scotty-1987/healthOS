import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>👤 John Doe</Text>
      <Text style={styles.subtext}>Email: johndoe@email.com</Text>

      <View style={styles.section}>
        <Text style={styles.label}>⌚ Smartwatch</Text>
        <Text style={styles.value}>Connected</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>🧪 Bloodwork</Text>
        <Text style={styles.value}>Last synced: 06/25/2025</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>💊 Supplement Log</Text>
        <Text style={styles.value}>5 of 7 days tracked</Text>
      </View>

      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.settingsText}>⚙️ Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtext: {
    color: '#bbbbbb',
    marginBottom: 25,
  },
  section: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    color: '#999999',
    fontSize: 14,
  },
  value: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  settingsButton: {
    marginTop: 30,
    backgroundColor: '#39ff14',
    padding: 15,
    borderRadius: 10,
  },
  settingsText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
