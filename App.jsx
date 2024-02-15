import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { useState } from 'react-native';

export default function App() {
  const projects = [
    {
      name: "OctoPlay",
      description: "Projeto solicitado curso do SENAI Valinhos, com o objetivo de criar uma biblioteca de jogos digitais.",
      image: require('./assets/images/octoplay.png'),
      link: "octoplay.vercel.app"
    },
    {
      name: "RoyaleOc",
      description: "Projeto de ccom o objetivo de criar um site completo sobre o jogo Clash Royale.",
      image: require('./assets/images/royaleoc.png'),
      link: "royaleoc.netlify.app"
    },
    {
      name: "RoyaleOc",
      description: "Projeto de ccom o objetivo de criar um site completo sobre o jogo Clash Royale.",
      image: require('./assets/images/royaleoc.png'),
      link: "royaleoc.netlify.app"
    }

  ]
  return (
    <View>
      {/* <Image source={require('./assets/images/icon.jpeg')} /> */}
      <Text className="font-extrabold text-2xl mx-auto pt-20" >Arthur Borges</Text>
      <Text className="text-lg mx-auto pt-5" ></Text>
      <Text className="text-lg mx-auto pt-2" >Estudante de Desenvolvimento de Sistemas no SENAI Valinhos{'\n'}Cursando o terceiro ano do Ensino Médio</Text>
      <Text className="font-semibold text-2xl mx-auto pt-5" >Sobre:</Text>
      <Text className="text-base mx-auto pt-2" >Desenvolvedor Full Stack com conhecimentos em front-end (HTML, CSS, JavaScript, React, React Native). Especializado na criação de interfaces intuitivas e eficiência na construção de softwares. Comprometido com as melhores práticas e atualizações constantes, estou pronto para contribuir significativamente em projetos desafiadores.</Text>
      <Text className="font-semibold text-2xl mx-auto pt-7" >Projetos:</Text>
      <ScrollView className="flex flex-row flex-wrap pt-2">
        {projects.map((project, key) => (
          <View key={key} className="w-9/12">
            <Image source={project.image} className="h-64 w-full" />
            <Text className="text-lg font-semibold pt-2">{project.name}</Text>
            <Text className="text-base">{project.description}</Text>
            <Text className="text-base">{project.link}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
