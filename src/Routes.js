import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
    <Router>
        <Scene key='formLogin' hideNavBar component={FormLogin} title="Login" />
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
    </Router>
);
