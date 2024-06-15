import Swal from 'sweetalert2'

function checkInternetConnection () {
  if (!navigator.onLine) {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question'
    })
  }
}

window.addEventListener('load', checkInternetConnection)
window.addEventListener('offline', checkInternetConnection)
window.addEventListener('online', () => {
  console.log('Internet connection restored')
})
