//DetailView
import React, { useState, useContext} from 'react'
import { View, StyleSheet, ScrollView, Alert } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { navigate } from '../navigationRef';
import BlogContext from '../context/BlogContext'


const DetailView = ({navigation}) => {

    let {data, addBlogPost} = useContext(BlogContext);

    const [pid, setpid] = useState('')
    const [pname, setpname] = useState('')
    const [prate, setprate] = useState('')
    const [pquality, setpquality] = useState()


    const addProducts = () => {
        if (pid == '' || pname == '' || prate == '' || pquality == ''){
            alert("Please fill all data");
        }else{
            let tmp = {id: pid, name: pname, rate: prate, quality: pquality};
            addBlogPost(tmp);

            navigation.pop();
        }
    }

    return (
        <ScrollView>
        <View style={styles.container}>

            <Spacer>
                <Input
                    labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                    label="Product-id" value={pid}
                    onChangeText={setpid}
                    keyboardType='numeric'
                    returnKeyType='done'
                    autoCorrect={false}
                    maxLength={4}
                    clearButtonMode="always"
                />
            </Spacer>
            <Spacer>
                <Input
                    labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                    label="Product-name" value={pname}
                    onChangeText={setpname}
                    autoCorrect={true}
                    maxLength={50}
                    clearButtonMode="always"
                />
            </Spacer>
            <Spacer>
                <Input
                    labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                    label="Product-price" value={prate}
                    onChangeText={setprate}
                    keyboardType='numeric'
                    returnKeyType='done'
                    maxLength={6}
                    clearButtonMode="always"
                />
            </Spacer>
            <Spacer>
                <Input
                    labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                    label="Product-quality" value={pquality}
                    onChangeText={setpquality}
                    keyboardType='numeric'
                    returnKeyType='done'
                    autoCorrect={false}
                    maxLength={4}
                    clearButtonMode="always"
                />
            </Spacer>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title="Cancel" buttonStyle={{ backgroundColor: '#03106E'}} onPress={() => navigation.pop()} />
            <Button title="Add Product" buttonStyle={{ backgroundColor: '#03106E'}} onPress={addProducts} 
            />

            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'

    },
});

export default DetailView;