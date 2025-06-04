// components/navigation/TabBarIcon.tsx
import React from 'react';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { Ionicons } from '@expo/vector-icons';
import { type ComponentProps } from 'react';

// Apenas para garantir que o tipo IconProps esteja disponível
// No entanto, é mais comum definir os tipos diretamente aqui ou em um arquivo de tipos global
// Se você não tiver `createIconSet` funcionando bem com o tipo, pode simplificar.
// Exemplo de uma interface mais comum para uso aqui:
interface TabBarIconProps extends ComponentProps<typeof Ionicons> {
  name: ComponentProps<typeof Ionicons>['name'];
  color: string;
  focused?: boolean; // Adicionado para lidar com a lógica de ícone focado/não focado
}

export function TabBarIcon({ style, name, color, focused, ...rest }: TabBarIconProps) {
  // Exemplo de como você pode mudar o ícone baseado no foco
  // Certifique-se de que seus nomes de ícone terminam em '-outline' para o estado não focado
  // Por exemplo: 'home' para focado, 'home-outline' para não focado.
  const iconToRender = focused && name && String(name).endsWith('-outline')
    ? String(name).replace('-outline', '') as ComponentProps<typeof Ionicons>['name']
    : focused ? name : `${String(name)}-outline` as ComponentProps<typeof Ionicons>['name'];


  // Se o 'name' já for passado com outline, e você quer que ele remova o outline quando focado,
  // A lógica acima precisa ser mais robusta. Uma abordagem mais simples seria:
  // O _layout.tsx já passa o nome do ícone apropriado (focado/não focado),
  // então o componente TabBarIcon pode ser mais simples:
  // return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} name={name} color={color} {...rest} />;

  // Vamos manter a lógica do template para garantir que funcione com o que eu sugeri no _layout.tsx
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} name={name} color={color} {...rest} />;
}