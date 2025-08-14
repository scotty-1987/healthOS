
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const supplementsData = [
  { name: 'Vitamin D3', purpose: 'Bone health, immune support', dosage: '2000 IU/day', trustedBrands: ['Thorne', 'NOW'] },
  { name: 'Magnesium Glycinate', purpose: 'Sleep, muscle relaxation', dosage: '300 mg/day', trustedBrands: ['Pure Encapsulations', 'Doctor's Best'] },
  { name: 'Omega-3 (Fish Oil)', purpose: 'Heart & brain health', dosage: '1000-2000 mg EPA+DHA/day', trustedBrands: ['Nordic Naturals', 'Carlson'] }
];

export default function SupplementsScreen() {
  const [query, setQuery] = useState('');

  const filtered = supplementsData.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supplement Checker</Text>
      <TextInput
        placeholder="Search supplement..."
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
            <Text style={styles.detail}>Purpose: {item.purpose}</Text>
            <Text style={styles.detail}>Dosage: {item.dosage}</Text>
            <Text style={styles.detail}>Trusted Brands: {item.trustedBrands.join(', ')}</Text>
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
  detail: { color: '#ccc' }
});
