'use strict'

const button = document.getElementById('teste')


var main = document.querySelector('main')

function CriarTarefa() {
    const containerTarefa = document.createElement('div');
    containerTarefa.classList.add("container")
    const tituloTarefa = document.createElement('h1')
    tituloTarefa.classList.add("tarefa-title")
    const descricaoTarefa = document.createElement('p')
    descricaoTarefa.classList.add('tarefa-descricao')

    main.appendChild(containerTarefa)
    containerTarefa.appendChild(tituloTarefa)
    //containerTarefa.appendChild(tituloTarefa)
    //containerTarefa.appendChild(tituloTarefa)

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
            console.log(email)
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

    alert('cheguei aqui!')

    const nomeUser = document.getElementById('nomeUsuario').value;
    const emailUser = document.getElementById('emailUsuario').value;
    const senhaUser = document.getElementById('senhaUsuario').value;
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

    try {

        const perfil = {
            nomeUser,
            emailUser,
            senhaUser
        }

        console.log(perfil)

        if (senhaUser == confirmacaoSenha) {
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


button.addEventListener('click', CadastrarUsuarios)


async function deletarTarefa() {
    const url = `http://127.0.0.1:5501/criarConta.html`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}