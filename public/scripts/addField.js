document.querySelector('#add-time').addEventListener('click', cloneField);
let i = 0;

function cloneField(){
    const img = '<div class="delete-button" ><button class="delete-schedule-item" form="schedule-item" onclick="removeField(this)"><img src="/images/icons/delete.svg">Excluir</button></div>'
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    // const body = document.querySelector('body').insertAdjacentHTML("beforeend", '<script src="/scripts/removeField.js"></script>')
    fields.forEach((field)=> {
       field.value = ""
    });

    const lastaddded = document.querySelector('#schedule-items').appendChild(newFieldContainer)
    lastaddded.insertAdjacentHTML("beforeend", img)
    

    // var script = document.createElement('script')
    // script.type = "text/javascript";
    // script.src = "/scripts/removeField.js"
    // document.getElementsByTagName('body')[0].appendChild(script)
    i++;
 
}