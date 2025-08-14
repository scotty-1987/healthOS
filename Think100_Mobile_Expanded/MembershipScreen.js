
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MembershipScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium Membership</Text>
      <Text style={styles.subtitle}>Unlock peptide database, lab integrations, and AI chat</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscribe via Stripe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#aaa', fontSize: 16, textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#4CAF50', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 16 }
});
