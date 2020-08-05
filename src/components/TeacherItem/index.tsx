import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGZ-cxp0NktUw/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=SLOEGjThjJxvIayk9_ljLK_Nf41D3OUYhrulXIxgnxM" alt="Willians Tavares" />
                <div>
                    <strong>Willians Tavares</strong>
                    <span>Filosofia</span>
                </div>
            </header>
            <p>
                Entusiasta dos melhores pensamentos do século XXI.
                        <br /><br />
                        Apaixonado por explodir cabeças com pensamentos.
                        <footer>
                    <p>Preços/hora
                            <strong>R$80,00</strong>
                    </p>
                    <button type="button"><img src={whatsappIcon} alt="Whatsapp" />Entrar em Contato</button>
                </footer>
            </p>
        </article>
    );
}

export default TeacherItem;