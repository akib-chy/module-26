document.getElementById('submit-button').addEventListener('click', function(){
    const emailFeild = document.getElementById('email-inpit');
    const userEmail = emailFeild.value;
    const passwordFeild = document.getElementById('passeord-input');
    const userPassword = passwordFeild.value;
    if(userEmail == 'akib@gmail.com' && userPassword == 'akibchy'){
        window.location.href = 'bank.html'
    } 
    else{
        console.log('Envalid Password');
    }
})