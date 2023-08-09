import React, { useEffect, useRef, useState } from "react";

import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Dashboard({ }) {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const [code, setCode] = React.useState('');
    const handleNumberPress = (number) => {
        setCode(code + number);
      };
    
    return (

        <View style={styles.parentContainer}>
            <View style={styles.topView}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={code}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
            </View>
        
<View style={{ width: wp('100%'), alignItems: 'center', height: hp('32%') }}>
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
            <MaterialIcon name="backspace-outline" size={hp('3%')} color={'white'} />
          ) : (
            <Text style={styles.numberKey}>{item}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  ))}
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
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    topView: {
        width: wp('100'),
        height: hp('50'),

        justifyContent: 'center'


    },
    secondView: {
        width: wp('100'),
        height: hp('50'),



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
        color: 'white',
        fontWeight: '600'
    },




})