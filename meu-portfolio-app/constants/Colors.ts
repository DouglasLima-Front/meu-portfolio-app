// constants/Colors.ts

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: 'transparent', // <-- VOLTA PARA TRANSPARENTE
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: 'transparent', // <-- VOLTA PARA TRANSPARENTE
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};