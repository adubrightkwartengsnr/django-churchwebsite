$(document).ready(function(){
	$("table").DataTable();
	$("#save").click(function(){
		var title = $("#title").val();
		var note = $("#note").val();
		if(title != "" && note != ""){
			$.post("process_note.php", {title: title, note: note}, function(data){
				$("#title").val("");
				$("#note").val("");
				$("#mymodal").modal("hide");
			});
		}
	});
	setInterval(function(){
		$.post("get_notes.php", {action: "list"}, function(data){
			$("#datas").html(data);
		});
	}, 500);
});