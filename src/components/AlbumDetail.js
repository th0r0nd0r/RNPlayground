import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
    const { containerStyle, thumbnailStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={containerStyle}>
                    <Text>{artist}</Text>
                    <Text>{title}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

export default AlbumDetail;
