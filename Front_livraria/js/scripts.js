function carregar_novidades(){
    const livros_novidades = document.getElementById("livrosnovidades")
    let saida= "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida += `       <div class="livro">
            <img src="${liv.foto1}" alt="Capa ${liv.nome}">
            <h3>${liv.nome}</h3>
            <p class="preco">R$ ${liv.preco}</p>
            <button>
                <img src="img/carrinhoo.png">
                <p>
                    Adiconar ao carrinho
                </p>
            </button>
        </div>`
        })
        livros_novidades.innerHTML = saida;
    })
   carregar_maisvendidos();
}





function carregar_maisvendidos(){
    const livros_maisvendidos = document.getElementById("livrosmaisvendidos")
    let saida= "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarmaisvendidos")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida += `       <div class="livro">
            <img src="${liv.foto1}" alt="Capa ${liv.nome}">
            <h3>${liv.nome}</h3>
            <p class="quantidade">Qtd ${liv.quantidade}</p>
           
        </div>`
        })
        livros_maisvendidos.innerHTML = saida;
    })
    
    carregar_autores();
   
}




function carregar_autores(){
    const livros_autores = document.getElementById("livrosautores")
    let saida= "";
    fetch("http://127.0.0.1:5000/api/v1/autor/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida += ` <div class="autor">
            <img src="${liv.foto}" alt="Autor ${liv.nome}">
            <h3>${liv.nome}</h3>
           
        </div>`
        })
        livros_autores.innerHTML = saida;
    })
   
}





let = pe =0;

function rolarNovidadesEsquerda(){
    
    if (pe < -300 ){
        pe = -500;
    }
    else{
        pe-=100;
    }
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`;

    //console.log(livrosnovidades.style.marginLeft);

}
function rolarNovidadesDireita(){
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`;
    if(pe > 0){
        pe = 0;
    }
    else{
        pe+=50;
    }
  

}

function carregarlivrosromance(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = ""
    fetch ("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/Romance")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livromance>
            <img src="${li.foto1}">
            <h3>${li.nome}<h3>
            <p class=livpreco> R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>Mais detalhes </a>
            </div>`
        })
        lstlivros.innerHTML=saida;
    })

}
function carregar_detalhes(){
    let idlivro = window.location.search.split('=');
    idlivro = idlivro[1];

    const div_detalhes = document.getElementById("detalhes");
    


}