import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const grupos = [
  {
    id: '1',
    titulo: 'NewJeans',
    ano: '2022',
    imagem: 'https://revistakoreain.com.br/wp-content/uploads/2022/07/newjeans-1.jpg', 
  },
  {
    id: '2',
    titulo: 'Aespa',
    ano: '2020',
    imagem: 'https://i8.amplience.net/i/naras/group2resized.jpg.jpg',
  },
  {
    id: '3',
    titulo: 'ILLIT',
    ano: '2024',
    imagem: 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2024/05/5c729f2-ILLIT.jpeg',
  },
  {
    id: '4',
    titulo: 'Loossemble',
    ano: '2023',
    imagem: 'https://asiaon.com.br/wp-content/uploads/2024/09/GU7iEyha4AUo8cy-scaled.jpeg',
  },
];

const GruposCard = ({ titulo, ano, imagem }) => (
  <View style={styles.card}>
    <Image source={{ uri: imagem }} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.ano}>{ano}</Text>
    </View>
  </View>
);

const Grupos = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Grupos</Text>
      </View>

      <FlatList
        data={grupos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GruposCard titulo={item.titulo} ano={item.ano} imagem={item.imagem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#ffb3c1',
    padding: 15,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'start',
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 20,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  imagem: {
    width: '100%',
    height: 350,
  },
  info: {
    padding: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ano: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default Grupos;