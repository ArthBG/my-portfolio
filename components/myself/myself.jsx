
import React from 'react';
import { View, Image, Text } from 'react-native';

const Myself = ({ darkMode }) => {
    return (
        <View>
        <Image className="rounded-full w-64 h-64 mx-auto pt-4" source={require('../../assets/images/icon.jpeg')} />
        <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-extrabold text-2xl mx-auto pt-7">Arthur Borges</Text>
        <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-lg mx-auto pt-2" >Estudante de Desenvolvimento de Sistemas no SENAI Valinhos{'\n'}Cursando o terceiro ano do Ensino Médio</Text>
        </View>
    );
    };

export default Myself;
