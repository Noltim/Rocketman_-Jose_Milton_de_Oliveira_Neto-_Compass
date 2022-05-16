function VerificarEntrada() {
    nomeConvidado = document.getElementById('nomeConvidado').value;
    convidadosFesta = ["Matheus", "Alexandre", "Filipe", "Juliana", "David", "Rodrigo",
        "Abyner", "Irlan", "Jõao", "Milton"];

    if (convidadosFesta.includes(nomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = "Você pode entra!"
    }else{
        document.getElementById('PermissaoDeEntrada').innerText = "Você não esta na lista!"
    }

}

