const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response status is 200 & ready status is 4 means there is no error
            let response = xhr.response; //storing ajax response in a response variable
            //if response is an error like enter valid email address the we'll change status color to red
            if(response.indexOf("Email field is required!") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Email and password field is required")) 
            {
                statusTxt.style.color = "red";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}