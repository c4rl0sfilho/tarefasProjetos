var main = document.querySelector('main')

function CriarTarefa(){
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

async function validarLogin(){
    const email = document.getElementById('email').value; 
    const senha = document.getElementById('senha').value; 


    if(email === '' || senha === '' ){
        alert('Preencha os campos corretamente !!!')
    } 

    try{
        const responseApi = await fetch('http://localhost:5080/usuario')
        const listUsers = await responseApi.json();

        listUsers.forEach((user) => {

            console.log(user.email)
            console.log(email)
            if(email === user.email && senha === user.senha){
                alert('Usuário Logado com Sucesso !!!');
                window.location.href = '../tarefas.html';
            }
        })

    } catch (error){
        console.error(error);
    }

}

