// ProjectCard.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default CardProjects = ({ project, darkMode }) => {
  return (
    <View key={project.id}>
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
    <Image source={project.image} style={{ width: 390, height: 264, borderRadius: 8, marginTop: 8, marginHorizontal: 5 }} />
    <Text style={[{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }, darkMode ? { color: 'white' } : { color: 'black' }]}>{project.name}</Text>
    <Text style={[{ textAlign: 'justify', marginHorizontal: 5 }, darkMode ? { color: 'white' } : { color: 'black' }]}>{project.description}</Text>
    <Text style={[{ fontWeight: '600', fontSize: 16, textAlign: 'center', margin: 3 }, darkMode ? { color: 'white' } : { color: 'black' } ]}>Tecnologias Utilizadas:</Text>
    <Text style={[{ textAlign: 'center' }, darkMode ? { color: 'white' } : { color: 'black' }]}>{project.tecnologys}</Text>
    <Text style={[{ textAlign: 'center' }, darkMode ? { color: 'white' } : { color: 'black' }]}>{project.link}</Text>
  </View>
  </View>
  );
};