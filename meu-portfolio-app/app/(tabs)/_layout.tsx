import React from 'react';
// Importação de Ionicons, que é mais flexível para o estilo de ícones outline/filled
import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router'; // Link e Tabs são do expo-router
import { Pressable } from 'react-native'; // Pressable é usado para botões

// Certifique-se de que o caminho para Colors está correto
import Colors from '@/constants/Colors';
// Certifique-se de que o caminho para useColorScheme está correto.
// O erro anterior indicava que estava em 'components', mas agora você tem '@/hooks/useColorScheme'.
// Este caminho está correto se o arquivo useColorScheme.ts está na pasta 'hooks'.
import { useColorScheme } from '@/components/useColorScheme'; // CAMINHO CORRIGIDO

// A função TabBarIcon está configurada para usar Ionicons,
// e alterna entre a versão sólida e outline do ícone para a aba focada/não focada.
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  focused?: boolean; // Esta prop é importante para alternar entre ícones sólidos e outline
}) {
  // Lógica para alternar entre ícone sólido (focado) e outline (não focado)
  // Alguns ícones (como 'school', 'briefcase', 'folder-open') podem não ter uma versão '-outline'
  // Nesses casos, o nome original é usado.
  const iconName = props.focused ? props.name : `${String(props.name)}-outline` as React.ComponentProps<typeof Ionicons>['name'];

  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} name={iconName} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Cor do ícone/texto da aba ativa
        headerShown: false, // Oculta o cabeçalho padrão para todas as telas, você gerencia isso na Home
        // <-- ÚNICA ALTERAÇÃO AQUI: fontSize alterado de 10 para 9 (ou 8)
        tabBarLabelStyle: { textTransform: 'uppercase', fontSize: 9 }, // Ajustado para que os nomes caibam
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background, // Fundo da tab bar (transparente ou outra cor de Colors.ts)
          borderTopWidth: 0, // Remove a borda superior padrão da tab bar
          elevation: 0, // Remove sombra no Android
          shadowOpacity: 0, // Remove sombra no iOS
        },
      }}>

      {/* 1. Aba Home (index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início', // Título que aparece no cabeçalho e na aba
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={color} focused={focused} />,
          headerRight: () => null, // Removido o ícone de informação no cabeçalho direito
        }}
      />

      {/* 2. Aba Jogo (jogo.tsx) */}
      <Tabs.Screen
        name="jogo" // Nome do arquivo .tsx (sem extensão) dentro da pasta app/(tabs)/
        options={{
          title: 'Jogo',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="game-controller" color={color} focused={focused} />,
        }}
      />

      {/* 3. Aba Sobre (sobre.tsx) */}
      <Tabs.Screen
        name="sobre" // Nome do arquivo .tsx (sem extensão)
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="information-circle" color={color} focused={focused} />,
        }}
      />

      {/* 4. Aba Projetos (projetos.tsx) */}
      <Tabs.Screen
        name="projetos" // Nome do arquivo .tsx (sem extensão)
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="folder-open" color={color} focused={focused} />,
        }}
      />

      {/* 5. Aba Experiência Acadêmica (experiencia-academica.tsx) */}
      <Tabs.Screen
        name="experiencia-academica" // Nome do arquivo .tsx (sem extensão)
        options={{
          title: 'Acadêmica', // Título para a aba
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="school" color={color} focused={focused} />,
        }}
      />

      {/* 6. Aba Experiência Profissional (experiencia-profissional.tsx) */}
      <Tabs.Screen
        name="experiencia-profissional" // Nome do arquivo .tsx (sem extensão)
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="briefcase" color={color} focused={focused} />,
        }}
      />

      {/* AS ROTAS PADRÃO DO TEMPLATE ('explore', 'modal', '+not-found') FORAM REMOVIDAS.
          Certifique-se de que os arquivos .tsx correspondentes foram EXCLUÍDOS da pasta app/(tabs)/.
      */}
    </Tabs>
  );
}