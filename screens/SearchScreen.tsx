import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RefreshCw } from 'lucide-react-native';
import { useState } from 'react';

export default function SearchScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('today');
  const [passengers, setPassengers] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Where are you going?</Text>
      
      <View style={styles.inputGroup}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>From</Text>
          <TextInput
            style={styles.input}
            value="Brussels"
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>To</Text>
          <TextInput
            style={styles.input}
            value="Ghent"
            placeholderTextColor="white"
          />
        </View>

        <TouchableOpacity style={styles.swapButton}>
          <RefreshCw color="#7DD3F0" size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Date</Text>
        <View style={styles.dateButtons}>
          {['today', 'tomorrow', 'other'].map((date) => (
            <TouchableOpacity
              key={date}
              onPress={() => setSelectedDate(date)}
              style={[
                styles.dateButton,
                selectedDate === date && styles.dateButtonSelected
              ]}
            >
              <Text style={[
                styles.dateButtonText,
                selectedDate === date && styles.dateButtonTextSelected
              ]}>
                {date.charAt(0).toUpperCase() + date.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Passengers</Text>
        <View style={styles.passengerButtons}>
          {[1,2,3,4].map(num => (
            <TouchableOpacity
              key={num}
              onPress={() => setPassengers(num)}
              style={[
                styles.passengerButton,
                passengers === num && styles.passengerButtonSelected
              ]}
            >
              <Text style={[
                styles.passengerButtonText,
                passengers === num && styles.passengerButtonTextSelected
              ]}>
                {num}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity 
        style={styles.searchButton}
        onPress={() => navigation.navigate('Ride')}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DD3F0',
    padding: 24,
    borderRadius: 30,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  inputGroup: {
    gap: 16,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: 'white',
    fontSize: 14,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    paddingVertical: 8,
  },
  swapButton: {
    position: 'absolute',
    right: 0,
    top: '50%',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: 'white',
  },
  dateButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  dateButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  dateButtonSelected: {
    backgroundColor: 'white',
  },
  dateButtonText: {
    color: 'white',
  },
  dateButtonTextSelected: {
    color: '#7DD3F0',
  },
  passengerButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  passengerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passengerButtonSelected: {
    backgroundColor: 'white',
  },
  passengerButtonText: {
    color: 'white',
  },
  passengerButtonTextSelected: {
    color: '#7DD3F0',
  },
  searchButton: {
    backgroundColor: '#475569',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
