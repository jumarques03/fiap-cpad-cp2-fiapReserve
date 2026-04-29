import { Redirect } from 'expo-router';

export default function Index() {
  // Adicione o /(tabs) na frente para ele não ter dúvida de onde a tela está
  return <Redirect href="/login" />;
}