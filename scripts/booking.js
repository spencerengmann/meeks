const form = document.getElementById('booking-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    fetch('http://localhost:3000/email',{
        method:'POST',
        headers:{
        'Content-Type': 'application/json'},
        body:JSON.stringify({
            name:form.name.value,
            email:form.email.value,
            phone:form.phone.value,
            
            date:form.date.value,
            
        })
        
     })
     .then(res => res.json())
     .then(data =>console.log(data))
});