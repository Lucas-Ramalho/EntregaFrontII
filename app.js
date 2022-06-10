
var mainElemento = document.querySelector('main')
var novaPostagemElemento = document.querySelector('#novaPostagem')

var elementoInicial= document.querySelector('#card-inicial')

var tituloInputElemento = document.querySelector('#novoTitulo')
var urlInputElemento = document.querySelector('#novaUrl')
var descricaoInputElemento = document.querySelector('#novaDescricao')
var autorInputElemento = document.querySelector('#novoAutor')


// var posts = [
//     {
//         foto: 'https://books.google.com.br/books/publisher/content?id=zWNyDgAAQBAJ&hl=pt-BR&pg=PR1&img=1&zoom=3&bul=1&sig=ACfU3U2L00wgxtUC94Vgk_gQr8NtOQVsWQ&w=1280',
//         titulo: 'JavaScript: O Guia Definitivo Livro',
//         texto: 'JavaScript é a linguagem de programação da Web. A maioria dos sites modernos usa JavaScript, e todos os navegadores – em computadores de mesa, consoles de jogos, tablets e smartphones – incluem interpretadores JavaScript. ...',
//         autor: 'David Flanagan'
//     },
//     {
//         foto: 'https://images-na.ssl-images-amazon.com/images/I/41CUT5QM1pL._SX351_BO1,204,203,200_.jpg',
//         titulo: 'HTML 5. Entendendo E Executando',
//         texto: 'Se você não conhece as novas características disponíveis no HTML5, agora é hora de descobrir. Este livro fornece informações práticas sobre como e porque a última versão dessa linguagem de marcação mudará significativamente a forma como você desenvolve para a Web. HTML5 é a próxima geração do HTML, sucedendo o HTML 4.01, XHTML 1.0 e XHTML 1.1. Fornece novas funções que são necessárias para os aplicativos web modernos.',
//         autor: 'Mark Pilgrim'
//     },
//     {
//         foto: 'https://images-na.ssl-images-amazon.com/images/I/41mzPVlkxQL._SX258_BO1,204,203,200_QL70_ML2_.jpg',
//         titulo: 'HTML5 e CSS3: guia prático e visual',
//         texto: 'Aprenda HTML5 e CSS3 de forma rápida e fácil!•A abordagem de fácil visualização utiliza exemplos de códigos do mundo real para guiá-lo pelo aprendizado de HTML e CSS, mostrando o que fazer em etapas.•Explicações e passos concisos permitem que você aprenda e coloque tudo em prática rapidamente.Seja um novato em HTML e CSS ou já esteja criando sites há anos, querendo aprender sobre HTML5, CS3 e mais, este livro tem algo para você - como estruturar conteúdos com elementos de HTML5;',
//         autor: 'Elizabeth Castro, Bruce Hyslop'
//     },
//     {
//         foto: 'https://images-na.ssl-images-amazon.com/images/I/71a3ovrWSAL.jpg',
//         titulo: 'Use a cabeça! HTML e CSS',
//         texto: 'O que você aprenderá neste livro?Cansado de ler livros sobre HTML que só fazem sentido depois de você já ser um expert? Então está na hora de pegar o recém-revisado Use a Cabeça! HTML e CSS e realmente aprender HTML. Aprenda HTML e CSS para finalmente criar aquelas páginas web que sempre quis e se comunicar mais efetivamente com seus amigos, família, fãs e clientes fanáticos.',
//         autor: 'Elisabeth Robson'
//     }

// ]



// for(let post of posts) {

//     mainElemento.innerHTML += `
//     <div class="" id="card">
//         <div class="card" style="width: 100% ">
//             <img src="${post.foto}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${post.titulo}</h5>
//                 <p class="card-text" id="card-desc">${post.texto}</p>
//                 <p class="card-text" id="card-autor">${post.autor}</p>
//             </div>
//         </div>
//     </div>
//     `

// }



novaPostagemElemento.addEventListener('click', (event) => {

    

    event.preventDefault()

    elementoInicial.classList.add("esconder")

    let novaPostagem = {
        foto: urlInputElemento.value,
        titulo: tituloInputElemento.value,
        texto: descricaoInputElemento.value,
        autor: autorInputElemento.value
    }

    mainElemento.innerHTML += `
    <div class="" id="card">
        <div class="card">
            <img src="${novaPostagem.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${novaPostagem.titulo}</h5>
                <p class="card-text" id="card-desc">${novaPostagem.texto}</p>
                <p class="card-text" id="card-autor">${novaPostagem.autor}</p>
                <div class="clear></div>
            </div>
        </div>
    </div>
    `
  
})



