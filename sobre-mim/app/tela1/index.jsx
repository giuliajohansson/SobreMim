import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SobreMim() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>LOOΠΔ</Text>
      </View>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/e2/fe/aa/e2feaa24ca77727e76420d902d2641bf.jpg' }}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Giulia Johansson</Text>
      <Text style={styles.description}>
        Seja bem-vindo(a)!  °ʚ(*´꒳`*)ɞ°                                      Clique nos botões para saber mais sobre mim! ˚　　　　✦　　　.　　. 　 ˚　.　　　　　 . ✦　　　 　˚　　　　 . ★⋆.
        　　　.   　　˚　✭　
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/tela2')}
      >
        <Text style={styles.buttonText}>Grupos que eu gosto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/tela3')}
      >
        <Text style={styles.buttonText}>Músicas favoritas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 0,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#ffb3c1', 
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'start',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 35,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 35,
    color: '#ff7aa2',
    fontFamily: 'Times New Roman',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 35,
    color: '#ff7aa2'
  },
  button: {
    backgroundColor: '#ffb3c1',
    padding: 10,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});