// app/(tabs)/index.tsx

import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import LottieView from 'lottie-react-native'; // RE-IMPORTE LottieView
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  // RE-INCLUA animationRef e useEffect
  const animationRef = React.useRef<LottieView>(null);
  React.useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
      animationRef.current.loop = true;
    }
  }, []);

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

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
        <Image
          source={require('@/assets/images/profile.jpg')}
          style={styles.profileImage}
        />
        <ThemedText type="title" style={styles.title}>Douglas Guilherme Cavalcanti Lima</ThemedText>
        
        <ThemedText type="subtitle" style={styles.subtitle}>
          Analista de Customer Success {'\n'}
          Analista de Recursos Humanos
        </ThemedText>

        <View style={styles.descriptionContainer}>
          <ThemedText style={styles.description}>
            Olá, meu nome é Douglas Cavalcanti.
            Sou Analista de Recursos Humanos com foco em Recrutamento, Seleção e Desenvolvimento de Talentos. {'\n'}
            Tenho uma sólida experiência em processos seletivos, onboarding, treinamento e suporte ao colaborador, atuando de forma estratégica para atrair, desenvolver e reter pessoas nas organizações.
            {'\n'}{'\n'}
            Sou conhecido pela minha escuta ativa, inteligência emocional e habilidade de comunicação, o que facilita o relacionamento tanto com candidatos quanto com gestores.
            {'\n'}{'\n'}
            Atualmente, também desempenho funções ligadas à área de Customer Success, o que amplia minha visão de experiência do usuário e encantamento do colaborador.
            {'\n'}{'\n'}
            Curso Sistemas para Internet pela Universidade Católica de Pernambuco (UNICAP), o que me proporciona uma abordagem mais analítica e voltada para dados, aplicando esse conhecimento, por exemplo, em análises para melhoria contínua de processos de RH.
            {'\n'}{'\n'}
            Tenho experiência com testes como MBTI e Big Five, uso de sistemas como TOTVS, ERP, plataformas de recrutamento, além de Excel em nível intermediário/avançado. Já conduzi mais de 50 entrevistas em um único mês e consegui reduzir o tempo de contratação em até 30%.
            {'\n'}{'\n'}
            Estou sempre em busca de crescimento profissional e novos desafios que me permitam contribuir com ambientes colaborativos, inovadores e voltados para o desenvolvimento humano.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Contato</ThemedText>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleLinkPress('mailto:douglasguilhermeclima@gmail.com')}
          >
            <Ionicons name="mail-outline" size={24} color="#007bff" style={styles.contactIcon} />
            <ThemedText style={styles.contactText}>douglasguilhermeclima@gmail.com</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleLinkPress('tel:+5581999276700')}
          >
            <Ionicons name="call-outline" size={24} color="#007bff" style={styles.contactIcon} />
            <ThemedText style={styles.contactText}>(81) 99927-6700</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleLinkPress('https://wa.me/5581999276700')}
          >
            <Ionicons name="logo-whatsapp" size={24} color="#25D366" style={styles.contactIcon} />
            <ThemedText style={styles.contactText}>(81) 99927-6700 (WhatsApp)</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleLinkPress('https://linkedin.com/in/douglas-lima-sig')}
          >
            <Ionicons name="logo-linkedin" size={24} color="#007bff" style={styles.contactIcon} />
            <ThemedText style={styles.contactText}>linkedin.com/in/douglas-lima-sig</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleLinkPress('https://github.com/DouglasLima-Front')}
          >
            <Ionicons name="logo-github" size={24} color="#007bff" style={styles.contactIcon} />
            <ThemedText style={styles.contactText}>github.com/DouglasLima-Front</ThemedText>
          </TouchableOpacity>
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
    ...StyleSheet.absoluteFillObject, // <-- ALTERAÇÃO AQUI: Preenche a tela toda
    zIndex: -1,
    backgroundColor: '#75B979', // <-- ADICIONADO AQUI: Cor verde de preenchimento
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '100%',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#F8F8F8',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.7)',
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
    marginBottom: 0,
    paddingHorizontal: 0,
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
    marginTop: 20,
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
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactIcon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#444',
    flexShrink: 1,
  },
});