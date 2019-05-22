// Constructor function para criar usuário
function Usuario(email, password, nome, sobrenome) {
    this.email = email;
    this.password = password;
    this.nome = nome;
    this.sobrenome = sobrenome
}

let usuario1 =  new Usuario('danielmfigueroa@gmail.com', '*******', 'Daniel', 'Figueroa');

console.log(usuario1);

function Dead(jogador, nome, raca, classe, nivel, causaMorte){
    this.jogador = jogador;
    this.nome = nome;
    this.raca = raca;
    this.classe = classe;
    this.nivel = nivel;
    this.causaMorte = causaMorte;
    votos = 0;

    computarVoto(votos) {
        votos++;
    };

    raiseDead(){
        if (votos>666){

        }
    }
}




