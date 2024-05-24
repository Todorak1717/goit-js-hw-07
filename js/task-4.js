const form = document.querySelector('.login-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const emailName = form.elements.email.value.trim();
    const passwordName = form.elements.password.value.trim();
  
if(emailName === '' || passwordName === ''){
    return alert('All form fields must be filled in');
   }
   const data = {emailName , passwordName};

console.log(data);
form.reset()
}
)
