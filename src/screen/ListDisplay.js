//ListDisplay
import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';

// import { Feather } from '@expo/vector-icons'


const ListDisplay = ({ navigation }) => {

    const products = [
        { id: 101, name: 'productFirst', rate: 7000, quality: 20 },
        { id: 102, name: 'productSecond', rate: 10000, quality: 30 },
        { id: 101, name: 'productThird', rate: 8000, quality: 10 },
    ];

    const [list, updateList] = useState(products);

    const btnDeletePress = (item) => {
        console.log("item is ", item)
        // const name = item.target.getAttribute("name")
        const name = item.name;
        updateList(list.filter(item => item.name !== name));
    }
    return (
        // <View style={styles.container}>
        //     <Text h3>Welcome</Text>    
        // </View>
        <View>
            <FlatList
                data={list}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.touchView}>
                            

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textnamestyle}>Name:- </Text>
                                    <Text style={styles.textnamestyle1}>{item.name}</Text>
                                </View>
                                
                                <Button title='Delete' onPress = {() => btnDeletePress(item)} />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textnamestyle}>Price:- </Text>
                                    <Text style={styles.textnamestyle1}>{item.rate}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textnamestyle}>Quantity:</Text>
                                    <Text style={styles.textnamestyle1}>{item.quality}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>



    )
};

ListDisplay.navigationOptions = ({navigation}) => {
    return { 
        headerRight: () => (
            <Button title="Add" buttonStyle={{ backgroundColor: '#03106E', marginRight: 15}} />
        )
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    touchView: {
        margin: 5,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: 'white',
        minHeight: 70,
        maxHeight: 180,
        justifyContent: 'center',
    },
    textnamestyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#03106E',
        padding: 2,
    },
    textnamestyle1: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#FF8001',
        padding: 2,
        alignItems: 'flex-end'
    },
});

export default ListDisplay;