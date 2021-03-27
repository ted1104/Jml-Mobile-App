import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Empty = () => {
    return (
        <View style={styles.container}>
            <View style={styles.blocEmpty}><Icon name="cup-off-outline" color="#457b9d" size={50} /></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // borderWidth : 1
    },
    blocEmpty: {
        borderWidth: 3,
        borderColor : "#457b9d",
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 10,
        // elevation : 1
        
    }
})
export default Empty;