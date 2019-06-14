import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import UsuarioTabela from './UsuarioTabela';

export default class UsuarioView extends React.Component {

    constructor(){
        super();
        this.state = { carregar:true };
    }
    
    render() {
        return <div>
          <UsuarioTabela />
        </div>
      }

    componentDidMount() {
      const urlSpring = "/api/usuarios/";
      axios.get(urlSpring).then(
        (retorno) => this.setState ({
            carregar:false,
            produtos:retorno.data })  
        );
    }
}