import React from 'react'
import PropTypes from 'prop-types'
import InputBotao from '../InputBotao/InputBotao'


class ListaMensagem extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            arrayMensagem: [
                {
                    nome: "",
                    mensagem: ""
                }
            ]
        }
    }

    componenteMensagem = <InputBotao
        
    />
    
    render() {
        return (
            <div>
                <p>{ this.state.nome, this.state.mensagem }</p>

                <InputBotao 
                    
                />
            </div>
        )
    }

}

export default ListaMensagem