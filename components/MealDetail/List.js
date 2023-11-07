import { View, Text, StyleSheet } from "react-native";

export const List = ({ data }) => {
    return data.map((dataPoint) => (
      <View style={styles.listItem} key={dataPoint}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    ));
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#f4b7b7'
    },
    itemText: {
        textAlign: 'center'
    }
});