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
