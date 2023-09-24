import './Header.css'
import museu from "../Images/museu-de-zoologia.jpg"

function Header() {
    return (
        <header>
            <div class="esquerda">
                <img src={museu}></img>
            </div>
            <div class="direita">
                <p>Sobre nós</p>
                <p>Avaliações</p>
                <p>Reservar</p>
                <p>Mapa</p>
            </div>
        </header>
    )
}

export default Header;