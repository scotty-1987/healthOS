import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { getIngredientInfo } from './ingredientInfo';

export default function IngredientModal({ visible, onClose, ingredient }) {
  const info = getIngredientInfo(ingredient);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{ingredient}</Text>
          <Text style={styles.safety}>{info.safety}</Text>
          <Text style={styles.summary}>{info.summary}</Text>

          {Object.keys(info.goals).length > 0 && (
            <>
              <Text style={styles.section}>🎯 Goal Compatibility</Text>
              {Object.entries(info.goals).map(([goal, value], idx) => (
                <Text key={idx} style={styles.goal}>
                  {value === true && '✅'} {value === false && '❌'} {goal}
                </Text>
              ))}
            </>
          )}

          {info.studies.length > 0 && (
            <>
              <Text style={styles.section}>📚 Studies</Text>
              {info.studies.map((study, idx) => (
                <TouchableOpacity key={idx} onPress={() => Linking.openURL(study.url)}>
                  <Text style={styles.link}>{study.title}</Text>
                </TouchableOpacity>
              ))}
            </>
          )}

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#1a1a1a',
    padding: 25,
    borderRadius: 20,
    width: '90%',
    maxHeight: '80%',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  safety: {
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: 'bold',
  },
  summary: {
    color: '#ccc',
    fontSize: 15,
    marginVertical: 15,
  },
  section: {
    color: '#39ff14',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  goal: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 4,
  },
  link: {
    color: '#4da6ff',
    fontSize: 14,
    marginBottom: 6,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#39ff14',
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
