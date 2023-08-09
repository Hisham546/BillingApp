import React, { useEffect, useRef, useState } from "react";

import {
    View,
    Image,
    Text, Keyboard,
    StyleSheet, TouchableOpacity,
    TextInput
}
    from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Dashboard({ navigation }) {


    const [code, setCode] = React.useState('');

    //- function that update the current entered number
    const handleNumberPress = (number) => {
        setCode(code + number);
    };

    const success = () => {
        if (code.length != '0') {
            navigation.navigate('Final')
        }
        else {
            Toast.show("Please enter a amount ", Toast.SHORT);

        }
    }

    return (

        <View style={styles.parentContainer}>
            <View style={styles.topView}>
                <Text style={styles.amount}>Enter the final  amount</Text>
                {/* editable is false so user cannot open default keyboard*/}
                <TextInput
                    editable={false}
                    style={styles.input}
                    value={code}
                    placeholder="Enter  Amount"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.secondView}>
                <View style={{ width: wp('100%'), alignItems: 'center', height: hp('32%') }}>
                    {/*nested array with each array represent a row of values*/}
                    {[
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                        ['', 0, 'backspace'],
                    ].map((row, rowIndex) => (
                        <View key={rowIndex} style={{ flexDirection: 'row' }}>
                            {row.map((item, columnIndex) => (
                                <TouchableOpacity
                                    key={columnIndex}
                                    activeOpacity={0.9}
                                    style={[
                                        styles.keyboard,
                                        columnIndex < 2 ? { marginRight: wp('2%') } : null,
                                    ]}
                                    onPress={() => {
                                        if (item === 'backspace') {
                                            setCode(code.slice(0, -1));
                                        } else {
                                            handleNumberPress(item.toString());
                                        }
                                    }}
                                >
                                    {item === 'backspace' ? (
                                        <MaterialIcon name="backspace-outline" size={hp('3%')} color={'#A8A196'} />
                                    ) : (
                                        <Text style={styles.numberKey}>{item}</Text>
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
                <TouchableOpacity activeOpacity={0.90}
                    onPress={() => success()}
                    style={styles.submitButton}>
                    <Text style={{ color: '#fff', fontSize: hp('1.90%') }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>

    );


}


const styles = StyleSheet.create({

    parentContainer: {
        flex: 1,
        backgroundColor: '#EAEFF2'
    },
    input: {
        height: hp('7%'),
        width: wp('90%'),
        borderWidth: 1,
        marginTop: hp('20'),
        color: 'black'
    },
    topView: {
        width: wp('100'),
        height: hp('50'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondView: {
        width: wp('100'),
        height: hp('50'),
        backgroundColor: 'white'

    },
    keyboard: {
        width: wp('29'),
        height: hp('5'),
        marginLeft: wp('0'),
        marginTop: hp('2'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberKey: {
        fontSize: hp('3'),
        color: 'black',
        fontWeight: '600'
    },
    submitButton: {
        height: hp('7%'),
        width: wp('90%'),
        backgroundColor: '#2535cc',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 1,
        elevation: 5,
        marginTop: hp('3')
    },
    amount: {
        fontSize: hp('1.80'),
        color: 'black'

    }

})