import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agenda from "./Pages/Agenda";
import {Cadastro} from "./Pages/CadastroAluno";
import {CadastroProf} from "./Pages/CadastroProf";
import {CadastroTreino} from "./Pages/CadastroExercicio";
import Entrar from "./Pages/Entrar";
import Ficha from "./Pages/Ficha";
import Home from "./Pages/Home";
import HomeAdm from "./Pages/HomeAdm";
import HomeProf from "./Pages/HomeProf";
import Horarios from "./Pages/Horarios";
import Logar from "./Pages/Logar"
import Tabela from "./Pages/Tabela";

export default () => <>

  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/homeAdm" element={<HomeAdm />} />
      <Route path="/homeProf" element={<HomeProf />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastroProf" element={<CadastroProf />} />
      <Route path="/cadastroExercicio" element={<CadastroTreino />} />
      <Route path="/entrar" element={<Entrar />} />
      <Route path="/ficha" element={<Ficha />} />
      <Route path="/horarios" element={<Horarios />} />
      <Route path="/logar" element={<Logar />} />
      <Route path="/tabela" element={<Tabela />} />
    </Routes>
  </Router>
</>