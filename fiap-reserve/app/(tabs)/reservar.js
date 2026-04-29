import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SalasContext } from '../../context/SalasContext'; 

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

const salasDisponiveis = ['Sala 101', 'Sala 202', 'Sala 507', 'Sala 305'];

export default function ReservarScreen() {
  const { adicionarReserva } = useContext(SalasContext);
  const [salaSelecionada, setSalaSelecionada] = useState(null);
  const [dataSelecionada, setDataSelecionada] = useState('');

  const handleConfirmarReserva = () => {
    if (!salaSelecionada || !dataSelecionada) {
      Alert.alert('Erro', 'Por favor, selecione uma sala e uma data.');
      return;
    }

    const novaReserva = {
      id: Date.now().toString(), 
      sala: salaSelecionada,
      data: dataSelecionada.split('-').reverse().join('/'), 
      horaEntrada: 'Dia Inteiro', 
      status: 'Confirmada',
    };

    adicionarReserva(novaReserva); 
    Alert.alert('Sucesso', `Reserva confirmada para a ${salaSelecionada} no dia ${novaReserva.data}!`);
 
    setSalaSelecionada(null);
    setDataSelecionada('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      <Text style={styles.mainTitle}>Reservar sala</Text>
      <Text style={styles.subtitle}>Escolha uma sala para reservar o dia inteiro</Text>

      {/* SEÇÃO: SELEÇÃO DE SALA */}
      <View style={styles.sectionHeader}>
        <View style={styles.iconCircle}>
          <Ionicons name="apps" size={24} color="#FF385C" />
        </View>
        <Text style={styles.sectionTitle}>Selecione a sala</Text>
      </View>
      
      <View style={styles.optionsGrid}>
        {salasDisponiveis.map(sala => (
          <TouchableOpacity
            key={sala}
            style={[styles.optionButton, salaSelecionada === sala && styles.optionButtonSelected]}
            onPress={() => setSalaSelecionada(sala)}
          >
            <Text style={[styles.optionText, salaSelecionada === sala && styles.optionTextSelected]}>{sala}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* SEÇÃO: CALENDÁRIO */}
      <View style={styles.sectionHeader}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="calendar-today" size={24} color="#FF385C" />
        </View>
        <Text style={styles.sectionTitle}>Selecione uma data disponível</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          theme={{
            backgroundColor: '#262626',
            calendarBackground: '#262626',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#FF385C',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#FF385C',
            dayTextColor: '#d9e1e8',
            textDisabledColor: '#4d4d4d',
            dotColor: '#FF385C',
            monthTextColor: '#ffffff',
            indicatorColor: 'white',
            arrowColor: '#FF385C',
          }}
          onDayPress={day => setDataSelecionada(day.dateString)}
          markedDates={{
            [dataSelecionada]: { selected: true, disableTouchEvent: true },
            '2026-03-17': { marked: true, dotColor: '#FF385C' },
          }}
        />
        <View style={styles.legendaContainer}>
          <Text style={styles.legendaText}>Legenda: </Text>
          <View style={styles.dot} />
          <Text style={styles.legendaText}>Indisponível</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmarReserva}>
        <Text style={styles.confirmButtonText}>Confirmar reserva</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', 
    padding: 20,
    paddingTop: 60, 
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
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionButton: {
    width: '48%', 
    backgroundColor: '#333333',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  optionButtonSelected: {
    backgroundColor: '#444444', 
    borderColor: '#FF385C',
    borderWidth: 1,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  optionTextSelected: {
    color: '#FF385C',
    fontWeight: '700',
  },
  calendarContainer: {
    backgroundColor: '#262626',
    borderRadius: 15,
    padding: 10,
    overflow: 'hidden',
  },
  legendaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  legendaText: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF385C',
    marginHorizontal: 5,
  },
  confirmButton: {
    backgroundColor: '#FF385C',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});