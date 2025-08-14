import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'THINK100_SUPP_LOG';

export async function saveSupplementLog(newEntry) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const logs = existing ? JSON.parse(existing) : [];
    logs.unshift(newEntry);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  } catch (error) {
    console.error('❌ Error saving supplement log:', error);
  }
}

export async function getSupplementLog() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('❌ Error loading supplement log:', error);
    return [];
  }
}
