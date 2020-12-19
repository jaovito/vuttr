import React, {useState, useEffect, useCallback} from 'react';
import api from '../../services/api'

//importando os componentes do styled e após o form
import { Container, Header, Content, Card } from './styles';
import SearchContainer from '../../components/SearchGroup'
import Modal from '../../components/Modal'

function Home() {
  //setando os estados da aplicação.
  const [inputValue, setInputValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [nameValue, setNameValue] = useState('')
  const [linkValue, setLinkValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [tagValue, setTagValue] = useState([])
  const [materials, setMaterials] = useState([])

  const [visibleModal, setVisibleModal] = useState(false)

  const loadMaterial = useCallback(
    async () => {
        //aqui verifico se a caixa de tags only está ativada, se sim a busca funcionará apenar por tags.
    
        if (checkboxValue === true) {
          const response = await api.get('tools', {
            params: {
              tags_like: inputValue
            }
          })
    
          setMaterials(response.data)
        } 
        if (checkboxValue === false) {
          const response = await api.get('tools', {
            params: {
              q: inputValue
            }
          })
    
          setMaterials(response.data)
        }
    }, [checkboxValue, inputValue]) 

  useEffect(() => {
    (async () => {
      await loadMaterial()
    })()
  }, [loadMaterial])
  

  //função que mostra ou esconde o modal
  function handleModal(e) {
    e.preventDefault()

    setVisibleModal(!visibleModal)
  }

 async function handleSubmit(e) {
  e.preventDefault()

  const space = ' '

  //transformo a string em array separando por espaços em branco e colocando um "#" antes da palavra.
  let tagsplit = tagValue.replaceAll(' ', ' #')
  var tags = tagsplit.split(space)

   await api.post('tools', {
      title: nameValue,
      link: linkValue,
      description: descriptionValue,
      tags
    })

    setVisibleModal(false)
    loadMaterial()
  }

  return (
    <Container>

        <Header>
            <h1>VUTTR</h1>
            <h2>Very Useful Tools to Remember</h2>
        </Header>

        <Content>

            {/* aqui é o componente responsável pelo search */}
            <SearchContainer 
              placeholder='search' 
              label='search in tags only'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onclick={handleModal}
              checkboxValue={checkboxValue}
              onchangeBox={() => setCheckboxValue(!checkboxValue)}
            />

            {/* Listando todos os cards e tools do backend */}
            {materials.map(material => (
              <Card key={material.id}>
                <div className="card-header">
                  <h1><a href={material.link} rel='noopener noreferrer' target="_blank">{material.title}</a></h1>
                  <button onClick={() => {
                    api.delete(`tools/${material.id}`)
                    loadMaterial()
                  }}>X Remove</button>
                </div>
                <p>{material.description}</p>
                <p><strong>{'#' + material.tags}</strong></p>
              </Card>
            ))}

        </Content>

        {/* Basicamente se o visibleModal é verdadeiro irá mostrar o modal de acordo com o código abaixo. */}
        {!!visibleModal ? 
        <Modal 
          submit={handleSubmit}
          nameValue={nameValue}
          linkValue={linkValue}
          descriptionValue={descriptionValue}
          tagsValue={tagValue}
          changeName={e => setNameValue(e.target.value)}
          changeLink={e => setLinkValue(e.target.value)}
          changeDescription={e => setDescriptionValue(e.target.value)}
          changeTags={e => setTagValue(e.target.value)}
          modalClose={handleModal}
        /> 
        : null}
    </Container>
  );
}

export default Home;