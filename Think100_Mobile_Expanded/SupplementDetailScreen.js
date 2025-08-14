import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function SupplementDetailScreen({ route }) {
  const supplement = route.params?.supplement || 'Magnesium Glycinate';

  const supplementData = {
    'Magnesium Glycinate': {
      manufacturer: 'Thorne Research',
      efficacy: '✅ High',
      safety: '✅ Safe',
      ingredients: [
        'Magnesium Glycinate (200mg)',
        'Hypromellose (capsule)',
        'Leucine',
        'Silicon Dioxide'
      ],
      dosage: '200–400mg daily with food.',
    },
    'default': {
      manufacturer: 'N/A',
      efficacy: '⚠️ Unknown',
      safety: '❓ Not Evaluated',
      ingredients: [],
      dosage: 'No dosage data available.',
    }
  };

  const data = supplementData[supplement] || supplementData['default'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{supplement}</Text>
      <Text style={styles.sub}>Manufacturer: {data.manufacturer}</Text>

      <Text style={styles.sectionTitle}>📊 Efficacy</Text>
      <Text style={styles.body}>{data.efficacy}</Text>

      <Text style={styles.sectionTitle}>🛡️ Safety</Text>
      <Text style={styles.body}>{data.safety}</Text>

      <Text style={styles.sectionTitle}>🧪 Ingredients</Text>
      {data.ingredients.map((item, index) => (
        <Text key={index} style={styles.body}>- {item}</Text>
      ))}

      <Text style={styles.sectionTitle}>💊 Dosage</Text>
      <Text style={styles.body}>{data.dosage}</Text>

      <TouchableOpacity style={styles.logButton}>
        <Text style={styles.logButtonText}>➕ Add to Log</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sub: {
    color: '#bbb',
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#39ff14',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  body: {
    color: '#ddd',
    fontSize: 15,
    lineHeight: 22,
  },
  logButton: {
    marginTop: 30,
    backgroundColor: '#39ff14',
    padding: 15,
    borderRadius: 10,
  },
  logButtonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
