import React from 'react'
import Main from '../Template/Main'
import './Produtos.css'

import Eletroportateis from '../../Assets/eletroportateis.png'
import Breville from '../../Assets/breville.png'
import Cafeteira from '../../Assets/cafeteira.png'
import Sorveteira from '../../Assets/sorveteira.jpg'

import Churrasco from '../../Assets/churrasco.png'
import Polywood from '../../Assets/polywood.jpg'
import facaChurrasco from '../../Assets/facaChurrasco.jpg'
import carroChurrasco from '../../Assets/carroChurrasco.jpg'
import talherChurrasco from '../../Assets/talherChurrasco.jpg'

import tramontinaLogo from '../../Assets/tramontina-logo.png'
import Solar from '../../Assets/solar.jpg'
import Monaco from '../../Assets/monaco.png'
import Lyon from '../../Assets/lyon.png'

class Produtos extends React.Component {
    
    

    render(){

        return (
            <Main title="Home">
        <div className="display-4">Produtos</div>
        <p className="mb-0" > Conheça nossos produtos, marcas e linhas especiais!</p>

        <div className="contentProdutos">
            <div className="eletroportateis">
                
                <div className="text">Eletroportáteis </div>
                <div className="marca">
                    <img id="breville" alt="breville" src={Breville} width="300" />
                </div>
                <div className="images">
                    <img alt="Eletroportáteis" width="500" src={Eletroportateis} />
                    <img alt="Cafeteira com moedor" width="300" src={Cafeteira} />
                    <img id="sorveteira" alt="Sorveteira" width="400" src={Sorveteira} />
                </div>
            </div>
        </div>

        <div className="contentProdutos">
            <div className="churrasco">
                <div className="text">Churrasco </div>
                <div className="marca">
                    <img id="polywood" alt="farroupilha" src={Churrasco} width="300" />
                    <img id="polywood" alt="farroupilha" src={Polywood} width="300" />
                </div>
                <div className="images">
                    <img id="facaChurrasco" alt="faca churrasco" width="280" src={facaChurrasco} />
                    <img id="carroChurrasco" alt="carro churrasco" src={carroChurrasco} width="500" />
                    <img id="talherChurrasco" alt="talher de churrasco" src={talherChurrasco} width="350" />
                </div>
                
            </div>
        </div>
        <div className="contentProdutos">
            <div className="panelas">
                <div className="text">Panelas</div>
                <p></p>
                <div className="marca">
                    <img id="logoTramontina" alt="Tramontina" src={tramontinaLogo} width="500" />
                </div>
                <div className="images">
                    <img id="solar" alt="Solar" src={Solar} width="400" />
                    <img id="lyon" alt="Lyon" src={Lyon} width="400" />
                    <img id="monaco" alt="Monaco" src={Monaco} width="450" />
                </div>
                
            </div>
        </div>
        
    </Main>
        )
    }
}

export default Produtos