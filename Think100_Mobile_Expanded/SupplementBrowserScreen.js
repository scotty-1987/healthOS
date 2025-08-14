import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { supplementDB } from './supplementDB';

export default function SupplementBrowserScreen() {
  const [query, setQuery] = useState('');
  const [goalFilter, setGoalFilter] = useState('');

  const filtered = supplementDB.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) &&
    (goalFilter === '' || s.goals?.map(g => g.toLowerCase()).includes(goalFilter.toLowerCase()))
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🔍 Supplement Browser</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by name..."
        placeholderTextColor="#777"
        value={query}
        onChangeText={setQuery}
      />
      <TextInput
        style={styles.input}
        placeholder="Filter by goal (e.g. Sleep, Focus)"
        placeholderTextColor="#777"
        value={goalFilter}
        onChangeText={setGoalFilter}
      />

      {filtered.map((supp, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{supp.name}</Text>
          <Text style={styles.category}>{supp.category}</Text>
          <Text style={styles.desc}>{supp.description}</Text>
          <Text style={styles.detail}>💊 Dose: {supp.dose}</Text>
          <Text style={styles.detail}>✅ Efficacy: {supp.efficacy}</Text>
          <Text style={styles.detail}>⚠️ Safety: {supp.safety}</Text>
          <Text style={styles.detail}>🎯 Goals: {supp.goals.join(', ')}</Text>

          {supp.links?.length > 0 && (
            <View style={{ marginTop: 10 }}>
              <Text style={styles.detail}>🛒 Where to Buy:</Text>
              {supp.links.map((link, i) => (
                <TouchableOpacity key={i} onPress={() => Linking.openURL(link.url)}>
                  <Text style={styles.link}>{link.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
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
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    color: '#4da6ff',
    fontSize: 14,
    marginBottom: 6,
  },
  desc: {
    color: '#ccc',
    marginBottom: 6,
  },
  detail: {
    color: '#bbb',
    fontSize: 13,
  },
  link: {
    color: '#39ff14',
    fontSize: 13,
    marginLeft: 10,
    marginTop: 2,
  },
});
