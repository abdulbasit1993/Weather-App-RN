import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from '../components/Cards';

export default function Home() {
  const [city, setCity] = useState('');

  const cities = [
    {
      name: 'Karachi',
      image: require('../assets/images/image2.png'),
    },
    {
      name: 'Lahore',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'Islamabad',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'Peshawar',
      image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'New York',
      image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/image8.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../assets/images/image9.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../assets/images/image10.jpg'),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image7.jpg')}
        style={styles.imageBg}
        imageStyle={styles.bgImage}
      />
      <View style={styles.mainContentView}>
        <View style={styles.headerView}>
          <Icon name="menu" size={46} color="#FFFFFF" />
          <Image
            source={require('../assets/images/user.png')}
            style={{height: 46, width: 46}}
          />
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: '#FFFFFF'}}>Welcome!</Text>
          <Text style={{fontSize: 22, color: '#FFFFFF', fontWeight: 'bold'}}>
            Search the city by the name
          </Text>
          <View style={styles.txtInpView}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="#FFFFFF"
              style={{paddingHorizontal: 10, color: '#FFFFFF', fontSize: 16}}
            />
            <TouchableOpacity onPress={() => {}}>
              <Icon name="search" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.myLocationText}>My Locations</Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards name={item.name} image={item.image} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBg: {height: deviceHeight, width: deviceWidth},
  bgImage: {opacity: 0.6, backgroundColor: '#000000'},
  mainContentView: {
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 20,
  },
  txtInpView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  myLocationText: {
    color: '#FFFFFF',
    fontSize: 25,
    paddingHorizontal: 10,
    marginTop: 220,
    marginBottom: 20,
  },
});
