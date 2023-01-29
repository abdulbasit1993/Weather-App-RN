import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../utils/Dimensions';

export default function Cards({name, image}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => {}}>
      <ImageBackground
        source={image}
        style={styles.backImg}
        imageStyle={styles.backImgStyle}
      />
      <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <Text style={styles.cityNameText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cityNameText: {
    fontSize: 24,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
  },
  backImg: {height: deviceHeight / 5, width: deviceWidth / 2 - 50},
  backImgStyle: {
    borderRadius: 16,
    opacity: 0.83,
    backgroundColor: '#000000',
  },
});
