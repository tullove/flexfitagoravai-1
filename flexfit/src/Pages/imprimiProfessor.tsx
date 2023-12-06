
import { useEffect, useState } from 'react'
import { db } from '../Services/firebaseConnection'
import{
  getDocs, 
  collection,
  query,
  doc,
  getDoc,
} from 'firebase/firestore'

interface professor{ 
  nome: string;
}

export function ImprimiProfessor(){ 
  const [professor, setProfessor] = useState<professor[]>([]);


  useEffect (()=>{
    function carregarProfessor(){ 
      const clienteRef = collection(db, "professor") 
      const queryRef = query(clienteRef) 
    
      getDocs(queryRef)
      .then((snapshot) => {
        let lista = [] as professor[];

        snapshot.forEach((doc) => {
          lista.push({
            nome: doc.data().nome,
          })
        })
        setProfessor(lista);
      })
    }
    carregarProfessor();
  },[])



  return(
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">Clientes</h1>
      <span className="text-white mb-5 mt-3 ">Veja os professores👇</span>
      

      <main className="flex flex-col w-11/12 max-w-xl text-center">
         {professor.map((professor) => (
          <section 
          className=" mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
            <p className="text-base md:text-lg">
              {professor.nome}
            </p>
 
        </section>
        ))}


      </main>

    </div>
  )
}