function deDecimalParaBin(numero) {
  	document.getElementById('num_bin').value = Math.abs(numero).toString(2);
}

function deDecimalParaOctal(numero) {
  	document.getElementById('num_oct').value = Math.abs(numero).toString(8);
}

function deDecimalParaHexa(numero) {
  	document.getElementById('num_hex').value = Math.abs(numero).toString(16);
}

function deBinParaDecimal(numero){
	document.getElementById('num_dec').value = parseInt(numero,2);
}

function deOctalParaDecimal(numero){
	document.getElementById('num_dec').value = parseInt(numero,8);
}

function deHexaParaDecimal(numero) {
 	document.getElementById('num_dec').value = parseInt(numero, 16);
}

$("#num_bin").keyup(function( event ) {
	if( $("#num_bin").val() ){
	  	deBinParaDecimal($("#num_bin").val());
	  	deDecimalParaOctal(document.getElementById('num_dec').value);
	  	deDecimalParaHexa(document.getElementById('num_dec').value);
	}else{
	  	clearNumbers();
	}
});

$("#num_oct").keyup(function( event ) {
	if( $("#num_oct").val() ){
		deOctalParaDecimal($("#num_oct").val());
	  	deDecimalParaBin(document.getElementById('num_dec').value);
	  	deDecimalParaHexa(document.getElementById('num_dec').value);
	}else{
	  	clearNumbers();
	}
});

$("#num_dec").keyup(function( event ) {
	if( $("#num_dec").val() ){
	  	deDecimalParaBin($("#num_dec").val());
	  	deDecimalParaOctal($("#num_dec").val());
	  	deDecimalParaHexa($("#num_dec").val());
	}else{
	  	clearNumbers();
	}
});
$("#num_hex").keyup(function( event ) {
	if( $("#num_hex").val() ){
	  	deHexaParaDecimal($("#num_hex").val());
	  	deDecimalParaBin(document.getElementById('num_dec').value);
	  	deDecimalParaOctal(document.getElementById('num_dec').value);
	}else{
	  	clearNumbers();
	}
});

function clearNumbers(){
	$("#num_bin").val('');
	$("#num_oct").val('');
  	$("#num_dec").val('');
  	$("#num_hex").val('');
}