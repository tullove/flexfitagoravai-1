import "./Logar.scss"

export default () => <div id="Logar" className="main-container">
    <header>
        <p className="flex">FLEX</p>
        <p>FIT</p>
    </header>
    <main>
        <form>
            <input placeholder="Nome:"></input>
            <input placeholder="Email:"></input>
            <input placeholder="Academia:"></input>
            <input placeholder="Senha:"></input>
        </form>
    </main>
    <footer>
        <button>ENTRAR</button>
        <p className="text">Não possui login? <a href="../Cadastrar/cadastro.html" className="cadastrese">Cadastre-se</a></p>
    </footer>
</div>