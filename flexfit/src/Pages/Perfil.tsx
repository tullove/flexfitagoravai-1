import "./Perfil.scss"

export default () => <div id="Perfil" className="main-container">
    <header>
        <button className="voltar"><a href="home"><img src="/img/voltar.png" /></a></button>
        <p className="flex">FLEX</p>
        <p>FIT</p>

    </header>
    <main>
        <div className="user">
            <button className="img"><img src="" /></button>
            <h1>Usuario</h1>
            <h3>Id: 000</h3>
        </div>
        <div className="opcoes">
            <button>DADOS PESSOAIS</button>
            <button>PLANOS & SERVIÇOS</button>
            <button>CARTEIRA</button>
            <button>HISTÓRICO DE PAGAMENTO</button>
            <button>AVALIAÇÃO FÍSICA</button>
        </div>
    </main>
    <footer>
        <button><a href="home"><img src="/img/casa.png" /></a> </button>
            <button><a href="agenda"><img src="/img/agenda.png" /></a></button>
            <button><a href="tabela"><img src="/img/halter.png" /></a></button>
                <button><a href="perfil"><img src="/img/perfil.png" /></a></button>
                </footer>
                </div>