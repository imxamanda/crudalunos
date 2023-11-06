import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, FAB, MD3Colors, Text } from 'react-native-paper'


export default function ListaAlunos({ navigation, route }) {

  const [alunos, setAlunos] = useState([
    {
      nome: 'Helena Maria',
      idade: '25',
      matricula: '33229826730',
      curso: 'Odontologia'
    },
    {
      nome: 'João Paulo',
      idade: '23',
      matricula: '93748236473',
      curso: 'Farmácia'
    }
  ])

  function adicionarAluno(aluno) {
    let novaListaAlunos = alunos
    novaListaAlunos.push(aluno)
    setAlunos(novaListaAlunos)
  }

  function excluirAluno(aluno) {
    const novaListaAlunos = alunos.filter(p => p !== aluno)
    setAlunos(novaListaAlunos)
  }



  return (
    <View style={styles.container}>

      <Text variant='titleLarge' style={styles.title} >Lista de Alunos</Text>

      <FlatList
        style={styles.list}
        data={alunos}
        renderItem={({ item }) => (
          <Card
            mode='outlined'
            style={styles.card}
          >
            <Card.Content
              style={styles.cardContent}
            >
              <View style={{ flex: 1 }}>
                <Text variant='titleMedium'>{item?.nome}</Text>
                <Text variant='bodyLarge'>Idade: {item?.idade}</Text>
                <Text variant='bodyLarge'>Matricula: {item?.matricula} </Text>
                <Text variant='bodyLarge'>Curso: {item?.curso} </Text>
              </View>
              
            </Card.Content>
            <Card.Actions>
              <Button>
                Editar
              </Button>
              <Button onPress={() => excluirAluno(item)}>
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
      />

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push('FormAluno', { acao: adicionarAluno })}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    margin: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  list: {
    width: '90%',
  },
  card: {
    marginTop: 15
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: MD3Colors.primary80,
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 15
  }
})