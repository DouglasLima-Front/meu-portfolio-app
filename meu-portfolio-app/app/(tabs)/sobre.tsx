// app/(tabs)/sobre.tsx

import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LottieView from 'lottie-react-native'; // Importe LottieView para o fundo animado

export default function AboutScreen() {
  const animationRef = React.useRef<LottieView>(null);

  React.useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
      animationRef.current.loop = true;
    }
  }, []);

  const technologies = [
    'React Native (Framework principal)',
    'Expo (Plataforma de desenvolvimento)',
    'Expo Router (Navegação)',
    'TypeScript (Tipagem estática)',
    'JavaScript (Linguagem de programação)',
    'React (Biblioteca para UI)',
    'Node.js (Ambiente de execução, para backend se aplicável)',
    'HTML/CSS (Fundamentos web, para conceitos de estilo)',
    'Git/GitHub (Controle de versão)',
    'Axios (Requisições HTTP, se usar APIs)',
    'React Navigation (Alternativa ao Expo Router, mas optamos pelo Expo Router)',
    'AsyncStorage (Armazenamento local)',
    'React Native Gesture Handler (Gestos complexos)',
    'React Native Reanimated (Animações)',
    'Zustand / Redux (Gerenciamento de estado, se aplicável)',
    'Formik / React Hook Form (Gerenciamento de formulários)',
    'Yup (Validação de schemas)',
  ];

  return (
    <ThemedView style={styles.container}>
      {/* Fundo Lottie com a cor verde de preenchimento */}
      <LottieView
        ref={animationRef}
        source={require('@/assets/lottie/animation.json')}
        autoPlay
        loop
        style={styles.lottieBackground} // Usará StyleSheet.absoluteFillObject e backgroundColor
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText type="title" style={styles.title}>Sobre o App e as Tecnologias</ThemedText>
        {/* Contêiner com fundo semi-transparente para a descrição geral */}
        <View style={styles.descriptionContainer}>
          <ThemedText style={styles.description}>
            Este aplicativo é o meu portfólio pessoal, desenvolvido com o objetivo de demonstrar minhas habilidades em React Native e tecnologias relacionadas.
          </ThemedText>
        </View>

        {/* Seção de Tecnologias e Módulos */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Tecnologias e Módulos Utilizados:</ThemedText>
          {technologies.map((tech, index) => (
            <ThemedText key={index} style={styles.listItem}>• {tech}</ThemedText>
          ))}
        </View>

        {/* Seção de Desenvolvimento e Ferramentas */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Desenvolvimento e Ferramentas:</ThemedText>
          <ThemedText style={styles.listItem}>• Desenvolvido utilizando GitHub Codespaces para um ambiente de desenvolvimento rápido e configurado.</ThemedText>
          <ThemedText style={styles.listItem}>• Publicado através do Expo Go para fácil acesso e teste em dispositivos móveis.</ThemedText>
          <ThemedText style={styles.listItem}>• Controle de versão com Git e hospedagem no GitHub.</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottieBackground: {
    ...StyleSheet.absoluteFillObject, // Preenche a tela toda
    zIndex: -1,
    backgroundColor: '#75B979', // <-- ADICIONADO AQUI: Cor verde de preenchimento
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#F8F8F8', // Texto claro para contraste com o Lottie e fundo verde
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra escura
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#222',
  },
  section: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    lineHeight: 22,
    color: '#444',
  },
});