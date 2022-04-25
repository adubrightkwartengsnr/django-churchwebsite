$(document).ready(function(){
	$("#register-btn").click(function(){
		$("#register-btn").val("Please Wait...");
		var username = $("#username").val();
		var email = $("#remail").val();
		var password = $("#rpassword").val();
		var cpassword = $("#cpassword").val();
		if(username != "" && email != "" && password != "" && cpassword != ""){
			if(password == cpassword){
				$.post('process_register.php',{email: email, username: username, password: password}, function(data){
					window.location = "index.php";
				});
			}else{
				$(".inva").text("password do not match!");
			}
		}else{
			$(".inva").text("Please all fields are required!");
		}
	});
});