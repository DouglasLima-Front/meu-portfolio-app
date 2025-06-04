// app/(tabs)/projetos.tsx

import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LottieView from 'lottie-react-native';
import Colors from '@/constants/Colors';

export default function ProjectsScreen() {
  const animationRef = React.useRef<LottieView>(null);

  React.useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
      animationRef.current.loop = true;
    }
  }, []);

  const projects = [
    {
      name: 'Missão Jovem Aprendiz: Recrutamento Acelerado e Impacto Social',
      description: 'Um projeto desafiador e de grande impacto, liderado em parceria com Rosane Muniz, Analista de RH da Pague Menos e minha líder direta. Nosso objetivo era ambicioso: contratar aproximadamente 50 jovens aprendizes para diversas cidades de Pernambuco, incluindo áreas remotas do interior, em um prazo extremamente apertado.',
      full_description: 'A missão foi concluída com sucesso estrondoso: conseguimos contratar todos os 50 jovens aprendizes em um período recorde de apenas 1 mês e meio, superando em 50% a meta de tempo estipulada de 3 meses. Este feito notável foi resultado de uma estratégia de recrutamento ágil e adaptada às particularidades de cada região, que incluiu a otimização de canais de divulgação, a implementação de processos seletivos simplificados e eficientes, e um acompanhamento intensivo dos candidatos. O projeto não apenas atendeu às necessidades de talentos da Pague Menos, mas também gerou um impacto social significativo ao oferecer oportunidades de desenvolvimento profissional para jovens em todo o estado de Pernambuco, reforçando o compromisso da empresa e a capacidade de nossa equipe em superar grandes desafios.',
      technologies: ['Gestão de Projetos', 'Recrutamento & Seleção', 'Estratégias de RH', 'Logística de Eventos', 'Comunicação Interpessoal', 'Gestão de Tempo', 'Solução de Problemas'], // Mais tecnologias relevantes
      githubLink: 'https://github.com/DouglasLima-Front/ProjetoJovemAprendiz',
      // demoLink: '',
    },
  ];

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <ThemedView style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('@/assets/lottie/animation.json')}
        autoPlay
        loop
        style={styles.lottieBackground}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText type="title" style={styles.title}>Meus Projetos</ThemedText>
        {projects.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            <ThemedText type="subtitle" style={styles.cardTitle}>{project.name}</ThemedText>
            <ThemedText style={styles.description}>{project.full_description}</ThemedText>
            
            <View style={styles.techContainer}>
              {project.technologies.map((tech, i) => (
                <View key={i} style={styles.techBadge}>
                  <ThemedText style={styles.techText}>{tech}</ThemedText>
                </View>
              ))}
            </View>
            
            <View style={styles.linkContainer}>
              {project.githubLink && (
                <TouchableOpacity onPress={() => handleLinkPress(project.githubLink)} style={styles.linkButton}>
                  <ThemedText style={styles.linkButtonText}>Ver Mais Detalhes</ThemedText>
                </TouchableOpacity>
              )}
            </View>
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
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    backgroundColor: '#75B979', // Cor verde de preenchimento
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
    color: '#111',
    textShadowColor: 'rgba(255, 255, 255, 0.9)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  projectCard: {
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
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
    color: '#444',
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  techBadge: {
    backgroundColor: Colors.light.tint,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  linkButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});