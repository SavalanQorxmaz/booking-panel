const staffData =  [
    {
    id: 1,
    name: "Alex Rosetta",
    email: "alexyrosetta@egmail.com",
    image: "staff-1.png",
    },
    {
    id: 2,
    name: "Maria July",
    email: "mariajuly@egmail.com",
    image: "staff-2.png",
    }
    
    ];

    const servicesData = [
        {
        id: 1,
        name: "Oral hygiene",
        image: "service-1.jpg",
        duration: "1 hour",
        price: 50.00,
        },
        {
        id: 2,
        name: "Implants",
        image: "service-2.jpg",
        duration: "1 hour 30 minutes",
        price: 120.00,
        }
        
        ]

        const timeData = [{
            start_time: "09:00",
            end_time: "09:30"
            },
            {
            start_time: "09:30",
            end_time: "10:00"
            }
            
            ];
const header = document.getElementById('header')
const sidebar = document.getElementById('sidebar')
const staffSection = document.getElementById('staff')
const servicesSection = document.getElementById('services')
const dateTimeSection = document.getElementById('date-time')
const confirmationSection = document.getElementById('confirmation')
const dateSection = document.getElementById('date')
const timeSection = document.getElementById('time')
const backButton = document.getElementById('back')
const nextButton = document.getElementById('next')
const confirmButton = document.getElementById('confirm')
const alertMessage = document.getElementById('alert')
const popup = document.getElementById('popup')



const sections = [staffSection, servicesSection, dateTimeSection, confirmationSection]

// Baslangic veziyyet
sections.forEach((value, index)=>{
    //  value.style.display = 'none'
    if(value.classList.contains('active') === false){
        value.style.display= 'none'
    }
    if(value.classList.contains('first') && value.classList.contains('active')){
        backButton.style.display = 'none'
    }

    if(value.classList.contains('active') && value.classList.contains('last')){
        nextButton.style.display = 'none'
        nextButton.style.display = 'block'
    }

  header.innerHTML =  'Staff'

    
})

const confirmationData = {
    
    staff_id: 0,
    service_id: 0,
    date: '',
    time: '',
    customer: {
    name: '',
    surname: '',
    email: '',
    phone: ''
    }
    
    
    }

// yalniz active classinin gorunen olmasi ucun

document.addEventListener('click',(e)=>{
// e.preventDefault()
    sections.forEach(value=>{
        value.style.display = 'none'
    })

    sections[sections.findIndex(value=>value.classList.contains('active') )].style.display = 'block'

    header.innerHTML = sidebar.children[0].children[sections.findIndex(value=>value.classList.contains('active') )].children[1].innerHTML

    if(confirmationSection.classList.contains('active')){
        nextButton.style.display = 'none'
    }
    else{
        nextButton.style.display = 'block'
    }

    if(staffSection.classList.contains('active')){
        backButton.style.display = 'none'
    }
    else{
        backButton.style.display = 'block'
    }

    if(confirmationSection.classList.contains('active')){
        confirmButton.style.display = 'block'
    }
    else {
        confirmButton.style.display = 'none'
    }

    sections.forEach((value, index)=>{


        if(value.classList.contains('ready') && !value.classList.contains('active') ){
            sidebar.children[0].children[index].children[0].innerHTML = `&#9745;`
            sidebar.children[0].children[index].children[0].style.backgroundColor = '#6C70DC'
            sidebar.children[0].children[index].children[1].style.color = 'white'
        }
       else if (value.classList.contains('active') && !value.classList.contains('ready')){
            sidebar.children[0].children[index].children[0].innerHTML = index
            sidebar.children[0].children[index].children[0].style.backgroundColor = '#53D56C'
            sidebar.children[0].children[index].children[1].style.color = '#53D56C'
        }

       else if(value.classList.contains('ready') && value.classList.contains('active')){
            sidebar.children[0].children[index].children[0].innerHTML = `&#9745;`
            sidebar.children[0].children[index].children[0].style.backgroundColor = '#53D56C'
            sidebar.children[0].children[index].children[1].style.color = '#53D56C'
        }
        else{
            sidebar.children[0].children[index].children[0].innerHTML = index
            sidebar.children[0].children[index].children[0].style.backgroundColor = '#4D545A'
            sidebar.children[0].children[index].children[1].style.color = '#4D545A'
        }
    })

    document.querySelector('#selected-data').children[0].innerHTML = staffData.find((val)=>{
        return val.id == confirmationData.staff_id
    })?.name
    document.querySelector('#selected-data').children[1].innerHTML = servicesData.find((val)=>{
        return val.id == confirmationData.service_id
    })?.name

    document.querySelector('#selected-data').children[2].innerHTML = confirmationData.date + ' / '+ confirmationData.time
    document.querySelector('#selected-data').children[3].  innerHTML = 'Total: '+ servicesData.find((val)=>{
        return val.id == confirmationData.service_id
    })?.price + ' $'
})










