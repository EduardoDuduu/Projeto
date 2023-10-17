const email = document.getElementById('myEmail').value;

function copyEmail() {  
    navigator.clipboard.writeText(email).then(()=>{
        alert("Copied!");
    });
}