// components/Action.js
import React from "react";
import { View, Text, Image, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Action = ({ item, theme }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={[styles.actionButtonContainer, { backgroundColor: theme.iconBackground }]}>
          <Image source={item.button} style={styles.button} />
        </View>
        <Text style={[styles.actionName, { color: theme.subText }]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22
  },
  actionButtonContainer: {
    height: 46,
    width: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // button:{
  //   backgroundColor: '#ccc',
  //   borderRadius: 5
  // },
  actionName: {
    fontSize: 14,
  }
});

export default Action;
