let $ = (value) => {return document.querySelector(value) }


let email, clave, recipient, body



document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    email = $('.email')
    clave = $('.clave')
    recipient = $('.recep')
    body = $('.body')

    const obj = {
        "email":email.value,
        "recipient":recipient.value,
        "clave":clave.value,
        "body":body.value
    }
    
    fetch('https://emailsent-api.vercel.app/sent',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(obj)
    })
    .then(res => res)
    .then(data => {
        email.value = ""
        clave.value = ""
        recipient.value = ""
        body.value = ""
        console.log(data)

    })
    .catch(err =>  {
        email.value = ""
        clave.value = ""
        recipient.value = ""
        body.value = ""
        console.error(err)
    })



    console.log(email, clave, recipient,body);
    
})