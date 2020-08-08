document.querySelector('#add-time').addEventListener('click', cloneField);

// document.querySelector('#add-time').addEventListener('click', addDeleteButton);

function cloneField(){
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   const fields = newFieldContainer.querySelectorAll('input')


   fields.forEach((field)=> {
       field.value = ""
   });

   document.querySelector('#schedule-items').appendChild(newFieldContainer)


}



// function addDeleteButton(){
//     var button = document.createElement('button')
//     button.classList.add('delete-schedule-item')
//     button.innerText('teste button')
//     console.log('button',button)
//     var img = document.createElement('img')
//     img.src = '/images/icons/delete.svg'
//     console.log('img',img)
//     const schedule = document.querySelector('.schedule-item+.schedule-item')
//     console.log('schedule',schedule)
//     schedule.appendChild(button)
//     const buttonDocument = document.querySelectorAll('.delete-schedule-item')
//     console.log('buttonDocument',buttonDocument)
//     // buttonDocument.appendChild(img)

// }