import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../constants';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking.com',
      
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.white,
      },
      headerStyle: {
        backgroundColor: COLORS.primary,
        height: 110,
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color={COLORS.white}
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
