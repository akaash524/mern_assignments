function validate(){
    let name=document.getElementById("fname").value.trim();
    let email=document.getElementById("mail_id").value.trim();
    let age=document.getElementById("age").value.trim();
    let pno=document.getElementById("phno").value.trim();
    let pass=document.getElementById("pass").value;
    let cpass=document.getElementById("cpass").value;
    let err_msg=document.getElementById("error_msg");
    if(!(/^[A-Za-z ]+$/.test(name))){
        err_msg.textContent='Please Enter Valid Name.'
        return false;
    }

    else if(!(/^\S+@\S+\.\S+$/.test(email))){
        err_msg.textContent='Please Enter valid mail id';
        return false;
    }
    else if(parseInt(age)<16||parseInt(age)===null){
        err_msg.textContent='Not a valid Age';
        return false;
    }
    else if(!/^[0-9]{10}$/.test(pno)){
        err_msg.textContent='Enter a valid mobile number';
        return false;
    }
    else if(!/^[a-zA-Z0-9._%@#$]{8,}$/.test(pass)){
        err_msg.textContent='Password must contain 8 characters.';
        return false;
    }
    else if(pass!==cpass){
        err_msg.textContent='password and confirm password are not same.';
        return false;
    }
    err_msg.textContent='';
    return true;
}