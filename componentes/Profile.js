import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Profile({ imgUri, genero, nome, telefone, email }) {



    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imgUri }}
                style={styles.img}
            />

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Nomee:</Text>
                <Text style={styles.texto}>{nome}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Gênero:</Text>
                <Text style={styles.texto}>{genero}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Telefone:</Text>
                <Text style={styles.texto}>{telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Email:</Text>
                <Text style={styles.texto}>{email}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 300,
        height: 300,
        borderWidth: 5,
        borderColor: 'white',
        padding: 15,
        borderRadius: 450
    },

    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 20
    },

    texto: {
        fontSize: 25
    },

    textoLabel: {
        color: 'white',
        fontWeight: 'bold'
    }
})