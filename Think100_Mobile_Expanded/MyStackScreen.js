import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getSupplementLog } from './supplementStorage';

export default function MyStackScreen() {
  const [loggedSupplements, setLoggedSupplements] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const logs = await getSupplementLog();
      setLoggedSupplements(logs);
    };
    fetchLogs();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📋 My Supplement Stack</Text>
      {loggedSupplements.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>Logged: {item.date}</Text>
          {item.ingredients.map((ing, i) => (
            <Text key={i} style={styles.ingredient}>
              • {ing.name} ({ing.doseMg} mg)
            </Text>
          ))}
        </View>
      ))}
      {loggedSupplements.length === 0 && (
        <Text style={styles.empty}>Nothing logged yet</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#0a0a0a', flex: 1, padding: 20 },
  header: { color: '#00ffcc', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#1a1a1a', borderRadius: 10, padding: 15, marginBottom: 15 },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  date: { color: '#999', fontSize: 12, marginBottom: 6 },
  ingredient: { color: '#ccc' },
  empty: { color: '#999', fontStyle: 'italic', marginTop: 30 }
});
