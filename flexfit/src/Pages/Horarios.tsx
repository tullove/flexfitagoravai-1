import "./Horarios.scss"

export default () => <div id="Horarios">
<header>
        <button className="voltar"><a href="/horario"><img src="/img/voltar.png" /></a></button>
        <p className="flex">FLEX</p>
        <p>FIT</p>
    </header>
    <main>
        <div className="branco">
            <div className="container" id="muaythai">AULA DE <p className="maiusculo">CROSSFIT</p>
            </div>
            <div className="diadasemana">
                <div className="bolinha">S</div>
                <div className="bolinha">T</div>
                <div className="bolinha">Q</div>
                <div className="bolinha">Q</div>
                <div className="bolinha">S</div>
                <div className="bolinha">S</div>
                <div className="bolinha">D</div>
            </div>

            <div className="horario">
                <div className="textohorario">
                    <h1>HORARIOS:</h1>
                    <h2>09:00 - 10:00 </h2>
                </div>
                <div className="quantAlunos">
                    <div className="imagemEtexto">
                        <img src="/img/pessoas (2) 1.png" />
                        <h1>7/10</h1>
                    </div>
                    <button className="botao">AGENDAR</button>
                </div>

            </div>
        </div>

    </main>

</div>