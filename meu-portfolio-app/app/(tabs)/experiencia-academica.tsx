// app/(tabs)/experiencia-academica.tsx

import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LottieView from 'lottie-react-native'; // RE-IMPORTE LottieView

export default function AcademicExperienceScreen() {
  // RE-INCLUA animationRef e useEffect
  const animationRef = React.useRef<LottieView>(null);
  React.useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
      animationRef.current.loop = true;
    }
  }, []);

  const academicExperiences = [
    {
      institution: 'Universidade Católica de Pernambuco - (UNICAP)',
      course: 'Sistemas para Internet',
      period: '2023 - 2025',
      description: 'Foco em algoritmos, estrutura de dados, redes e desenvolvimento de software.',
      logo: 'https://portal.unicap.br/image/layout_set_logo?img_id=2214787&t=1748419858715',
    },
    {
      institution: 'Universidade Federal de Pernambuco',
      course: 'Letras - Português',
      period: '2025 - 2028',
      description: 'Foco em melhoria na comunicação e interações sociais.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Bras%C3%A3o_da_UFPE.png',
    },
  ];

  return (
    <ThemedView style={styles.container}>
      {/* RE-INCLUA LottieView no JSX */}
      <LottieView
        ref={animationRef}
        source={require('@/assets/lottie/animation.json')}
        autoPlay
        loop
        style={styles.lottieBackground} // AGORA COM O FUNDO VERDE NO PRÓPRIO LOTTIE
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText type="title" style={styles.title}>Experiência Acadêmica</ThemedText>
        {academicExperiences.map((exp, index) => (
          <View key={index} style={styles.experienceCard}>
            {exp.logo && (
              <Image
                source={{ uri: exp.logo }}
                style={styles.logo}
                resizeMode="contain"
              />
            )}
            <ThemedText type="subtitle" style={styles.cardTitle}>{exp.course}</ThemedText>
            <ThemedText style={styles.institution}>{exp.institution}</ThemedText>
            <ThemedText style={styles.period}>{exp.period}</ThemedText>
            <ThemedText style={styles.description}>{exp.description}</ThemedText>
          </View>
        ))}
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
    color: '#F8F8F8', // Texto claro para contraste com Lottie e fundo verde
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra escura para realçar
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  experienceCard: {
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
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  institution: {
    fontSize: 16,
    color: '#555',
    marginBottom: 3,
    textAlign: 'center',
  },
  period: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});