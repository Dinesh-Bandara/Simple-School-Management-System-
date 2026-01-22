function regStudent() {
    //take values from inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    fetch('https://student-api.acpt.lk/api/register', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then((res)=>res.json())
    .then((json) => {
        document.getElementById("res").innerHTML = json.message
    })
    .catch((err)=>console.error('error',err))


}



