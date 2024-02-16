import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';


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

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.image} style="w-full h-48 object-cover" />
        <Text className="font-bold text-lg">{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.tecnologys}</Text>
        <Text>{item.link}</Text>
      </View>
    );
  };
  return (
    <View  className="bg-slate-200"> 
      <View>
      <Image className="rounded-full w-80 h-80 mx-auto" source={require('./assets/images/icon.jpeg')} />

      <Text className="font-extrabold text-2xl mx-auto pt-7">Arthur Borges</Text>
      <Text className="text-lg mx-auto pt-5" ></Text>
      <Text className="text-lg mx-auto pt-2" >Estudante de Desenvolvimento de Sistemas no SENAI Valinhos{'\n'}Cursando o terceiro ano do Ensino Médio</Text>
      <ScrollView>
      <Text className="font-semibold text-2xl mx-auto pt-5">Sobre:</Text>
      <Text className="text-base mx-auto pt-2" >Desenvolvedor Full Stack com conhecimentos em front-end (HTML, CSS, JavaScript, React, React Native). Especializado na criação de interfaces intuitivas e eficiência na construção de softwares. Comprometido com as melhores práticas e atualizações constantes, estou pronto para contribuir significativamente em projetos desafiadores.</Text>
        <View className="pt-5">
          <Text className="font-bold text-xl text-center pt-2">Projetos:</Text>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={projects}
            renderItem={_renderItem}
            sliderWidth={300}
            itemWidth={300}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}
