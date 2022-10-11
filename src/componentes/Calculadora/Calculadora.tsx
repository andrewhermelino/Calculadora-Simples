import React, { useState } from 'react';
import './Calculadora.css';

import Tela from '../Tela/Tela';
import Teclado from '../Teclado/Teclado';

function Calculadora() {

    const [contador, setContador] = useState(0);

    function atualizarContador(comando: string) {
        if (comando == "mais") {
            setContador(contador+1);
        } else if (comando == "menos") {
            setContador(contador-1);
        }
    }

    return (
        <div className='calculadora'>
            <Tela contador={contador} />
            <Teclado atualizarContador={atualizarContador} />
        </div>
    )
}

export default Calculadora