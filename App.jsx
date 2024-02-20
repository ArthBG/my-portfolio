import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Cardprojects from './components/card/card.jsx';
import ContactSection from './components/contato/contato.jsx';
import Myself from './components/myself/myself.jsx';

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  }
  
  const projects = [
    {
      id: 1,
      name: "RoyaleOc",
      description: "Projeto com o objetivo de criar um site completo sobre o jogo Clash Royale.",
      tecnologys: "HTML, CSS, JavaScript, React, Node.js, Netlify.",
      image: require('./assets/images/royaleoc.png'),
      link: "royaleoc.netlify.app"
    },
    {
      id: 2,
      name: "OctoPlay",
      description: "Projeto solicitado pelo curso do SENAI Valinhos, com o objetivo de criar uma biblioteca de jogos digitais.",
      tecnologys: "HTML, CSS, JavaScript, React, Node.js, Vercel.",
      image: require('./assets/images/octoplay.png'),
      link: "octoplay.vercel.app"
    }

  ]

  return (
    <View style={darkMode ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'white', color: 'black'}}> 
      <View>
      <Myself darkMode={darkMode} />
      <View className="flex justify-center m-auto">
        <TouchableOpacity onPress={darkModeToggle} className="rounded-full w-10 h-10 mt-9">
          <Text className="text-center text-2xl">{darkMode? "☀" : "🌙"}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="w-full h-full">
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-semibold text-2xl mx-auto pt-5">Sobre:</Text>
      <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="text-base mx-auto pt-2" >Desenvolvedor Full Stack com conhecimentos em front-end (HTML, CSS, JavaScript, React, React Native). Especializado na criação de interfaces intuitivas e eficiência na construção de softwares. Comprometido com as melhores práticas e atualizações constantes, estou pronto para contribuir significativamente em projetos desafiadores.</Text>
        <View className="pt-5">
          <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="font-bold text-xl text-center pt-2">Projetos:</Text>
      
       <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
      {
        projects.map((project) => (
          <Cardprojects key={project.id} project={project} darkMode={darkMode} />
        ))
      }
    </View>
            
          
        </View>
        <ContactSection darkMode={darkMode} />

      
      <View className="m-auto">
        <Text style={darkMode? {color: 'white'} : {color: 'black'}} className="mx-auto pt-10">Todos direitos Reservados</Text>
      </View>
      </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
