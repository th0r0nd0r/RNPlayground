import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: Platform.OS === 'ios' ? '#007aff' : '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },  
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: Platform.OS === 'android' ? '#a4c639' : '#fff',
        borderRadius: 5,
        ...Platform.select({
            ios: {
                borderColor: '#007aff',
                borderWidth: 1
            }
        }),
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
