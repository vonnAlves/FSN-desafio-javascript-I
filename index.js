const alunosDaEscola=[
{       
    Nome:"Henrique",
    Notas:[],
    Cursos:[],
    Faltas:5
},
{   
    Nome:"Edson",
    Notas:[],
    Cursos:[],
    Faltas:2
},
{   
    Nome:"Bruno",
    Notas:[10,9.8,9.6],
    Cursos:[],
    Faltas:0
},
{
    Nome:"Guilherme",
    Notas:[10,9.8,9.6],
    Cursos:[{NomeDoCurso:"Full Stack",dataMatricula:new Date}],
    Faltas:0
},
{
    Nome:"Carlos",
    Notas:[],
    Cursos:[],
    Faltas:0
},
{   
    Nome:"Lucca",
    Notas:[10,9.8,9.6],
    Cursos:[{NomeDoCurso:"UX",dataMatricula:new Date}],
    Faltas:0
}];

//adiciona aluno no sistema escolar, e retorna um feedback caso aluno seja inserido corretamente;
const adicionarAluno = nome => {
    if(typeof nome === "string"){
        let novoAluno = {
            Nome: nome,
            Notas:[],
            Cursos:[],
            Faltas:0
        };
        console.log("Aluno:" + nome + " Cadastrado com sucesso!");
        alunosDaEscola.push(novoAluno);
    }else{
        console.log("Não foi possivél cadastrar aluno!")
    }
}

//percorre o array e imprime todos os alunos contidos em um formato amigável;
const listarAlunos = ()=> {
    alunosDaEscola.forEach((aluno) => {
        console.log("-".repeat(30));
        console.log("Nome Do Aluno:" + aluno.Nome);
        console.log("Notas:" + aluno.Notas);
        aluno.Cursos.forEach(aluno =>{
            console.log("Nome do curso:" + aluno.NomeDoCurso);
            console.log("Data da matricula:" + aluno.dataMatricula);
        })
        console.log("Faltas:" + aluno.Faltas);
    })
}

//recebe um nome de um aluno como parametro e verifica se o mesmo esta cadastrado no sistema;
//emite um feedback, caso esteja cadastrado ou não;
const buscarAluno = nome =>{
    let alunoAchado = alunosDaEscola.filter(aluno =>{
        return aluno.Nome === nome });
    alunoAchado.length > 0 ? console.log ("Aluno Encontrado!") : console.log ("Aluno não  cadastrado no sistema!");
    alunoAchado.forEach((aluno) => {
        console.log("-".repeat(30));
        console.log("Nome Do Aluno:" + aluno.Nome);
        console.log("Notas:" + aluno.Notas);
        aluno.Cursos.forEach(aluno =>{
            console.log("Nome do curso:" + aluno.NomeDoCurso);
            console.log("Data da matricula:" + aluno.dataMatricula);
        })
        console.log("Faltas:" + aluno.Faltas);
        console.log("-".repeat(30));
    })
}

//recebe como parametro um aluno e o curso desejado, se aluno estiver cadastrado,sera matriculado no curso com sucesso;
//caso não esteja cadastrado emitirá um feedback, avisando que aluno não esta cadastrado;
const matricularAluno = (aluno, curso) =>{
    let alunoCadastrado = alunosDaEscola.filter(listaAluno => listaAluno.Nome == aluno.Nome)
    if(alunoCadastrado.length > 0){
        aluno.Cursos.push({NomeDoCurso:curso, dataMatricula:new Date()});
        console.log("Aluno:" + aluno.Nome + " " + "foi Matrículado no curso:" + curso);
    }else{
       console.log("não foi possivel realizar matricula, aluno não cadastrado");
    }
}

//recebe um objeto aluno como parametro no qual deseja aplicar falta; e incrementa +1 falta para o aluno;
const aplicarFalta = aluno =>{
    if(aluno.Cursos[0]){
        aluno.Faltas++;
        console.log("Falta Aplicada com sucesso")
    }else{                                                                                                                                                            
        console.log("Não Foi possivel aplicar falta, aluno nao esta matriculado!")
    }
}

//aplica nota para um aluno devidamente matriculado em um curso;
const aplicarNota = (aluno, nota) =>{ 
    if(aluno.Cursos[0]){
        aluno.Notas.push(nota);
        console.log("Aluno:" + aluno.Nome + " Nota:" + nota + " Aplicada com sucesso!")
    }else{
        console.log("Não foi possivel aplicar nota, aluno não esta cadastrado no sistema!")
    }
}

//aprova aluno, se o mesmo estiver matriculado no sistema e possuir media de notas maior ou igual 7 e faltas menor ou igual 3;
const aprovarAluno = aluno =>{
    if(aluno.Cursos[0]){
        const mediaAluno = aluno.Notas.reduce((soma, nota) => soma + nota) / aluno.Notas.length
        const valorArrendondado = parseFloat(mediaAluno.toFixed(2))
        if(mediaAluno >= 7 && aluno.Faltas <= 3){
            console.log("Aluno:" + aluno.Nome + " APROVADO!!")
            console.log("Média do Aluno:" + valorArrendondado)
        }else{
            console.log("Aluno:" + aluno.Nome + " REPROVADO!")
            console.log("Média do Aluno:" + valorArrendondado)
            console.log("Faltas do aluno:" + aluno.Faltas)
        }
    }else{
        console.log("Aluno Não Esta Matriculado no sistema!")
    }
}


