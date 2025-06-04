// app/(tabs)/jogo.tsx

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Colors from '@/constants/Colors';

interface Attempt {
  guess: string;
  bulls: number;
  cows: number;
}

const MAX_ATTEMPTS = 10;
const CODE_LENGTH = 4;

export default function GameScreen() {
  const [secretCode, setSecretCode] = useState<string>('');
  const [guess, setGuess] = useState<string>('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    startNewGame();
  }, []);

  const generateSecretCode = () => {
    let code = '';
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    while (code.length < CODE_LENGTH) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      const digit = digits[randomIndex];
      if (!code.includes(digit)) { // Garante dígitos únicos
        code += digit;
      }
    }
    return code;
  };

  const startNewGame = () => {
    setSecretCode(generateSecretCode());
    setGuess('');
    setAttempts([]);
    setGameOver(false);
    setMessage('');
    // console.log('New game started. Secret code:', secretCode); // Descomente para debug
  };

  const checkGuess = () => {
    if (guess.length !== CODE_LENGTH || !/^\d+$/.test(guess) || new Set(guess.split('')).size !== CODE_LENGTH) {
      Alert.alert(
        'Entrada Inválida',
        `Por favor, digite um código de ${CODE_LENGTH} dígitos únicos (0-9).`
      );
      return;
    }

    let bulls = 0;
    let cows = 0;

    const secretCodeArray = secretCode.split('');
    const guessArray = guess.split('');

    for (let i = 0; i < CODE_LENGTH; i++) {
      if (guessArray[i] === secretCodeArray[i]) {
        bulls++;
      } else if (secretCodeArray.includes(guessArray[i])) {
        cows++;
      }
    }

    const newAttempt: Attempt = { guess, bulls, cows };
    const updatedAttempts = [newAttempt, ...attempts];
    setAttempts(updatedAttempts);
    setGuess('');

    if (bulls === CODE_LENGTH) {
      setMessage('🎉 Parabéns! Você acertou a senha! 🎉');
      setGameOver(true);
    } else if (updatedAttempts.length >= MAX_ATTEMPTS) {
      setMessage(`Fim de jogo! 😢 Você usou todas as ${MAX_ATTEMPTS} tentativas. A senha era: ${secretCode}`);
      setGameOver(true);
    } else {
      setMessage('');
    }
  };

  const showSecretCodeAlert = () => {
    Alert.alert('Senha Secreta', `🤫 A senha secreta é: ${secretCode}`);
  };

  return (
    <ThemedView style={styles.container}>
      {/* A tela de jogo não tem Lottie, mas o background do ThemedView agora é a cor estática */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText type="title" style={styles.title}>Jogo Senha</ThemedText>
        <ThemedText type="subtitle" style={styles.subtitleGame}>Bulls and Cows</ThemedText>
        <ThemedText style={styles.description}>
          Tente adivinhar o código de {CODE_LENGTH} dígitos únicos.
          {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Bulls</Text> = dígitos corretos na posição correta.
          {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Cows</Text> = dígitos corretos, mas na posição errada.
        </ThemedText>

        {!gameOver ? (
          <View style={styles.inputSection}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              maxLength={CODE_LENGTH}
              value={guess}
              onChangeText={setGuess}
              placeholder={`Digite ${CODE_LENGTH} dígitos únicos`}
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={checkGuess}>
              <ThemedText style={styles.buttonText}>Adivinhar</ThemedText>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.gameOverSection}>
            <ThemedText style={[styles.gameOverMessage, gameOver && message.includes('Parabéns') ? styles.winMessage : styles.loseMessage]}>
              {message}
            </ThemedText>
            <TouchableOpacity style={styles.newGameButton} onPress={startNewGame}>
              <ThemedText style={styles.buttonText}>Jogar Novamente</ThemedText>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={[styles.button, styles.revealButton]} onPress={showSecretCodeAlert}>
          <ThemedText style={styles.buttonText}>Ver Senha</ThemedText>
        </TouchableOpacity>

        <ThemedText type="subtitle" style={styles.attemptsTitle}>Tentativas ({attempts.length}/{MAX_ATTEMPTS}):</ThemedText>
        <View style={styles.attemptsList}>
          {attempts.map((attempt, index) => (
            <View key={index} style={styles.attemptItem}>
              <ThemedText style={styles.attemptNumber}>#{attempts.length - index}</ThemedText>
              <ThemedText style={styles.attemptGuess}>{attempt.guess}</ThemedText>
              <View style={styles.attemptResult}>
                <ThemedText style={styles.bullsText}>🐂 {attempt.bulls}</ThemedText>
                <ThemedText style={styles.cowsText}>🐄 {attempt.cows}</ThemedText>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // O fundo será a cor definida em Colors.ts (agora #75B979)
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  subtitleGame: {
    fontSize: 22,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
    color: '#444',
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 22,
    textAlign: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  revealButton: {
    backgroundColor: '#FFA500',
    marginTop: 10,
    width: '50%',
  },
  gameOverSection: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  gameOverMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  winMessage: {
    color: '#28a745',
  },
  loseMessage: {
    color: '#dc3545',
  },
  newGameButton: {
    backgroundColor: '#17a2b8',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  attemptsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    color: '#333',
  },
  attemptsList: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 10,
    padding: 10,
  },
  attemptItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: 8,
    marginBottom: 5,
  },
  attemptNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6c757d',
    width: 60,
  },
  attemptGuess: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.tint,
    width: 80,
    textAlign: 'center',
  },
  attemptResult: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
  },
  bullsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  cowsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffc107',
  },
});