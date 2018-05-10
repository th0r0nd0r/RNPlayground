// Index.ios.js - place code in here for iOS

// Import a library to help createa component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/componen   ts/header';

// Create a component
const App = () => {
    return(
        <Header />
    );
}

// Render it to the device
AppRegistry.registerComponent('albums', () => App);