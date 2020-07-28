


const nomeDaEscola ='Alphatech highschool';

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
    nNotas:[10,9.8,9.6],
    ursos:[{NomeDoCurso:"UX",dataMatricula:new Date}],
    Faltas:0
}];

//funçao para adicionar aluno no sistema escolar, e retorna um feedback caso aluno seja inserido corretamente;
const adicionarAluno = Nome => {
    let novoAluno = {
       Nome: Nome,
    };
console.log("Aluno Cadastrado:" + Nome)
console.log("")

alunosDaEscola.push(novoAluno);
};

//adicionarAluno("Carlos Alberto");

//lista todos os alunos contidos na array;
const listarAlunos = ()=> {
    alunosDaEscola.forEach((aluno) => {
        console.log("-".repeat(25));
        console.log("Nome Do Aluno:" + aluno.Nome)
        console.log("Notas:" + aluno.Notas)
        console.log("Cursos Matriculados:" + aluno.Cursos);
        console.log("Faltas:" + aluno.Faltas);
        console.log("-".repeat(25));
    })
}

//busca se o aluno esta cadastrado no sistema e emite um feedback, se encontrar aluno ou não;
const buscarAluno = nome =>{
    let alunoAchado = alunosDaEscola.filter(function (aluno) {
        return aluno.Nome === nome })
    if (alunoAchado.length > 0) {
        console.log("-".repeat(25));
        console.log ("Aluno Encontrado!")
    }else{
        console.log ("Aluno não  cadastrado no sistema!")
    }
    alunoAchado.forEach((aluno) => {
        console.log("Nome Do Aluno:" + aluno.Nome)
        console.log("Notas:" + aluno.Notas)
        console.log("Cursos Matriculados:" + aluno.Cursos);
        console.log("Faltas:" + aluno.Faltas);
        console.log("-".repeat(25));
    })
}
//buscarAluno("Carlos Alberto");

const matricularAluno = (nome, curso) =>{
    let matricula = alunosDaEscola.map(function(){
            return nome.Cursos = curso
    })
return matricula != undefined;
}
matricularAluno(alunosDaEscola[0],"Web-Fullstack");
listarAlunos();