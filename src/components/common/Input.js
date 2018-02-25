import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder,secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = style;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false} 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle} 
            />
        </View>
    );
};

const style = {
    inputStyle : {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        flex:1,
        flexDirection:'row',
        height: 40,
        alignItems:'center'
    }
}

export { Input };