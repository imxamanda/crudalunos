import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import Toast from 'react-native-toast-message'

export default function FormAluno({ navigation, route }) {

    const { acao } = route.params
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [matricula, setMatricula] = useState('')
    const [curso, setCurso] = useState('')
    const [showMensagemErro, setShowMensagemErro] = useState(false)

    function salvar() {

        if (nome === '' || idade === '' || matricula === '' || curso === '') {
            setShowMensagemErro(true)
        } else {
            setShowMensagemErro(false)

            const novaAluno = {
                nome: nome,
                idade: idade,
                matricula: matricula,
                curso: curso
            }

            acao(novaAluno)
            Toast.show({
                type: 'success',
                text1: 'Aluno salva com sucesso!'
            })
            navigation.goBack()
        }

    }


    return (
        <View style={styles.container}>

            <Text variant='titleLarge' style={styles.title} >Adicionar Aluno</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    label={'Nome'}
                    mode='outlined'
                    value={nome}
                    onChangeText={text => setNome(text)}
                />

                <TextInput
                    style={styles.input}
                    label={'Idade'}
                    mode='outlined'
                    keyboardType='numeric'
                    value={idade}
                    onChangeText={text => setIdade(text)}
                />

                <TextInput
                    style={styles.input}
                    label={'Matricula'}
                    mode='outlined'
                    keyboardType='numeric'
                    value={matricula}
                    onChangeText={text => setMatricula(text)}
                />

                <TextInput
                    style={styles.input}
                    label={'Curso'}
                    mode='outlined'
                    keyboardType='numeric'
                    value={curso}
                    onChangeText={text => setCurso(text)}
                />

                {showMensagemErro &&
                    <Text style={{ color: 'red', textAlign: 'center' }}>Preencha todos os campos!</Text>
                }


            </View>

            <View style={styles.buttonContainer}>

                <Button
                    style={styles.button}
                    mode='contained-tonal'
                    onPress={() => navigation.goBack()}
                >
                    Voltar
                </Button>

                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={salvar}
                >
                    Salvar
                </Button>


            </View>



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
    inputContainer: {
        width: '90%',
        flex: 1
    },
    input: {
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        gap: 10,
        marginBottom: 10
    },
    button: {
        flex: 1
    }
})