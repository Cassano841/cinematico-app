import React from 'react';

export default class UsuarioForm extends React.Component {

    constructor() {
        super();
        this.state = {
            nome:"",
            login:"",
            email:""
        }
    }

    render() {
        return <fieldset>
            <legend>Cadastrar Usuario:</legend>
            <label>Nome:</label><input /> <br />
            <label>Login:</label><input /> <br />
            <button>Cadastrar</button><button>Limpar</button>
        </fieldset>
    }
}