import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Modal from './components/Modal'

//testa se o modal está sendo mostrado no documento.
test('should add modal in document', () => {
  const {getByLabelText} = render(<Modal />)

  const modalElement = getByLabelText('modal')
  expect(modalElement)
});

//testa se o titulo do modal está sendo mostrado
test('should add modal title in document', () => {
  const { getByText } = render(<Modal />);
  const linkElement = getByText('+ Add new tool');
  expect(linkElement).toBeInTheDocument();
});

//testa se o botão do modal está com o type submit conforme esperado
test('modal button must be submit', () => {
  const {getByLabelText} = render(<Modal />)
  const btnModal = getByLabelText('btn-modal')

  expect(btnModal).toHaveAttribute('type', 'submit')
});

//testa se o componente App está sendo renderizado
test('App is visible?', () => {
  const appRender = render(<App />)

  expect(appRender)
});