import "./Tabela.scss"

export default () => <div id="Tabela" className="main-container">
    <button className="voltar">
            <a href="/home">
                <img src="/img/voltar.png" />
            </a>
        </button>
    <header>
        <p className="flex">FLEX</p>
        <p>FIT</p>
    </header>
    
    <main>
        <div className="titulo">
            <p className="letradiferente">SUA LISTA DE</p>
            <p>TREINAMENTO</p>
        </div>

        <a href="ficha">
            <div className="container" id="gluteo">treino de <p>GLUTEO</p>
            </div>
        </a>

        <a href="ficha">
            <div className="container" id="costas">
                treino de <p>COSTAS</p>
            </div>
        </a>
        
        <a href="ficha">
            <div className="container" id="quads">
                treino de <p>QUADS</p>
            </div>
        </a>
        <a href="ficha">
            <div className="container" id="peito">
                treino de <p>PEITO</p>
            </div>
        </a>
    </main>

    <footer>

    </footer>

    </div >
