import React from "react";
import { View, Image, StyleSheet } from "react-native";

const MyCard = ({ theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.card }]}>
      <Image source={require('../assets/Card.png')} style={styles.card} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  card: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain' 
  }
});

export default MyCard;
