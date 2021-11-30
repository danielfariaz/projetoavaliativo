function verificar(){

	var nome = document.getElementById('nome').value;
	var cpf = document.getElementById('cpf').value;
	var email = document.getElementById('email').value;
	var celular = document.getElementById('celular').value;
	var datadenascimento = document.getElementById('datadenascimento').value;

if (!nome || !email || !cpf || !celular || !data de nascimento){
	alert("Campos não preenchidos, favor preencher.");
	} else {
		alert("Campos preenchidos com sucesso");
	}
}

	function maskFone (){
	const numeroAtual = document.getElementById('celular').value
	const isCelular = numeroAtual.lenght  === 11;
	const isFone = numeroAtual.lenght === 10; 
	let = numeroAjustado;
	if(isCelular){
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,7);
		const part3 = numeroAtual.slice(7,11);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	}
}