import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from '@expo/vector-icons';

export default function Login() {

  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.icone}>
        <Ionicons name="calendar-outline" size={55} color="white" />
      </View>
      <Text style={styles.titulo}>FiapReserve</Text>
      <Text style={styles.subtitulo}>Sistema de reservas de salas</Text>
      <View style={styles.containerCredenciais}>
        
        <Text style={styles.textoCredenciais}>RM ou E-mail</Text>
        <View style={styles.caixaInput}> 
          <Text style={styles.textoInput}>Digite seu RM ou e-mail</Text>
        </View>
        
        <Text style={styles.textoCredenciais}>Senha</Text>
        <View style={styles.caixaInput}> 
          <Text style={styles.textoInput}>Digite sua senha</Text>
        </View>
      </View>
       
      <TouchableOpacity style={styles.botao} onPress={() => router.replace("/salas")}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent: "center", alignItems:"center", backgroundColor: "#262626", padding: 30},
  icone: {backgroundColor: "#F23064", padding: 5, borderRadius: 8},
  titulo: {fontSize: 36, fontWeight: "bold", color: "#ffff", marginBottom: 8, marginTop: 8},
  subtitulo: {fontSize: 18, color: "#8C8C8C", marginBottom: 40},
  containerCredenciais: {width: '100%', alignItems: 'flex-start', marginBottom: 10},
  textoCredenciais: {fontSize: 16, color: "#8C8C8C", marginBottom: 5},
  caixaInput: {marginBottom: 20, backgroundColor: "#404040", borderRadius: 20, width: "100%"},
  textoInput: {color: "#8C8C8C", fontSize: 16, padding: 5},
  botao: {backgroundColor: "#F23064", width: '100%', borderRadius: 20, marginTop: 50},
  textoBotao: {color: "#ffff", textAlign: "center", padding: 5, fontSize: 16,}
})