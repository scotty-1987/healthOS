import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function AIAssistantScreen() {
  const [query, setQuery] = useState('');
  const [responses, setResponses] = useState([]);

  const askAI = async () => {
    if (!query.trim()) return;

    const fakeResponse = {
      q: query,
      a: `Here's a helpful answer about "${query}" based on trusted health sources and clinical studies. (In the real app, this would come from your AI engine or OpenAI API.)`,
      sources: ['https://pubmed.ncbi.nlm.nih.gov', 'https://examine.com']
    };

    setResponses([fakeResponse, ...responses]);
    setQuery('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🤖 Th!nk100 AI Health Assistant</Text>
      <TextInput
        style={styles.input}
        placeholder="Ask about a supplement, goal, or ingredient..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={askAI}
      />
      <TouchableOpacity style={styles.button} onPress={askAI}>
        <Text style={styles.buttonText}>Ask</Text>
      </TouchableOpacity>

      <ScrollView style={styles.chatContainer}>
        {responses.map((res, index) => (
          <View key={index} style={styles.chatBubble}>
            <Text style={styles.question}>💬 {res.q}</Text>
            <Text style={styles.answer}>{res.a}</Text>
            {res.sources && (
              <Text style={styles.sources}>
                Sources: {res.sources.join(', ')}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#00ffcc', marginBottom: 10 },
  input: { backgroundColor: '#1a1a1a', color: '#fff', borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#00ffcc', borderRadius: 8, padding: 12, alignItems: 'center' },
  buttonText: { fontWeight: 'bold', color: '#000' },
  chatContainer: { marginTop: 20 },
  chatBubble: { backgroundColor: '#1a1a1a', padding: 15, borderRadius: 10, marginBottom: 15 },
  question: { color: '#39ff14', fontWeight: 'bold', marginBottom: 5 },
  answer: { color: '#ccc' },
  sources: { marginTop: 8, color: '#888', fontSize: 12, fontStyle: 'italic' }
});
