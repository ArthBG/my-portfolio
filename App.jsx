import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { useState } from 'react-native';

export default function App() {
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
    <View>
      <View className="bg-blue-950 min-h-screen">
      <Image className="rounded-full w-80 h-80 mx-auto" source={require('./assets/images/icon.jpeg')} />

      <Text className="font-extrabold text-2xl mx-auto pt-7">Arthur Borges</Text>
      <Text className="text-lg mx-auto pt-5" ></Text>
      <Text className="text-lg mx-auto pt-2" >Estudante de Desenvolvimento de Sistemas no SENAI Valinhos{'\n'}Cursando o terceiro ano do Ensino Médio</Text>
      <Text className="font-semibold text-2xl mx-auto pt-5">Sobre:</Text>
      <Text className="text-base mx-auto pt-2" >Desenvolvedor Full Stack com conhecimentos em front-end (HTML, CSS, JavaScript, React, React Native). Especializado na criação de interfaces intuitivas e eficiência na construção de softwares. Comprometido com as melhores práticas e atualizações constantes, estou pronto para contribuir significativamente em projetos desafiadores.</Text>
      <ScrollView className="h-fit">
      <Text className="font-semibold text-2xl mx-auto pt-7" >Projetos:</Text>
        {projects.map((project, key) => (
          <View key={key}>
            <View className="h-fit mx-auto mt-2">
            <Image source={project.image} className="h-64 w-85" />
            <Text className="text-lg font-bold pt-2">{project.name}</Text>
            <Text className="text-base">{project.description}</Text>
            <Text className="text-base font-medium pt-2">Tecnologias Utilizadas: </Text>
            <Text className="text-base font-medium">{project.tecnologys}</Text>
            <Text className="text-base">{project.link}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}
