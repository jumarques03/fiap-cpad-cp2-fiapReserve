import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useContext } from "react";
import { SalasContext } from "../../context/SalasContext";

export default function Salas(){
    const router = useRouter();
    const { listaSalas } = useContext(SalasContext);
    
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Salas</Text>
            <Text style={styles.descricao}>Confira a disponibilidade das salas</Text>

            {listaSalas.map((sala) => (
                <TouchableOpacity 
                    key={sala.id} 
                    style={styles.containerSalas}
                    onPress={() => router.push({ pathname: "/disponibilidade", params: { id: sala.id, nome: sala.nome } })}
                >
                    <View style={styles.icone}>  
                        <MaterialCommunityIcons name="google-classroom" size={32} color="white"/>
                    </View>
                    
                    <View style={styles.infoSala}>
                        <Text style={styles.titulo}>{sala.nome}</Text>
                        <Text style={styles.textoSala}>Clique para ver a disponibilidade</Text>
                    </View>
                    
                    {sala.disponivel ? (
                        <View style={styles.indicadorLivre}>
                            <Text style={styles.textoIndicadorLivre}>Livre</Text>
                        </View>
                    ) : (
                        <View style={styles.indicadorOcupado}>
                            <Text style={styles.textoIndicadorOcupado}>Ocupado</Text>
                        </View>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "#1a1a1a", padding: 20, paddingTop: 60 },
    mainTitle: { fontSize: 28, fontWeight: "bold", color: "#FFFFFF", marginBottom: 5 },
    descricao: { fontSize: 16, color: "#8C8C8C", marginBottom: 30 },
    containerSalas: { backgroundColor: "#262626", padding: 15, borderRadius: 20, width: "100%", flexDirection: "row", alignItems: "center", marginBottom: 20, borderColor: '#333', borderWidth: 1 },
    icone: { width: 65, height: 65, alignItems: "center", justifyContent: "center", backgroundColor: "#F23064", borderRadius: 35, marginRight: 15 },
    infoSala: { flex: 1, justifyContent: "center" },
    titulo: { fontSize: 18, fontWeight: "bold", color: "#FFFFFF", marginBottom: 4 },
    textoSala: { fontSize: 14, color: "#8C8C8C" },
    indicadorLivre: { borderColor: "#00C853", borderWidth: 1, borderRadius: 20, paddingVertical: 6, paddingHorizontal: 16 },
    textoIndicadorLivre: { color: "#00C853", fontWeight: "bold", fontSize: 14 },
    indicadorOcupado: { borderColor: "#FF5252", borderWidth: 1, borderRadius: 20, paddingVertical: 6, paddingHorizontal: 16 },
    textoIndicadorOcupado: { color: "#FF5252", fontWeight: "bold", fontSize: 14 }
});