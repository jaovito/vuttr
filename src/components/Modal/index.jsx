import React from 'react';

//importando os componentes com estilos do styled.
import { Container, Form, Content } from './styles';

//componente modal com uso de props
function Modal(props) {
  return (
    <Container aria-label='modal'>
      <Content>
        <div>
          <h1>+ Add new tool</h1>
          <button onClick={props.modalClose}>X</button>
        </div>
        
        <Form onSubmit={props.submit}>
          <fieldset className='fieldName'>
            <label htmlFor='name'>Tool Name</label>
            <input type="text" id='name' name='name' required value={props.nameValue} onChange={props.changeName}/>
          </fieldset>

          <fieldset className='fieldLink'>
            <label htmlFor='link'>Tool Link</label>
            <input type="url" id='link' name='link' required value={props.linkValue} onChange={props.changeLink}/>
          </fieldset>

          <fieldset className='fieldDescription'>
            <label htmlFor='description'>Tool description</label>
            <textarea name="description" id="description" required cols="30" rows="10" value={props.descriptionValue} onChange={props.changeDescription} ></textarea>
          </fieldset>

          <fieldset className='fieldTags'>
            <label htmlFor='tags'>Tags</label>
            <input type="text" id='tags' name='tags' required value={props.tagsValue} onChange={props.changeTags} />
          </fieldset>

          <button aria-label='btn-modal' type='submit'>Add tool</button>
        </Form>
      </Content>
    </Container>
  );
}

export default Modal;