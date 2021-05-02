import React from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native'

export const ListElem = ({ title, data, comment }) => {
    return(
        <View style = {styles.container}>
        <TouchableOpacity style = {styles.elem}>
            <View style={styles.view}>
                <Text style={styles.textTitle}> { title } </Text>
                <Text style={styles.text}> {data} </Text>
            </View>
            <View>
            <Text style={styles.text}> {comment} </Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
    },
    elem: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5
    },
    view: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    textTitle: {
        color: "black",
        alignItems: "center",
        fontWeight: "bold"
    },
    text: {
        color: "black",
        alignItems: "center",
    }
})
