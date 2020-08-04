import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/54906981?s=460&u=d1f00945d8cf39f90e79f89a4bf17868b14cdc1f&v=4" alt="avatar"/>
                <div>
                    <strong>Rafaela Oliveira</strong>
                    <span>Biologia</span>
                </div>
            </header>
            <p>
                Aulas didáticas e objetivas
                <br />
                <br />
                Entenda o ciclo de Krebs em cinco minutos ou tenha seu dinheiro de volta.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 180,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;