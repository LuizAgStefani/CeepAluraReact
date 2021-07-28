import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {

    // Para usar propriedades de fora dessa classe é preciso passar o props no constructor
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
        evento.stopPropagation();
    }

    _handleMudancaTexto(evento){
        this.texto = evento.target.value;
        evento.stopPropagation();
    }
    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form 
            className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}//é necessário esse bind na hora de criar um evento
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }

}

export default FormularioCadastro;