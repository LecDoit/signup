let pwd = document.getElementById('pwd')
let cpwd = document.getElementById('cpwd')
let verinfo = document.getElementById('verinfo')

const btn = document.querySelector('button');


btn.addEventListener('click',function(){

    if (pwd.value == cpwd.value){
        console.log("nice")
        verinfo.innerHTML="Password is correct ;)"
        pwd.style.borderColor = "#596d48"
        cpwd.style.borderColor = "#596d48"
    }else{
        verinfo.innerHTML="*Password does not match"
        pwd.style.borderColor = "#ff0000"
        cpwd.style.borderColor = "#ff0000"
    }
})