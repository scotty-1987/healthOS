import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function SupplementLogScreen() {
  const [logs, setLogs] = useState([]);
  const [supplement, setSupplement] = useState('');
  const [dosage, setDosage] = useState('');

  const addLog = () => {
    if (supplement && dosage) {
      const newLog = {
        id: Date.now().toString(),
        name: supplement,
        dose: dosage + ' mg',
        time: new Date().toLocaleString()
      };
      setLogs([newLog, ...logs]);
      setSupplement('');
      setDosage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📆 Supplement Log</Text>

      <TextInput
        style={styles.input}
        placeholder="Supplement name"
        placeholderTextColor="#777"
        value={supplement}
        onChangeText={setSupplement}
      />

      <TextInput
        style={styles.input}
        placeholder="Dosage (mg)"
        placeholderTextColor="#777"
        value={dosage}
        onChangeText={setDosage}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={addLog}>
        <Text style={styles.buttonText}>➕ Add Entry</Text>
      </TouchableOpacity>

      <FlatList
        data={logs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text style={styles.logText}>{item.name} - {item.dose}</Text>
            <Text style={styles.timestamp}>{item.time}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No logs yet.</Text>}
      />
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
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#39ff14',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logItem: {
    backgroundColor: '#1c1c1c',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  logText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  timestamp: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
  },
  empty: {
    color: '#555',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});
