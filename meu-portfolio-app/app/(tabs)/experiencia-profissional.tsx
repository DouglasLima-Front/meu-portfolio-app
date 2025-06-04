// app/(tabs)/experiencia-profissional.tsx

import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LottieView from 'lottie-react-native'; // RE-IMPORTE LottieView

export default function ProfessionalExperienceScreen() {
  // RE-INCLUA animationRef e useEffect
  const animationRef = React.useRef<LottieView>(null);
  React.useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
      animationRef.current.loop = true;
    }
  }, []);

  const professionalExperiences = [
    {
      company: 'Recrut.AI',
      role: 'Analista de Customer Sucess + Analista de Recursos Humanos',
      period: 'Jul 2023 - Atualmente',
      responsibilities: [
        'Atuação no recrutamento e seleção, incluindo análise de candidatos, divulgação de vagas, entrevistas e onboarding;',
        'Aplicação de testes psicológicos e técnicos, como MBTI e Big Five, além do envio de feedbacks;',
        'Desenvolvimento de estratégias para atração de talentos e retenção de colaboradores;',
        'Acompanhamento da jornada do candidato, garantindo uma experiência positiva no processo seletivo;',
        'Responsável pelo contato direto com candidatos e feedbacks sobre os processos;',
        'Identificação e análise de bugs relatados por clientes, repassando aos times responsáveis para correção;',
        'Atendimento consultivo para retenção e encantamento de usuários;',
        'Elaboração de materiais de treinamento e onboarding para novos clientes.',
      ],
    },
    {
      company: 'SERUR Advogados',
      role: 'Paralegal - Assist. Administrativo',
      period: 'Jul 2023 - Nov 2023',
      responsibilities: [
        'Organização e análise de documentos jurídicos;',
        'Comunicação com clientes e suporte administrativo;',
        'Uso de sistemas jurídicos como PJE e PROJUDI.',
      ],
    },
    {
      company: 'Farmácias Pague Menos',
      role: 'Auxiliar de RH + DP & Op. de Caixa',
      period: 'Jan 2021 - Jun 2023',
      responsibilities: [
        'Participação no recrutamento e seleção de novos colaboradores;',
        'Gestão de benefícios e acompanhamento de performance;',
        'Organização e arquivamento de documentos de RH;',
        'Uso de sistemas como TOTVS e ERP.',
      ],
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
        <ThemedText type="title" style={styles.title}>Experiência Profissional</ThemedText>
        {professionalExperiences.map((exp, index) => (
          <View key={index} style={styles.experienceCard}>
            <ThemedText type="subtitle" style={styles.cardTitle}>{exp.role}</ThemedText>
            <ThemedText style={styles.company}>{exp.company}</ThemedText>
            <ThemedText style={styles.period}>{exp.period}</ThemedText>
            <ThemedText type="subtitle" style={styles.sectionTitle}>Principais Responsabilidades:</ThemedText>
            {exp.responsibilities.map((resp, i) => (
              <ThemedText key={i} style={styles.listItem}>• {resp}</ThemedText>
            ))}
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
    ...StyleSheet.absoluteFillObject, // <-- ALTERAÇÃO AQUI: Preenche a tela toda
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
    color: '#111', // Mantém cor preta
    textShadowColor: 'rgba(255, 255, 255, 0.7)', // Sombra branca
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
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  company: {
    fontSize: 16,
    color: '#555',
    marginBottom: 3,
  },
  period: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#444',
  },
  listItem: {
    fontSize: 15,
    marginBottom: 3,
    lineHeight: 22,
    color: '#444',
  },
});