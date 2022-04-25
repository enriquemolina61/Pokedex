/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var nome = document.querySelector("#nome");
    var tipo = document.querySelector("#tipo");
    var imagem = document.querySelector("#imagem");
    var descricao = document.querySelector("#descricao");
    var altura = document.querySelector("#altura");
    var peso = document.querySelector("#peso");
    var categoria = document.querySelector("#categoria");
    var habilidade = document.querySelector("#habilidade");
    
  
    // verificar se o nome está vazio
    while (nome.value == "") {
      alert("Nome não informado");
  
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
      return;
    }
    if (tipo.value == "") {
      alert("Tipo não informado");
      tipo.focus();
      return;
    }
    if (imagem.value == "") {
      alert("Imagem não informada");
      imagem.focus();
      return;
    }
    if (descricao .value == "") {
      alert("Descricao  não informada");
      descricao .focus();
      return;
    }
    if (altura .value == "") {
      alert("Altura  não informada");
      altura .focus();
      return;
    }
    if (peso.value == "") {
      alert("Peso não informado");
      peso.focus();
      return;
    }
    if (categoria.value == "") {
      alert("Categoria não informada");
      categoria.focus();
      return;
    }
    if (habilidade.value == "") {
        alert("habilidade não informada");
        habilidade.focus();
        return;
      }
    alert("Formulário enviado!");
    // envia o formulário
    // formulario.submit();
  }