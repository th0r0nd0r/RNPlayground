// Index.ios.js - place code in here for iOS

// Import a library to help createa component
import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
    return(
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
}

// Render it to the device
AppRegistry.registerComponent('albums', () => App);