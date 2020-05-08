//WelcomeScreen
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { navigate } from '../navigationRef'
////navigation.state.params('emailId')
const WelcomeScreen = ({ navigation }) => {

    
    return (
        <View style={styles.container}>

            <Text h3>Welcome {navigation.getParam('name')}</Text>

            <Button title="Go-to Second demo" buttonStyle={{ backgroundColor: '#03106E', padding: 15, margin: 20 }}
            onPress={() => navigation.navigate('List')}
            />
        </View>



    )
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
});

export default WelcomeScreen;