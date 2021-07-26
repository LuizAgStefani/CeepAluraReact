import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css"

class ListaDeNotas extends Component {

    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Trabalho", "Trabalho", "Estudos", "Jogos").map((categorias, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota />
                        </li>
                    );
                })

                }

            </ul>
        );
    }
}

export default ListaDeNotas;