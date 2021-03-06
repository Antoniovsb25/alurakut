import React from 'react'
import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


function ProfileSideBar(props) {
  
  return (
      <Box as="aside">
        <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px'}}/>
        <hr />
        <p>
          <a className="boxLink" href={`https://gitub.com/${props.githubUser}`}>
             @{props.githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '3721983721907381209',
    title: 'Odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  }]);

  const githubUser = 'Antoniovsb25'
  const pessoasFavoritas = [
  'juunegreiros', 
  'omariosouto', 
  'peas', 
  'rafaballerini',
  'marcobrunodev',
  'felipefialho'
  ]
  return (
    <>
    <AlurakutMenu />
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <ProfileSideBar githubUser={githubUser} />
    </div>
      
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
      <Box>
      <h1 className="title">
         Bem vindo(a)
      </h1>

      <OrkutNostalgicIconSet />
      </Box>

      <Box>
        <h2 className="subtitle">O que você deseja fazer?</h2>
        <form onSubmit={function handleCriaComunidade(e) {
          e.preventDefault()
          const dadosDoForm = new FormData(e.target)

          console.log('campo', dadosDoForm.get('title'))
          console.log('campo', dadosDoForm.get('image'))

          const comunidade = {
            id: new Date().toISOString(),
            titulo: dadosDoForm.get('title'),
            image: dadosDoForm.get('image'),
          }

          const comunidadesAtualizadas = [...comunidades, comunidade]

          setComunidades(comunidadesAtualizadas)
         
        }}>
          <div>
            <input 
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
            />
          </div>
          <div>
            <input 
              placeholder="Coloque uma URL para usarmos de capa" 
              name="image" 
              aria-label="Coloque uma URL para usarmos de capa"
            />
          </div>

          <button>
            Criar comunidade
          </button>
        </form>
          
      </Box>
    </div>

    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper>
      <ul>
          {comunidades.map((itemAtual)=>{
           return (
            <li key={ itemAtual.id }>
              <a href={`/users/${itemAtual.title}`}>
                  <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>

      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Pessoas da comunidade ({pessoasFavoritas.length})
        </h2>
        
        <ul>
          {pessoasFavoritas.map((itemAtual)=>{
           return (
            <li key={itemAtual}>
              <a href={`/users/${itemAtual}`}>
                <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
              </a>
            </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>

      <Box>
        Comunidades
      </Box>
    </div>
  </MainGrid>
  </>
  )
}
