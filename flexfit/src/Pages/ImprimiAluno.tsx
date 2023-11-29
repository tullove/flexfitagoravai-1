import { useEffect, useState } from 'react'
import { db } from '../Services/firebaseConnection'
import{
  getDocs, 
  collection,
  query,
  doc,
  getDoc,
} from 'firebase/firestore'

interface cliente{ 
  nome: string;
  objetivo: string;
  obsercacao: string;
}

export function ImprimiAluno(){ 
  const [cliente, setCliente] = useState<cliente[]>([]);


  useEffect (()=>{
    function carregarCliente(){ 
      const clienteRef = collection(db, "dados") 
      const queryRef = query(clienteRef) 
    
      getDocs(queryRef)
      .then((snapshot) => {
        let lista = [] as cliente[];

        snapshot.forEach((doc) => {
          lista.push({
            nome: doc.data().nome,
            objetivo: doc.data().objetivo,
            obsercacao: doc.data().obsercacao,
          })
        })
        setCliente(lista);
      })
    }
    carregarCliente();
  },[])



  return(
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">Clientes</h1>
      <span className="text-white mb-5 mt-3 ">Veja os clientes👇</span>
      

      <main className="flex flex-col w-11/12 max-w-xl text-center">
         {cliente.map((cliente) => (
          <section 
          className=" mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
            <p className="text-base md:text-lg">
              {cliente.nome}
            </p>
 
        </section>
        ))}


      </main>

    </div>
  )
}