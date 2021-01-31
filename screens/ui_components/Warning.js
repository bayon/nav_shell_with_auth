import React from "react";
import { Text, View } from "react-native";
import FormStyles from "../FormStyles";
const styles = FormStyles;

function Warning(props) {
  return (
    <View style={styles.warningWrapper}>
      <Text style={styles.warning}>{props.message}</Text>
    </View>
  );
}
export default Warning;
