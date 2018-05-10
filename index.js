// Index.ios.js - place code in here for iOS

// Import a library to help createa component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => {
    return(
        <Text>Hello World</Text>
    );
}

// Render it to the device
AppRegistry.registerComponent('albums', () => App);