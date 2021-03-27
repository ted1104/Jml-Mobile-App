import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Pannier = ({data}) => {
    return (
        <View style={styles.pannierContainer}>
            <View style={[styles.blocColumn,styles.flex_1]}>
                <Text>{ data.article}</Text>
                <Text>ART-02</Text>
            </View>
            <View style={[styles.blocColumn,styles.flex_2]}>
                <Text>12</Text>
            </View>
            <View style={[styles.blocColumn,styles.flex_3]}>
                <Icon name="trash-can" color="#457b9d" size={20} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pannierContainer: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'row',
        elevation: 3,
        marginBottom : 10
    },
    blocColumn: {
        // borderWidth: 1,
        flex : 1,
        // // width:(Dimensions.get('window').width/3),
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 4,
        marginVertical : 4
    },
    flex_1: {
        flex: 4,
    },
    flex_2: {
        flex: 1,
    },
    flex_3: {
        flex: 1,
    }
     })
export default Pannier;