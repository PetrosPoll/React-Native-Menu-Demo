import { View, Text, StyleSheet } from "react-native";

export const Subtitle = ({ children }) => {
    return(
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

        textAlign: 'center'
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    }
});