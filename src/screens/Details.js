import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {deviceHeight, deviceWidth} from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from '../constants';

export default function Details(props) {
  const [data, setData] = useState();
  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => {
        console.log('response data from API ==>>> ', res);
        setData(res);
      })
      .catch(err => console.log(err));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: '#eed', fontSize: 22}}>{title}</Text>
      <Text style={{color: '#FFF', fontSize: 22}}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image5.jpg')}
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

        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: '#FFFFFF', fontSize: 40}}>{name}</Text>
              <Text
                style={{fontSize: 22, color: '#FFFFFF', textAlign: 'center'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{color: '#FFF', fontSize: 64}}>
              {Math.round(data['main']['temp'] - 273.15)}&deg; C
            </Text>

            <View>
              <Text style={{color: '#FFF', fontSize: 22, marginBottom: 16}}>
                Weather Details
              </Text>

              <View style={{width: deviceWidth - 60}}>
                <Data value={data['wind']['speed']} title="Wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
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
});
