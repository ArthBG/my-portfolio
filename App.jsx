import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  }
  
  const projects = [
    {
      name: "OctoPlay",
      description: "Projeto solicitado pelo curso do SENAI Valinhos, com o objetivo de criar uma biblioteca de jogos digitais.",
      tecnologys: "HTML, CSS, JavaScript, React, Node.js, Vercel.",
      image: require('./assets/images/octoplay.png'),
      link: "octoplay.vercel.app"
    },
    {
      name: "RoyaleOc",
      description: "Projeto de com o objetivo de criar um site completo sobre o jogo Clash Royale.",
      tecnologys: "HTML, CSS, JavaScript, React, Node.js, Netlify.",
      image: require('./assets/images/royaleoc.png'),
      link: "royaleoc.netlify.app"
    }
  ]

  return (
    <View style={darkMode ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'white', color: 'black'}}> 
      <View>
      <Image className="rounded-full w-64 h-64 mx-auto pt-4" source={require('./assets/images/icon.jpeg')} />

      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-extrabold text-2xl mx-auto pt-7">Arthur Borges</Text>
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-lg mx-auto pt-2" >Estudante de Desenvolvimento de Sistemas no SENAI Valinhos{'\n'}Cursando o terceiro ano do Ensino Médio</Text>
      <View className="flex justify-center mx-auto">
        <TouchableOpacity onPress={darkModeToggle} className="bg-gray-300 w-20 h-10 rounded-full mt-5">
          <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-center pt-2">Dark Mode</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="w-full h-full">
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-semibold text-2xl mx-auto pt-5">Sobre:</Text>
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-base mx-auto pt-2" >Desenvolvedor Full Stack com conhecimentos em front-end (HTML, CSS, JavaScript, React, React Native). Especializado na criação de interfaces intuitivas e eficiência na construção de softwares. Comprometido com as melhores práticas e atualizações constantes, estou pronto para contribuir significativamente em projetos desafiadores.</Text>
        <View className="pt-5">
          <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-bold text-xl text-center pt-2">Projetos:</Text>
       <ScrollView horizontal>
          <View className="mx-auto">
            {
              projects.map((project, index) => {
                return (
                  <View key={index} className="w-80 h-80">
                    <Image source={project.image} className="w-80 h-64" />
                    <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-bold text-lg text-center">{project.name}</Text>
                    <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-center">{project.description}</Text>
                    <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-center">{project.tecnologys}</Text>
                    <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-center">{project.link}</Text>
                  </View>
                )
              })
            }
            </View>
            
              </ScrollView> 
        </View>
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-semibold text-2xl mx-auto pt-5">Contato:</Text>
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-base mx-auto pt-2">
        <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-bold">E-mail:</Text>
        <Image className="w-10 h-10" source={require('./assets/images/gmail.png')} />
        <Text>
          'janbgsart@gmail.com'
        </Text>
      </Text>
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-base mx-auto pt-2">
        <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-bold">Telefone:</Text>
        <Image className="w-10 h-10" source={require('./assets/images/whatsapp.png')} />
        <Text>
          '(19) 9 9713-7980'
        </Text>
      </Text>
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-base mx-auto pt-2">
        <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-bold">LinkedIn:</Text>
        <Image className="w-10 h-10" source={require('./assets/images/linkedin.png')} />
        <Text>
          'https://www.linkedin.com/in/arthur-borges-b3877a2b1/'
        </Text>
      </Text>
      </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
