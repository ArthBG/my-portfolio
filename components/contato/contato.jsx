import React from 'react';
import { View, Text, Image } from 'react-native';

const ContactSection = ({ darkMode }) => {
  return (
    <View>
      <Text style={darkMode ? { color: 'white' } : { color: 'black' }} className="font-semibold text-2xl mx-auto pt-20">
        Contato:
      </Text>
      <View>
        <Text style={darkMode ? { color: 'white' } : { color: 'black' }} className="text-base m-2 p-8">
          <Image className="w-16 h-16" source={require('../../assets/images/gmail.png')} />
          <Text style={darkMode ? { color: 'white' } : { color: 'black' }} className="font-bold"> E-mail: </Text>
          <Text>janbgsart@gmail.com</Text>
        </Text>
        
        <Text style={darkMode ? { color: 'white' } : { color: 'black' }} className="text-base m-2 p-8">
          <Image className="w-16 h-20" source={require('../../assets/images/whatsapp.png')} />
          <Text style={darkMode ? { color: 'white' } : { color: 'black' }} className="font-bold">Telefone: </Text>
          <Text>(19) 9 9713-7980</Text>
        </Text>
        
        <Text style={darkMode ? { color: 'white' } : { color: 'black' }} className="text-base m-2 p-8">
          <Image className="w-16 h-20" source={require('../../assets/images/linkedin.png')} />
          <Text style={darkMode ? { color: 'white' } : { color: 'black' }} className="font-bold"> LinkedIn</Text>
          {/* <Text>https://www.linkedin.com/in/arthur-borges-b3877a2b1/</Text> */}
        </Text>
      </View>
    </View>
  );
};

export default ContactSection;
