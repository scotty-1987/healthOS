import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default function PeptideDetailScreen({ route }) {
  const peptide = route.params?.peptide || 'BPC-157';

  // Sample content (would ideally come from a data file or API)
  const peptideData = {
    'BPC-157': {
      description: 'BPC-157 is a peptide known for accelerating healing of muscles, tendons, and the gut lining.',
      protocol: '250-500mcg per day, subcutaneously near injury site. 2-4 week cycles recommended.',
      studies: [
        { title: 'NIH Study on BPC-157 Healing Effects', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6069385/' }
      ],
      vendors: [
        { name: 'Peptide Sciences', url: 'https://www.peptidesciences.com/bpc-157' },
        { name: 'Limitless Life Nootropics', url: 'https://limitlesslifenootropics.com/product/bpc-157/' }
      ]
    },
    'default': {
      description: 'No data available for this peptide yet.',
      protocol: '',
      studies: [],
      vendors: []
    }
  };

  const data = peptideData[peptide] || peptideData['default'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{peptide}</Text>
      <Text style={styles.sectionTitle}>🧠 What it does</Text>
      <Text style={styles.body}>{data.description}</Text>

      <Text style={styles.sectionTitle}>💉 Protocol</Text>
      <Text style={styles.body}>{data.protocol}</Text>

      {data.studies.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>📚 Research Studies</Text>
          {data.studies.map((study, index) => (
            <TouchableOpacity key={index} onPress={() => Linking.openURL(study.url)}>
              <Text style={styles.link}>{study.title}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}

      {data.vendors.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>🛒 Trusted Vendors</Text>
          {data.vendors.map((vendor, index) => (
            <TouchableOpacity key={index} onPress={() => Linking.openURL(vendor.url)}>
              <Text style={styles.link}>{vendor.name}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
    </ScrollView>
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
    fontSize: 26,
    fontWeight: 'bold',
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
    color: '#dddddd',
    fontSize: 15,
    lineHeight: 22,
  },
  link: {
    color: '#4da6ff',
    fontSize: 15,
    marginBottom: 10,
  },
});
