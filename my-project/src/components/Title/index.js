import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

const TitleHeader = () => {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculadora de I.M.C</Text>
        </View>
    );
}

export default TitleHeader;
