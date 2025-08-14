
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const peptideList = [
  { name: 'BPC-157', use: 'Gut healing, injury recovery', dosage: '200-300 mcg/day', study: 'https://pubmed.ncbi.nlm.nih.gov/12345678' },
  { name: 'TB-500', use: 'Tissue regeneration', dosage: '2-5 mg/week', study: 'https://pubmed.ncbi.nlm.nih.gov/23456789' },
  { name: 'CJC-1295', use: 'Growth hormone stimulation', dosage: '1000 mcg 2x/week', study: 'https://pubmed.ncbi.nlm.nih.gov/34567890' }
];

export default function PeptideScreen() {
  const [query, setQuery] = useState('');

  const filtered = peptideList.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peptide Database</Text>
      <TextInput
        placeholder="Search peptide..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholderTextColor="#888"
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>Use: {item.use}</Text>
            <Text style={styles.detail}>Dosage: {item.dosage}</Text>
            <Text style={styles.link}>Study: {item.study}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 20 },
  title: { color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { backgroundColor: '#222', color: 'white', padding: 10, borderRadius: 8, marginBottom: 10 },
  card: { backgroundColor: '#1f1f1f', padding: 15, borderRadius: 10, marginBottom: 12 },
  name: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  detail: { color: '#ccc' },
  link: { color: '#4faaff', marginTop: 4 }
});
