// Index.ios.js - place code in here for iOS

// Import a library to help createa component
import React from 'react';
import ReactNative from 'react-native';

// Create a component
const App = () => {
    return(
        <Text>Hello World</Text>
    );
}

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);