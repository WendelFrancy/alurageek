

const btnGuardar = document.querySelector('.cadastro--btns');
const nome = document.querySelector('.nome');
const valor = document.querySelector('.valor');
const imagemFile = document.querySelector('.filelabel');
const imagem = document.querySelector('.imagem');
const produtos = document.querySelector('.produtos--card--container')

function cadastraProduto(nome, valor, imagem) {
    produtos.innerHTML +=
    `
    <div class="produtos--card">
        <img src="${imagem.src}" alt="Cartão de produto cadastrado">
            <p class="produtos--name">${nome.value}</p>
            <div class="produtos--excluir">
                <p class="produtos--valor">$ ${valor.value}</p>
                <img src="assets/cesto-de-lixo-branco.png" alt="Excluir Produto">
            </div>
    </div>
    `
    imagemFile.innerHTML = `${imagem.src}`
}

btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();
    cadastraProduto(nome, valor, imagem);
})