staffData.forEach((value)=>{
     const item = document.createElement('div')
    item.id = `staff-${value.id}`
    item.style.width = '100%'
    item.style.border = '4px solid black'
    item.style.marginBottom = '10px'
    item.style.padding = '5px'
    item.style.display = 'flex'
    item.style.alignItems = 'center'
    item.style.cursor = 'pointer'
    staffSection.appendChild(item)

    const staffPicture = document.createElement('div')
    staffPicture.style.width = '50px';
    staffPicture.style.height = '50px';
    staffPicture.style.marginRight = '10px'
    staffPicture.style.borderRadius = '50%';
    staffPicture.style.backgroundColor = 'gray';
    item.appendChild(staffPicture)

    const staffInfo = document.createElement('div')
    item.appendChild(staffInfo)

    const staffNameSurname = document.createElement('p')
    staffNameSurname.innerHTML = `${value.name}`
    staffInfo.appendChild(staffNameSurname)

    const staffEmail = document.createElement('p')
    staffEmail.innerHTML = `${value.email}`

    staffInfo.appendChild(staffEmail)




   item.onclick = (e)=>{
   if(confirmationData.staff_id !==0 && confirmationData.staff_id !== e.currentTarget.id.split('-')[1]){

        sections[1].classList.remove('ready')
        sections[1].classList.add('default')
        Array.from(sections[1].children).forEach((value)=>{
            value.style.border = '4px solid black'
        })
        sections[2].classList.remove('ready')
        sections[2].classList.add('default')
        Array.from(sections[2].children[1].children).forEach((value)=>{
            value.style.border = '4px solid black'
            
        })
        sections[2].children[0].value = ''
        confirmationData.date = ''
        confirmationData.time = ''
        sections[3].classList.remove('ready')
        sections[3].classList.add('default')
        Array.from(sections[3].children).forEach((value)=>{
            
            value.children[1].value = ''
         })
         confirmationData.customer = {}
    
    document.getElementById(`staff-${confirmationData.staff_id}`).style.border = '4px solid black'
   }
    e.currentTarget.style.border = '4px solid green'
    confirmationData.staff_id = e.currentTarget.id.split('-')[1]
    staffSection.classList.add('ready')


   }

})

