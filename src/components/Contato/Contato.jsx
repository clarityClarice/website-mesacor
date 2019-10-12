import React from 'react'
import Main from '../Template/Main'
import './Contato.css'
import frenteLoja from '../../Assets/frenteLoja.jpg'

export default props =>
    <Main title="Home">
        <div className="display-4">Contato</div>
        <div className="contatoContent">
            <div className="column1">
                <p className="mb-0">Avenida Brasil, 2431, sala 1</p>
                <p className="mb-0">Balneário Camboriú - SC</p>
                <p/>
                <p className="mb-0"> <i class="fa fa-phone"></i><b>Telefone</b> (47)3361-6857</p>
                <p />
                <p className="mb-0"> <i class="fa fa-at"></i><b>Email</b> mesacor@mesacor.com.br</p>
                <p />
                <p className="mb-0"> <i class="fa fa-whatsapp"></i><b>Whatsapp</b> (47)99694-5000</p>
                <p />
                <p className="mb-0"> <i class="fa fa-instagram"></i><b>Instagram</b> <a target="_blank" href="http://instagram.com/mesacortramontina"> @mesacortramontina</a></p>
                <p />
                <p className="mb-0"> <i class="fa fa-facebook-square"></i><b>Facebook</b> <a target="_blank" href="https://www.facebook.com/mesacortramontina/"> @mesacortramontina</a></p>
            </div>
            
            <div className="column2">
                <img src={frenteLoja} alt="frente loja"/>
            </div>
            
            
        </div>
    </Main>