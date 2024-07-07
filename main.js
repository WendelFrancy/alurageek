

const btnGuardar = document.querySelector('.guardar');
const btnLimpar = document.querySelector('.limpar');
const nome = document.querySelector('.nome');
const valor = document.querySelector('.valor');
const imagem = document.querySelector('.imagem');
const produtos = document.querySelector('.produtos--card--container')

function guardarProduto () {    
    btnGuardar.addEventListener('click', (e) => {
        e.preventDefault();
    
        if (!(imagem.files && imagem.files.length > 0)) {
            return
        }
    
        let r = new FileReader();
    
        r.onload = () => {
            produtos.innerHTML +=
                `
                <div class="produtos--card">
                    <img class="cardIMG" src="${r.result}" alt="Cartão de produto cadastrado">
                        <p class="produtos--name">${nome.value}</p>
                        <div class="produtos--excluir">
                            <p class="produtos--valor">$ ${valor.value}</p>
                            <img class="cardDelete" src="assets/cesto-de-lixo-branco.png" alt="Excluir Produto">
                        </div>
                </div>
                `
            nome.value = '';
            valor.value = '';
            imagem.value = '';

            excluirProduto();
        };
    
        r.readAsDataURL(imagem.files[0]);
    })
}

guardarProduto();

function excluirProduto (){
    const cardDelete = document.querySelectorAll('.cardDelete');

    console.log(cardDelete);
    
    cardDelete.forEach(cardDelete => {
        cardDelete.addEventListener('click', (e) => {
            e.preventDefault();
            const card = cardDelete.closest('.produtos--card');
            card.remove();
        })
    })
}

btnLimpar.addEventListener('click', (e) => {
    e.preventDefault();
    const cadastroInputs = document.querySelector('.cadastro--inputs--container');
    cadastroInputs.innerHTML =
        `
    <input class="cadastro--inputs nome" type="text" name="nome" placeholder="nome..." maxlength="17">
    <input class="cadastro--inputs valor" type="text" name="valor" placeholder="valor..." maxlength="10">
    <label class="cadastro--inputs filelabel" for="cadastroimg">imagem...</label>
    <input class="cadastro--inputs imagem" id="cadastroimg" type="file" accept="image/png, image/jpeg, image/jpg">
    `
})

