$(document).ready(function(){
	$("#login-btn").click(function(){
		$("#login-btn").val("Please Wait...");
		var username = $("#lusername").val();
		var password = $("#lpassword").val();
		var remember = $("#remember").val();
		if(username != "" && password != ""){	
			$.post('process_login.php',{username: username, password: password, remember: remember}, function(data){
				if(data === "Ok"){
					
					window.location = "index.php";
				}else{
					$(".linva").text("Username or password is incorrect");
					$(".invalu").text("");
					$(".invalp").text("");
					$("#lpassword").css("border", "2px solid #e6e6e6");
					$("#lusername").css("border", "2px solid #e6e6e6");
					$("#login-btn").val("Sign in");
				}
			});
		}else{
			if(username == "" && password != ""){
				$(".invalu").text("Username is required");
				$("#lusername").css("border", "2px solid red");
				$("#lpassword").css("border", "2px solid #e6e6e6");
				$(".linva").text("");
				$(".invalp").text("");
				$("#login-btn").val("Sign in");
			}
			if(password == "" && username != ""){
				$(".invalp").text("Password is required");
				$("#lpassword").css("border", "2px solid red");
				$("#lusername").css("border", "2px solid #e6e6e6");
				$(".linva").text("");
				$(".invalu").text("");
				$("#login-btn").val("Sign in");
			}
			else if(username == "" && password == ""){
				$(".invalu").text("Username is required");
				$(".invalp").text("Password is required");
				$("#lpassword").css("border", "2px solid red");
				$("#lusername").css("border", "2px solid red");
				$(".linva").text("");
				$("#login-btn").val("Sign in");
			}
		}
	});
});