import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const peptides = [
  { name: 'BPC-157', goal: 'healing' },
  { name: 'TB-500', goal: 'healing' },
  { name: 'CJC-1295', goal: 'muscle' },
  { name: 'Ipamorelin', goal: 'muscle' },
  { name: 'Melatonin', goal: 'sleep' },
  { name: 'DSIP', goal: 'sleep' },
  { name: 'Semaglutide', goal: 'fat loss' },
  { name: 'AOD-9604', goal: 'fat loss' },
  { name: 'NAD+', goal: 'cognitive' }
];

export default function PeptideListScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [goalFilter, setGoalFilter] = useState('');

  const filteredPeptides = peptides.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (goalFilter === '' || p.goal === goalFilter)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔬 Peptide Directory</Text>

      <TextInput
        style={styles.search}
        placeholder="Search peptides..."
        placeholderTextColor="#888"
        onChangeText={setSearch}
        value={search}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterBar}>
        {['', 'healing', 'muscle', 'sleep', 'fat loss', 'cognitive'].map(goal => (
          <TouchableOpacity key={goal} onPress={() => setGoalFilter(goal)} style={styles.filterButton}>
            <Text style={[styles.filterText, goalFilter === goal && styles.selected]}>
              {goal === '' ? 'All' : goal.charAt(0).toUpperCase() + goal.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.list}>
        {filteredPeptides.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate('PeptideDetail', { peptide: item.name })}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemSub}>Goal: {item.goal}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    marginBottom: 15,
  },
  search: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  filterBar: {
    marginBottom: 20,
  },
  filterButton: {
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },
  filterText: {
    color: '#bbb',
  },
  selected: {
    color: '#39ff14',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: '#1b1b1b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemSub: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
});
