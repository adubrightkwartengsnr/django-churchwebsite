$(document).ready(function(){
    $("#signup").hide();
});
    

    $("#username").keyup(function (e) { 
        if(validateUsername()){
            $("#username").css("border","2px green solid");
            showBtn();
        }else{
            $("#username").css("border","2px red solid");
        }
    });
    $("#email").keyup(function (e) { 
        if(validateEmail()){
            $("#email").css("border","2px green solid");
            showBtn();
        }else{
            $("#email").css("border","2px red solid");
        }
    });
    $("#firstname").keyup(function (e) { 
        if(validateFirstname()){
            $("#firstname").css("border","2px green solid");
            showBtn();
        }else{
            $("#firstname").css("border","2px red solid");
        }
    });
    $("#lastname").keyup(function (e) { 
        if(validateLastname()){
            $("#lastname").css("border","2px green solid");
            showBtn();
        }else{
            $("#lastname").css("border","2px red solid");
        }
    });
    $("#password").keyup(function (e) { 
        if(validatePassword()){
            $("#password").css("border","2px green solid");
            showBtn();
        }else{
            $("#password").css("border","2px red solid");
        }
    });
    $("#confirmpassword").keyup(function (e) { 
        if(validatePassword()){
            $("#confirmpassword").css("border","2px green solid");
            showBtn();
        }else{
            $("#confirmpassword").css("border","2px red solid");
        }
    });
    function validateUsername(){
        var username =  $("#username").val();
        if(username.length < 4 || username.length > 20){
            return false;
        }else{
            return true;
        }
    }
    function validatePassword(){
        var password =  $("#password").val();
        if(password.length < 6){
            return false;
        }else{
            return true;
        }
    }
    function validateFirstname(){
        var fname =  $("#firstname").val();
        if(fname.length < 2 || fname.length > 50){
            return false;
        }else{
            return true;
        }
    }
    function validateLastname(){
        var lname =  $("#lastname").val();
        if(lname.length < 2 || lname.length > 50){
            return false;
        }else{
            return true;
        }
    }
    function validateConfirm(){
        var password =  $("#password").val();
        var confirm = $("#confirmpassword").val();
        if(confirm == password){
            return true;
        }else{
            return false;
        }
    }
    function validateEmail(){
        var email = $("#email").val();
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(reg.test(email)){
            return true;
        }else{
            return false;
        }
    }
function showBtn(){
    if(validateConfirm() && validateEmail() && validateFirstname() && validateLastname() && validateUsername() && validatePassword()){
        $("#signup").show();
    }else{
        $("#signup").hide();
    }
}
    
