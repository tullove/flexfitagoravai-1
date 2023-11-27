import "./Cadastro.scss"

export default () => <div id="Cadastro" className="main-container">
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
            <input placeholder="Repetir senha:"></input>
        </form>
    </main>
    <footer>
        <button>ENTRAR</button>
        <p className="text">Possui login? <a href="/login" className="cadastrese">Fazer login</a></p>
    </footer>
</div>