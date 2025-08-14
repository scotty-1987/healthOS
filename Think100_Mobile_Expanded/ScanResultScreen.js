import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, Alert } from 'react-native';
import { analyzeSupplement } from './analyzeSupplement';
import { suggestAlternatives } from './suggestAlternatives';
import { saveSupplementLog } from './supplementStorage';

export default function ScanResultScreen({ route }) {
  const { product } = route.params;
  const analysis = analyzeSupplement(product.ingredients);
  const suggestions = suggestAlternatives(analysis);

  const handleLog = async () => {
    const entry = {
      name: product.name,
      ingredients: product.ingredients,
      date: new Date().toISOString().split('T')[0],
    };
    await saveSupplementLog(entry);
    Alert.alert('✅ Supplement Logged', `${product.name} added to your stack.`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🔬 Scan Analysis</Text>
      <Text style={styles.score}>{analysis.summary}</Text>

      {analysis.details.map((ing, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{ing.name}</Text>
          <Text style={styles.detail}>Dose: {ing.doseMg} mg</Text>
          <Text style={styles.status}>{ing.status}</Text>
          <Text style={styles.note}>{ing.note}</Text>
          <Text style={styles.evidence}>Evidence: {ing.evidence || 'N/A'}</Text>
        </View>
      ))}

      {suggestions.length > 0 && (
        <>
          <Text style={styles.header}>💡 Better Alternatives</Text>
          {suggestions.map((s, idx) => (
            <View key={idx} style={styles.altCard}>
              <Text style={styles.altHeader}>For: {s.for} ({s.reason})</Text>
              <Text style={styles.altText}>✅ {s.altName} ({s.altDose} mg)</Text>
              <Text style={styles.altGoal}>Goal: {s.goal}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(s.altUrl)}>
                <Text style={styles.link}>🛒 View Product</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      )}

      <TouchableOpacity style={styles.logButton} onPress={handleLog}>
        <Text style={styles.logText}>📥 Log This Supplement</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#0a0a0a', flex: 1, padding: 20 },
  header: { color: '#00ffcc', fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  score: { color: '#39ff14', fontSize: 20, marginBottom: 20 },
  card: { backgroundColor: '#1a1a1a', borderRadius: 10, padding: 15, marginBottom: 12 },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  detail: { color: '#ccc', marginBottom: 4 },
  status: { fontWeight: 'bold', marginBottom: 4 },
  note: { color: '#aaa' },
  evidence: { color: '#888', fontStyle: 'italic' },
  altCard: { backgroundColor: '#101010', borderRadius: 10, padding: 15, marginBottom: 12, borderWidth: 1, borderColor: '#444' },
  altHeader: { color: '#ffcc00', fontWeight: 'bold', marginBottom: 4 },
  altText: { color: '#fff' },
  altGoal: { color: '#aaa', marginBottom: 6 },
  link: { color: '#00f6ff', textDecorationLine: 'underline' },
  logButton: { marginTop: 20, backgroundColor: '#00ffcc', borderRadius: 10, padding: 15, alignItems: 'center' },
  logText: { color: '#000', fontWeight: 'bold', fontSize: 16 }
});
