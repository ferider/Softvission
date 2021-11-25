//HAMBURGER-BTN
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".list-tec").classList.toggle("show");
});

//FORM-CONTACT
const $form = document.querySelector('#soft-tec');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new Formdata(this);
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }             
    })
    if(response.ok){
        this.reset();
        alert('Mensaje enviado, le responderemos a la brevedad')
    }   
}


