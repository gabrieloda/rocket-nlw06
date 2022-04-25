export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelbutton = document.querySelector('.button.cancel')
  cancelbutton.addEventListener('click', close)

  function open() {
    console.log('openxxx', modalWrapper)

    //funcionalidade de atribuir a classe active para a modal
    modalWrapper.classList.add('active')
  }
  function close() {
    //funcionalidade de remover a classe active da modal
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
