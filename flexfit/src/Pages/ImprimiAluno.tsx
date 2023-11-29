import { useEffect, useState } from 'react'

import { Social } from '../../components/Social'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

import { db } from '../../services/firebaseConnection'
import{
  getDocs, 
  collection,
  orderBy, 
  query,
  doc,
  getDoc,
} from 'firebase/firestore'
//import { LinkProps } from 'react-router-dom'

interface LinksProps{ /*cliente*/
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

interface socialLinksProp{
  facebook: string;
  youtube: string;
  instagram: string;
}//não precisa


export function Home(){ /*setCliente*/
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<socialLinksProp>() //  são duas tabelas diferentes

  useEffect (()=>{
    function carregarLinks(){ //carregarCliente
      /*clienteRef*/ const linksRef = collection(db, "links") // colocar o nome da tabela que quero pegar info
      const queryRef = query(linksRef) /*clienteRef*/
    
      getDocs(queryRef)
      .then((snapshot) => {
        let lista = [] as LinksProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,

          })
        })
        setLinks(lista);
      })
    }
    carregarLinks();
  },[])



  return(
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">Instituto Federal Catarinense</h1>
      <span className="text-white mb-5 mt-3 ">Veja meus links 👇</span>
      

      <main className="flex flex-col w-11/12 max-w-xl text-center">
     {/*cliente*/}  {links.map((link) => (
          <section 
          style={{background: link.bg}}
          key={link.id}
          className=" mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a href={link.url} target="_blank">
            <p className="text-base md:text-lg" style={{color: link.color}}>
              {link.name}
            </p>
          </a>
        </section>
        ))}


      </main>

    </div>
  )
}