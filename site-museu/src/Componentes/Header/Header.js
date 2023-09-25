import './Header.css'
import museu from "../Images/museu-de-zoologia.jpg"

function Header() {
    return (
        <header>
            <div class="esquerda, header">
                <img src={museu}></img>
            </div>
            <div class="direita, header">
                <a href="#sobre-nos">
                    <p class="menu">Sobre nós</p>
                </a>
                <a href="#avaliacoes">
                    <p class="menu">Avaliações</p>
                </a>
                <a href="#reservar">
                    <p class="menu">Reservar</p>
                </a>
                <a href="#mapa">
                    <p class="menu">Mapa</p>
                </a>
            </div>
        </header>
    )
}

export default Header;