import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const Musicas = [
  {
    id: '1',
    nome: 'Ditto - NewJeans',
    ano: '2022',
    imagem: 'https://images.genius.com/081066ab40bbaf5b1eddcfaa7b5b4dd2.1000x1000x1.jpg',
  },
  {
    id: '2',
    nome: 'SOS - Fifty Fifty',
    ano: '2024',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273d50021be5057d0f399f38950',
  },
  {
    id: '3',
    nome: 'Sticky - KISS OF LIFE',
    ano: '2024',
    imagem: 'https://static.wikia.nocookie.net/kissoflife/images/f/f1/KIOF_Sticky_album_cover.jpg/revision/latest?cb=20240630163040',
  },
  {
    id: '4',
    nome: 'TTYL - Loossemble',
    ano: '2024',
    imagem: 'https://i.scdn.co/image/ab67616d0000b2731de8aec4cb631faf46291f75',
  },
];

const MusicasCard = ({ id, nome, ano, imagem }) => {
  const router = useRouter();

  const handlePress = () => {
    if (id === '1') {
      router.push({
        pathname: '/tela4',
        params: { nome, ano, imagem },
      });
    }
  };

  return (
    <TouchableOpacity onPress={id === '1' ? handlePress : null} activeOpacity={id === '1' ? 0.7 : 1}>
      <View style={[styles.card, id === '1' && styles.cardClicavel]}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.ano}>{ano}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MusicasFavoritas = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Músicas Favoritas</Text>
      </View>

      <FlatList
        data={Musicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MusicasCard id={item.id} nome={item.nome} ano={item.ano} imagem={item.imagem} />
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
  nome: {
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

export default MusicasFavoritas;