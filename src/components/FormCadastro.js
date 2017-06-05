import React, { Component } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { connect } from "react-redux";
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from "../actions/AutenticacaoActions";

class formCadastro extends Component {
  _cadastraUsuario() {
    const { nome, email, senha } = this.props;
    this.props.cadastraUsuario({ nome, email, senha });
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: "center" }}>
          <TextInput
            value={this.props.nome}
            placeholder="Nome"
            style={{ fontSize: 20, height: 45 }}
            onChangeText={texto => this.props.modificaNome(texto)}
          />
          <TextInput
            value={this.props.email}
            placeholder="E-mail"
            style={{ fontSize: 20, height: 45 }}
            onChangeText={texto => this.props.modificaEmail(texto)}
          />
          <TextInput
            value={this.props.senha}
            placeholder="Senha"
            style={{ fontSize: 20, height: 45 }}
            onChangeText={texto => this.props.modificaSenha(texto)}
          />
        </View>
        <Text style={{color:'red', margin:10, fontSize:18}}>{this.props.erroCadastro}</Text>
        <View style={{ flex: 1 }}>
          <Button
            title="Cadastrar"
            color="#115E54"
            onPress={() => this._cadastraUsuario()}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return ({
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro
  });
}
export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
})(formCadastro);
