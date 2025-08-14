import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚙️ Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>🔔 Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ true: '#39ff14', false: '#666' }}
          thumbColor={notificationsEnabled ? '#39ff14' : '#ccc'}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>🌗 Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ true: '#39ff14', false: '#666' }}
          thumbColor={darkMode ? '#39ff14' : '#ccc'}
        />
      </View>

      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>🔐 Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    padding: 20,
  },
  header: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  logout: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
