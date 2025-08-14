import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { logSupplement, getSupplementLog } from './supplementLog';

export default function SupplementTrackerScreen() {
  const [name, setName] = useState('');
  const [dose, setDose] = useState('');
  const [unit, setUnit] = useState('mg');
  const [log, setLog] = useState(getSupplementLog());

  const handleLog = () => {
    if (!name || !dose) return;
    logSupplement(name, parseFloat(dose), unit);
    setLog(getSupplementLog());
    setName('');
    setDose('');
    ToastAndroid.show('Supplement logged!', ToastAndroid.SHORT);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>💊 Supplement Tracker</Text>

      <TextInput
        style={styles.input}
        placeholder="Supplement Name"
        placeholderTextColor="#777"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dose (e.g. 500)"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={dose}
        onChangeText={setDose}
      />
      <TextInput
        style={styles.input}
        placeholder="Unit (mg, IU, etc.)"
        placeholderTextColor="#777"
        value={unit}
        onChangeText={setUnit}
      />

      <TouchableOpacity style={styles.button} onPress={handleLog}>
        <Text style={styles.buttonText}>➕ Log Supplement</Text>
      </TouchableOpacity>

      <Text style={styles.subHeader}>🧾 Recent Logs</Text>
      {log.map((entry, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{entry.name}</Text>
          <Text style={styles.detail}>
            {entry.dose} {entry.unit}
          </Text>
          <Text style={styles.detail}>{new Date(entry.timestamp).toLocaleString()}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  header: {
    color: '#39ff14',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    color: '#4da6ff',
    fontSize: 18,
    marginVertical: 15,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#39ff14',
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detail: {
    color: '#bbb',
    fontSize: 13,
  },
});
