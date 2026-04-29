import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { authContext } from '../../context/AuthContext'; // Importação do contexto de autenticação
import { reservasContext } from '../../context/ReservasContext'; // Contexto correto para manipulação de reservas

const ReservaCard = ({ reserva }) => {
  const { removerReserva } = useContext(reservasContext);

  const handleCancelar = () => {
    Alert.alert(
      "Cancelar Reserva",
      `Deseja realmente cancelar a reserva da ${reserva.sala}?`,
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => removerReserva(reserva.id), style: "destructive" }
      ]
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.contentLeft}>
        <View style={styles.iconCircle}>
          <Ionicons name="laptop-outline" size={24} color="#F23064" />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.cardRoomName}>{reserva.sala}</Text>
          
          <View style={styles.dateTimeRow}>
            <MaterialIcons name="calendar-today" size={16} color="#AAAAAA" />
            <Text style={styles.cardDate}>{reserva.data}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.contentRight}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>{reserva.status}</Text>
        </View>

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelar}>
          <Text style={styles.cancelButtonText}>Cancelar reserva</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function MinhasReservasScreen() {
  const { reservas } = useContext(reservasContext);
  const { logoutUsuario } = useContext(authContext);

  const handleLogout = async () => {
    await logoutUsuario();
    // O redirecionamento será tratado pelo RootNavigator
  };

  return (
    <View style={styles.container}>
      {/* HEADER COM LOGOUT */}
      <View style={styles.header}>
        <View>
          <Text style={styles.mainTitle}>Minhas reservas</Text>
          <Text style={styles.subtitle}>Gerencie suas reservas ativas</Text>
        </View>
        
        <TouchableOpacity style={styles.botaoLogout} onPress={handleLogout}>
          <MaterialCommunityIcons name="logout" size={24} color="#F23064" />
        </TouchableOpacity>
      </View>

      {reservas.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Você ainda não tem reservas ativas</Text>
          <Text style={styles.emptySubtitleText}>Vá para a aba "Reservar" para agendar uma sala</Text>
        </View>
      ) : (
        <FlatList
          data={reservas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ReservaCard reserva={item} />}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', 
    padding: 24,
    paddingTop: 60, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 5,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#AAAAAA',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 25,
  },
  botaoLogout: {
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  flatListContent: {
    paddingBottom: 100, 
  },
  card: {
    backgroundColor: '#262626', 
    borderRadius: 20, 
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    borderColor: '#333',
    borderWidth: 1,
  },
  contentLeft: {
    flexDirection: 'row',
    alignItems: 'center', 
    flex: 1,
  },
  contentRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  cardRoomName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dateTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDate: {
    color: '#AAAAAA',
    fontSize: 14,
    marginLeft: 5,
  },
  statusBadge: {
    backgroundColor: 'rgba(30, 56, 31, 0.3)', 
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
    borderColor: '#00C853', 
    borderWidth: 1,
    marginBottom: 8,
  },
  statusBadgeText: {
    color: '#00C853', 
    fontSize: 12,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#F23064',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    width: 110,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  emptySubtitleText: {
    color: '#888',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});