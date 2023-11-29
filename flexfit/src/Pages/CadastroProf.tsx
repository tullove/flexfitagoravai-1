import { FormEvent, useState} from 'react'
import { Input } from "../Input/"
import styles from "./Cadastro.module.css"
import {db} from '../Services/firebaseConnection'
import{
  addDoc, 
  collection,
} from 'firebase/firestore'


export function CadastroProf(){
  const [nomeInput, setNomeInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [academiaInput, setAcademiaInput] = useState("")
  const [sexoInput, setSexoInput] = useState("")
  const [dataNascimentoInput, setDataNascimentoInput] = useState("")
  const [telefoneInput, setTelefoneInput] = useState("")
  const [cpfInput, setCpfInput] = useState("")
  const [senhaInput, setSenhaInput] = useState("")
 




  function registro(e: FormEvent){
    e.preventDefault();
    if(nomeInput === " " || emailInput === " " ||academiaInput === " " || senhaInput === " " || cpfInput === " " || sexoInput === " " || dataNascimentoInput === " " || telefoneInput === " " ){
      alert("Preencha todos os campos")
      return
    }

    addDoc(collection(db,"professor"),{
      nome:nomeInput,
      email: emailInput,
      academia: academiaInput,
      sexo: sexoInput,
      dataNasc: dataNascimentoInput,
      telefone: telefoneInput,
      cpf: cpfInput,
      senha: senhaInput,
      created: new Date()

    })
    .then(()=>{
      setNomeInput("")
      setEmailInput("")
      setAcademiaInput("")
      setSexoInput("")
      setDataNascimentoInput("")
      setTelefoneInput("")
      setCpfInput("")
      setSenhaInput("")
      console.log("CADASTRADO COM SUCESSO")

    })
    .catch((error)=>{
      console.log("ERRO AO CADASTRAR NO BANCO"+error)
    })
  }

  return(
    <div className={styles.body}>
      <header className={styles.header}>
       <p className={styles.flex}>FLEX</p><p className={styles.fit}>FIT</p>
    </header>

      <form className={styles.form} onSubmit={registro}>
        <Input className={styles.formInput}
           placeholder="Nome:"
           value={nomeInput}
          onChange={ (e) => setNomeInput(e.target.value) }
        />

         <Input className={styles.formInput}
           placeholder="Email:"
           value={emailInput}
           onChange={ (e) => setEmailInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Academia:"
           value={academiaInput}
          onChange={ (e) => setAcademiaInput(e.target.value) }
        />
         <Input className={styles.formInput}
           placeholder="Sexo:"
           value={sexoInput}
          onChange={ (e) => setSexoInput(e.target.value) }
        />
                <Input className={styles.formInput}
           placeholder="Data de Nascimento:"
           value={dataNascimentoInput}
          onChange={ (e) => setDataNascimentoInput(e.target.value) }
        />
         <Input className={styles.formInput}
           placeholder="Telefone:"
           value={telefoneInput}
          onChange={ (e) => setTelefoneInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Cpf:"
           value={cpfInput}
          onChange={ (e) => setCpfInput(e.target.value) }
        />
                <Input className={styles.formInput}
           placeholder="Senha:"
           value={senhaInput}
          onChange={ (e) => setSenhaInput(e.target.value) }
        />

        <button type='submit' className='button'>CADASTRAR</button>
       

      </form>
      <footer>
    </footer>

    
    </div>
  )
}