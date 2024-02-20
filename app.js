'use strict'

const button = document.getElementById('botao-criar-conta')


var main = document.querySelector('main')

async function CriarTarefa(info) {
    const containerTarefa = document.createElement('div');
    containerTarefa.classList.add("container")
    const tituloTarefa = document.createElement('h1')
    tituloTarefa.classList.add("tarefa-title")
    tituloTarefa.textContent=info.titulo
    const descricaoTarefa = document.createElement('p')
    descricaoTarefa.classList.add('tarefa-descricao')
    descricaoTarefa.textContent = info.descricao
    const acoes = document.createElement('div')
    acoes.classList.add('acoes')
    const editarIcon = document.createElement('img')
    editarIcon.src="./img/editarIcon.svg"
    const excluirIcon = document.createElement('img')
    excluirIcon.src="./img/excluirIcon.svg"
    let id = info.id
    console.log(id)
    excluirIcon.addEventListener('click', () => deletarTarefa(info.id));

     

    main.appendChild(containerTarefa)
    containerTarefa.appendChild(tituloTarefa)
    containerTarefa.appendChild(descricaoTarefa)
    containerTarefa.appendChild(acoes)
    acoes.appendChild(editarIcon)
    acoes.appendChild(excluirIcon)
    
}

async function validarTarefas() {
    const responseApi = await fetch('http://localhost:5080/tarefas')
    const listTasks = await responseApi.json()

    let listaDeTarefasUsuario = []
    listTasks.forEach((task) => {
        listaDeTarefasUsuario.push(task)
    })
    return (listaDeTarefasUsuario)

}


async function criarTarefas(){
    const listaTarefas = await validarTarefas()
    for(let cont = 0;cont<listaTarefas.length;cont++)
    CriarTarefa(listaTarefas[cont])
}
criarTarefas()

const botao = document.getElementById('botao-concluir')
botao.addEventListener('click',receberDados)

async function receberDados(){
const titulo = document.getElementById('tarefa-title').value
const descricao = document.getElementById('tarefa-descricao').value
const tarefaData = document.getElementById('tarefa-data').value 

const info = {
    titulo: titulo,
    descricao: descricao,
    data: tarefaData
}



await fetch('http://localhost:5080/tarefas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(info)
})
window.location.reload()
}



async function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    if (email === '' || senha === '') {
        alert('Preencha os campos corretamente !!!')
    }

    try {
        const responseApi = await fetch('http://localhost:5080/usuario')
        const listUsers = await responseApi.json();

        listUsers.forEach((user) => {

            console.log(user.email)
            console.log(user.senha)
            if (email === user.email && senha === user.senha) {
                alert('Usuário Logado com Sucesso !!!');
                window.location.href = '../tarefas.html';
            }
        })

    } catch (error) {
        console.error(error);
    }

}




// async function CadastrarUsuarios(usuario){
//     const url = 'http://10.107.140.2:8080/usuarios/'
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(usuario)
//     }
//     const response = await fetch(url, options)
//     console.log(response.ok)
//     return response.ok

// }

async function CadastrarUsuarios() {


    const nome = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('senhaUsuario').value;
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

    try {

        const perfil = {
            nome,
            email,
            senha
        }

        console.log(perfil)

        if (senha == confirmacaoSenha) {
            const url = 'http://127.0.0.1:5080/usuario'
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(perfil)
            }


            await fetch(url, options)

            alert("Contato Cadastrado com Sucesso !!");

            window.location.href = "../tarefas.html";

        }

    } catch (error) {
        console.error('Erro:', error);
        alert("Erro ao Cadastrar Contato!!");
    }
}


// button.addEventListener('click', CadastrarUsuarios)


async function deletarTarefa(id) {
    try {
        await fetch(`http://localhost:5080/tarefas/${id}`, {
            method: 'DELETE',
        });
        console.log('Tarefa excluída com sucesso!');
        atualizarPagina()
    } catch (error) {
        console.error('Ocorreu um erro ao excluir a tarefa:', error);
    }
}

async function deletarTarefa(id) {
    await fetch(`http://localhost:5080/tarefas/${id}`, {
        method: 'DELETE',
    });
    window.location.reload()
}

const botaoAdicionar = document.getElementById('botao-adicionar-tarefa')


botaoAdicionar.addEventListener('click', function(){
    info.classList.add('mostrar')
})