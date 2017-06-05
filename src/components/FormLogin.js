import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  StatusBar
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions'

const formLogin = props => {
  console.log(props);
  return (
    <Image style={{flex:1, width: null}} source={require('../imgs/3.jpeg')}>
    <StatusBar backgroundColor="#0000FF"/>
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 38, color: "#000080",
                       fontWeight: "bold",textShadowColor: '#7FFFD4',
                       textShadowOffset: { width: 3, height: 2 },
                       textShadowRadius: 10 }}>
          SSG Mensagens
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <TextInput
          value={props.email}
          style={{ fontSize: 24, height: 45, color:'#FFF' }}
          placeholder="E-mail"
          onChangeText={texto => props.modificaEmail(texto)}
        />
        <TextInput
          value={props.senha}
          style={{ fontSize: 24, height: 45, color:'#FFF' }}
          placeholder="Senha"
          onChangeText={texto => props.modificaSenha(texto)}
        />
        <TouchableHighlight onPress={() => Actions.formCadastro()}>
          <Text style={{ fontSize: 22, color: "red" }}>
            Ainda não tem cadastro? Cadastre-se!
          </Text>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 1 }}>
        <Button title="Acessar" color="#000080" onPress={() => false} />
      </View>
    </View>
    </Image>
  );
};
const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});
export default connect(mapStateToProps, {modificaEmail, modificaSenha})(formLogin);
