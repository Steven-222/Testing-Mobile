import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft, Car } from 'lucide-react-native';

export default function RideDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft color="white" />
        </TouchableOpacity>
        
        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.time}>16:30</Text>
            <Text style={styles.location}>Pick up at Brussel</Text>
          </View>
          <Text style={styles.price}>21 €</Text>
        </View>
        
        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.time}>17:20</Text>
            <Text style={styles.location}>Drop off at Gent-Sint</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.driverInfo}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.driverName}>Stephan</Text>
            <Text style={styles.rating}>4.99 ★ (347 reviews)</Text>
          </View>
        </View>

        <View style={styles.carInfo}>
          <Car size={20} />
          <Text style={styles.carText}>Big White Car</Text>
        </View>

        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By clicking an "Order Now" button I agree with Terms and Policies of using Carpoolin
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#7DD3F0',
    padding: 24,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  backButton: {
    marginBottom: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  time: {
    fontSize: 24,
    color: 'white',
  },
  location: {
    fontSize: 14,
    color: 'white',
  },
  price: {
    fontSize: 24,
    color: 'white',
  },
  content: {
    padding: 24,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '600',
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  carInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  carText: {
    fontSize: 16,
  },
  orderButton: {
    backgroundColor: '#475569',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  orderButtonText: {
    color: 'white',
    fontSize: 16,
  },
  terms: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginTop: 16,
  },
});
