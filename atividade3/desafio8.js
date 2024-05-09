const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos,medias];

function exibeNomeeNota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){

        const indice =  listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaAluno = listaDeAlunosEMedias[1][indice]

        console.log(`${aluno} tem a média ${mediaAluno}`)

    } else {
        console.log("aluno(a) não encontrado!")
    }
}
exibeNomeeNota("João")
exibeNomeeNota("Juliana")
exibeNomeeNota("Ana")
exibeNomeeNota("Caio")