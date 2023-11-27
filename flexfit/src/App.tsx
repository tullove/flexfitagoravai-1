import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agenda from "./Pages/Agenda";
import Cadastro from "./Pages/Cadastro";
import Entrar from "./Pages/Entrar";
import Ficha from "./Pages/Ficha";
import Home from "./Pages/Home";
import Horarios from "./Pages/Horarios";
import Logar from "./Pages/Logar";
import Perfil from "./Pages/Perfil";
import Tabela from "./Pages/Tabela";

export default () => <>

  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/entrar" element={<Entrar />} />
      <Route path="/ficha" element={<Ficha />} />
      <Route path="/horarios" element={<Horarios />} />
      <Route path="/logar" element={<Logar />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/tabela" element={<Tabela />} />
    </Routes>
  </Router>
</>