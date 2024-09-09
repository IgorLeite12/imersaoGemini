function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para depuração, mostra o elemento selecionado no console

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado!</p>"
        return
    };
    
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";

    // Itera sobre os dados e cria elementos HTML para cada resultado
    for (let dado of dados) {

        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tag = dado.tag.toLocaleLowerCase()

        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {

            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
        `;
        }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}