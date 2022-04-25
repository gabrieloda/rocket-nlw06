import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botoes que existe com a class check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', handleClick)
  modalTitle.innerHTML = 'Marcar como lida'
})

/*quando o botao delete ele abre a moda*/

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  modalTitle.innerHTML = check ? 'Marcar como lido' : 'Excluir essa pergunta'

  console.log('aqui....', modalTitle.innerHTML)
  //abrir modal
  modal.open()
}

//pegar quando o marcar como lido for clicado
