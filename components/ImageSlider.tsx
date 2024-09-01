import React from 'react';
import { Dimensions, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const itemImages = [
    require("../assets/images/slide1.png"),
    require("../assets/images/slide2.png"),
    require("../assets/images/slide3.png"),
    require("../assets/images/slide4.png"),
    require("../assets/images/slide5.png")
];

const ImageSlider = () => {
    const width = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={itemImages}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Image source={item} style={styles.image} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        padding: 0,
        marginHorizontal: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
});

export default ImageSlider;
