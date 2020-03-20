import React from 'react'
import PropTypes from 'prop-types'

class ListaMensagem extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            arrayMensagem: [
                {nome: "", mensagem: ""}
            ]
        }
    }

}

export default ListaMensagem