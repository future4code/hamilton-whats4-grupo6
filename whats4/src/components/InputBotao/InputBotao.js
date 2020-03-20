import React from 'react'
import PropTypes from 'prop-types'

class InputBotao extends React.Component {
    constructor(props) {
        super(props)

        this.state = {  
            valorInputNome: "",
            valorInputMensagem: ""
        }
    }

    render () {
        return (
            <div className={'app-container'}>
            <input 
            value={this.state.valorInputNome} 
            onChange={this.onChangeInputNome}
            placeholder="Nome"
            />
            <input 
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder="Digite sua mensagem"
            />
            <button onClick={this.enviarMensagem}>Enviar</button>
          </div>
        )
    }
}

export default InputBotao