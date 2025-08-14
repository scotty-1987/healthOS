import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getScanHistory } from './scanLog';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import { Dimensions } from 'react-native';

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#39ff14', '#ff4d4d', '#9966FF'];

export default function DashboardScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = getScanHistory();
    setHistory(data);
    console.log('Loaded scan history:', data);
  }, []);

  const dailyCounts = {};
  const flagsPerScan = [];
  const categoryCount = {};

  history.forEach(item => {
    const day = new Date(item.timestamp).toLocaleDateString();
    dailyCounts[day] = (dailyCounts[day] || 0) + 1;

    flagsPerScan.unshift({
      label: new Date(item.timestamp).toLocaleDateString(),
      flags: item.flagged,
    });

    if (Array.isArray(item.ingredients)) {
      item.ingredients.forEach(i => {
        if (i.category) {
          categoryCount[i.category] = (categoryCount[i.category] || 0) + 1;
        }
      });
    }
  });

  const scanPerDayData = Object.entries(dailyCounts).map(([date, count]) => ({
    date,
    count
  }));

  const pieData = Object.entries(categoryCount).map(([category, value]) => ({
    name: category,
    value
  }));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📊 Dashboard</Text>

      {scanPerDayData.length > 0 && (
        <>
          <Text style={styles.section}>Scans Per Day</Text>
          <ScrollView horizontal>
            <BarChart
              width={Math.max(scanPerDayData.length * 60, Dimensions.get('window').width - 40)}
              height={200}
              data={scanPerDayData}
              style={{ backgroundColor: '#111', padding: 10, borderRadius: 10 }}
            >
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="count" fill="#39ff14" />
            </BarChart>
          </ScrollView>
        </>
      )}

      {flagsPerScan.length > 0 && (
        <>
          <Text style={styles.section}>⚠️ Flags Per Scan</Text>
          <ScrollView horizontal>
            <BarChart
              width={Math.max(flagsPerScan.length * 60, Dimensions.get('window').width - 40)}
              height={200}
              data={flagsPerScan}
              style={{ backgroundColor: '#111', padding: 10, borderRadius: 10 }}
            >
              <XAxis dataKey="label" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="flags" fill="#ff4d4d" />
            </BarChart>
          </ScrollView>
        </>
      )}

      {pieData.length > 0 && (
        <>
          <Text style={styles.section}>🍩 Ingredient Category Breakdown</Text>
          <PieChart width={Dimensions.get('window').width - 40} height={250}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" />
            <Tooltip />
          </PieChart>
        </>
      )}

      <Text style={styles.section}>Recent Scans</Text>
      {history.length === 0 ? (
        <Text style={styles.empty}>No scans yet.</Text>
      ) : (
        history.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
            <Text style={styles.detail}>⚠️ Flags: {item.flagged}</Text>
            <Text style={styles.detail}>📅 {new Date(item.timestamp).toLocaleString()}</Text>
          </View>
        ))
      )}
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
    marginBottom: 20,
  },
  section: {
    color: '#4da6ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  empty: {
    color: '#999',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    color: '#ffcc00',
    fontSize: 15,
    marginBottom: 5,
  },
  detail: {
    color: '#bbb',
    fontSize: 13,
  },
});
