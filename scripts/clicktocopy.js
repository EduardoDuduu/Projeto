const email = document.getElementById('myEmail').value;

function copyEmail() {  
    navigator.clipboard.writeText(email).then(()=>{
        console.log("Copy function ok");
    });
}