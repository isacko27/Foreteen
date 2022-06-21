const openModal = document.querySelector('.empresasButton')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.back')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

modal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show')
})