servicesData.forEach((value)=>{
    const item = document.createElement('div')
   
   item.id = `service-${value.id}`
   item.style.width = '100%'
    item.style.border = '4px solid black'
    item.style.marginBottom = '10px'
    item.style.padding = '5px'
    item.style.display = 'flex'
    item.style.alignItems = 'center'
    item.style.cursor = 'pointer'
   servicesSection.appendChild(item)

   const servicePicture = document.createElement('div')
   servicePicture.style.width = '50px';
   servicePicture.style.height = '50px';
   servicePicture.style.marginRight = '10px'
   servicePicture.style.borderRadius = '50%';
   servicePicture.style.backgroundColor = 'gray';
   item.appendChild(servicePicture)

   const serviceInfo = document.createElement('div')
    item.appendChild(serviceInfo)

   const serviceName = document.createElement('p')
   serviceName.innerHTML = `${value.name}`
   serviceInfo.appendChild(serviceName)

    const serviceDuration = document.createElement('p')
    serviceDuration.innerHTML = `${value.duration}`

    serviceInfo.appendChild(serviceDuration)

  item.onclick = (e)=>{
  if(confirmationData.service_id !==0 && confirmationData.service_id !== e.currentTarget.id.split('-')[1]){

        sections[2].classList.remove('ready')
        sections[2].classList.add('default')
        Array.from(sections[2].children[1].children).forEach((value)=>{
            value.style.border = '4px solid black'
        })
        sections[2].children[0].value = ''
        confirmationData.date = ''
        confirmationData.time = ''
        
        sections[3].classList.remove('ready')
        sections[3].classList.add('default')
        Array.from(sections[3].children).forEach((value)=>{
            
           value.children[1].value = ''
        })
        
        confirmationData.customer = {}
    
   document.getElementById(`service-${confirmationData.service_id}`).style.border = '4px solid black'
  }
   e.currentTarget.style.border = '4px solid green'
   confirmationData.service_id = e.currentTarget.id.split('-')[1]
servicesSection.classList.add('ready')

  }

})

dateSection.onchange = (e)=>{
    if(confirmationData.date !== '' && confirmationData.date !== e.target.value){

        sections[3].classList.remove('ready')
        sections[3].classList.add('default')
        Array.from(sections[3].children).forEach((value)=>{
            
            value.children[1].value = ''
         })
         confirmationData.customer = {}
    }
    confirmationData.date = e.currentTarget.value

    if(confirmationData.time !== ''){
        
    dateTimeSection.classList.add('ready')
    }
}

timeData.forEach((value)=>{
    const item = document.createElement('span')
   item.innerHTML = value.start_time + '  ' + value.end_time 
   item.id = `time-${value.id}`
   item.style.width = '100%'
    item.style.border = '4px solid black'
    item.style.marginTop = '10px'
    item.style.padding = '5px'
    item.style.display = 'flex'
    item.style.alignItems = 'center'
    item.style.cursor = 'pointer'
   timeSection.appendChild(item)


   item.onclick = (e)=>{
   if(confirmationData.time !=='' && confirmationData.time !== e.target.innerText){
    
        sections[3].classList.remove('ready')
        sections[3].classList.add('default')
        Array.from(sections[3].children).forEach((value)=>{
            
            value.children[1].value = ''
         })
         confirmationData.customer = {}
   for(let i of timeSection.children){
    i.style.border = '4px solid black'
   }
  }
   e.currentTarget.style.border = '4px solid green'
   confirmationData.time = e.target.innerText

   if(confirmationData.date !== ''){
    dateTimeSection.classList.add('ready')
   }

  }

})


nextButton.onclick = (e)=>{

    e.preventDefault()
    
  
   let index = sections.findIndex((value)=>{
    return (value.classList.contains('active'))
   })

   if(sections[index].classList.contains('ready')){
    alertMessage.style.display = 'none';
    sections[index].classList.remove('active')
    sections[index+1].classList.add('active')
   }
   else{
    alertMessage.style.display = 'block';
    alertMessage.innerHTML = 'All section required!'
   }

  

}

backButton.onclick = (e)=>{

    e.preventDefault()
    let index = sections.findIndex((value)=>{
        return (value.classList.contains('active'))
       })
       sections[index].classList.remove('active')
       sections[index-1].classList.add('active')
}


confirmButton.onclick = (e)=>{
e.preventDefault()
if(Array.from(confirmationSection.children).every((val)=>{
    return val.children[1].value !== ''
    })){
        Array.from(confirmationSection.children).forEach((val)=>{
   
            confirmationData.customer = {...confirmationData.customer,[val.children[1].id.split('-')[1]]: val.children[1].value}

        })
popup.style.display = 'flex'
console.log(confirmationData)
    }
    else{
        alertMessage.style.display = 'block';
    alertMessage.innerHTML = 'All section required!'
    }


}



popup.children[0].children[0].onclick = ()=>{
    popup.style.display = 'none'
    window.location.reload()
}