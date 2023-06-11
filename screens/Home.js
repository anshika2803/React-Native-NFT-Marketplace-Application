import { useState } from 'react';
import { View,SafeArea,FlatList, Text } from 'react-native';
import { COLORS, NFTData } from'../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = () => {
  return (
    <SafeAreaView style={{fles: 1}}>


    </SafeAreaView>
  )
}

export default Home;

//FlatList renders basic list, similar to map,renders items when about to load on screen and delets them when off us, uses LazyLoading for smooth optimization
//SafeArea render content in safe area boundaries