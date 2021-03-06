import firebase from 'firebase';

export const modificaEmail = (texto) => {
    console.log(texto);
    return {
        type:'modifica_email',
        payload:texto
    }
}
export const modificaSenha = (texto) => {
    console.log(texto);
    return {
        type:'modifica_senha',
        payload:texto
    }
}
    export const modificaNome = (texto) => {
    console.log(texto);
    return {
        type:'modifica_nome',
        payload:texto
    }
}
export const cadastraUsuario = ({nome, email, senha}) => {
    return dispatch => {
   firebase.auth().createUserWithEmailAndPassword(email, senha)
   .then(user => cadastroUsuarioSucesso(dispatch))
   .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
}
const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: 'Sucesso' });
}
const cadastroUsuarioErro = (erro, dispatch) => {
    console.log(erro);
    dispatch ({ type: 'cadastro_usuario_erro', payload: erro.message });

}