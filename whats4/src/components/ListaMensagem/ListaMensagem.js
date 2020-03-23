import React from 'react'
import PropTypes from 'prop-types'

class ListaMensagem extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            arrayMensagem: [
                
            ],

            valorInputNome: "",
            valorInputMensagem: ""
        };
    }
    
    enviaMensagem = () => {
        const novaMensagem = {
            nome: this.state.valorInputNome,
            mensagem: this.state.valorInputMensagem
        }

        const novasMensagens = [
            novaMensagem, ...this.state.arrayMensagem
        ]

        this.setState({
            arrayMensagem: novasMensagens,
            valorInputNome: "",
            valorInputMensagem: ""
        })
    }

    onChangeInputNome = event => {
        this.setState ({ valorInputNome: event.target.value })
    }
    
    onChangeInputMensagem = event => {
        this.setState ({ valorInputMensagem: event.target.value })
    }

    
    render() {
        const containerDasMensagens =
        this.state.arrayMensagem.map(mensagem => {
            return (
                <p>
                    <strong>{mensagem.nome+":"}</strong> {mensagem.mensagem}
                </p>

            )
        })
    
        return (
            <div>
                <div>{ containerDasMensagens }</div>

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
                <button onClick={this.enviaMensagem}>Enviar</button>
            </div>
        )
    }

}

export default ListaMensagem