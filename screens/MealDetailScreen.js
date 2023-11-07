import { MEALS, CATEGORIES } from "../data/dummy-data";
import { Text, View, StyleSheet, FlatList, Image, ScrollView, Button } from "react-native";
import { MealItem } from "../components/MealItem";
import { useLayoutEffect } from "react";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
import { IconButton } from "../components/IconButton";

export const MealDetailScreen = ({ route, navigation }) => {
const mealId = route.params.mealId;

const selectedMeal = MEALS.find( (mealItem) => mealItem.id === mealId)

const headerButtonPressHandler = () => {
    console.log('PRESSED!');
}

useLayoutEffect( ()=> {
    navigation.setOptions({
        headerRight: () => {
            return <IconButton icon='star' color="white" onPress={headerButtonPressHandler} />
        }
    });
}, [navigation, headerButtonPressHandler]);

    return (
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
});