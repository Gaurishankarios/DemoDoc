//SignInScreen
import React, {useState} from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import Spacer from './Spacer'
import { Text, Input, Button } from 'react-native-elements'
import { navigate } from '../navigationRef'

const SignInScreen = ({navigation}) => {

    const [emailId, setemailId] = useState('');
    const [password, setPassword] = useState('');

    const btnSignInPress = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(emailId=='' && password==''){
            alert('Please enter credentials')
        }
        else{
            if (reg.test(emailId) === false) {
                console.log("Email is Not Correct");
                alert("Please enter valid emailid")
             return false;
             }else{
                console.log("Email is  Correct");
                if(password==''){
                    alert("Please enter password")
                }else{

                    let regpass = /^(?=.*[A-Z])/;
                    if (regpass.test(password) === false){
                        alert("Password must contains 1 Upper case letter")
                    }else{
                        // console.log("password contains UPPER LATER")
                        if ( (emailId=='clarion@clarion.com') && (password=='Clarion123') ){
                            // console.log("Valid data");
                            var pieces = emailId.split("@");
                            navigation.navigate('Welcome', {name: pieces[0]})
    
                        }else{
                            alert('Please enter valid credentials')
                            console.log("data is ", emailId, password)
                        }
                    }
                    
                   
                }
             }
        }
        
    }

    return (
        <View style={styles.container}>
            <Spacer>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <Text h4
                        h4Style={{ color: 'black' }}>Sign-in</Text>
                </View>
            </Spacer>

            <Spacer>
                <Input
                    labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                    label="Email-id" value={emailId}
                    onChangeText={setemailId}
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={50}
                    clearButtonMode="always"
                />
            </Spacer>

            <Spacer>
                <Input
                    labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                    secureTextEntry
                    label="Password" value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={15}
                    clearButtonMode="always"

                />
            </Spacer>

            <Spacer>
                    <Button title="Sign-in" buttonStyle={{ backgroundColor: '#03106E', padding: 15 }}
                        onPress={() => btnSignInPress()}
                         />
                </Spacer>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',

    },

});

export default SignInScreen;