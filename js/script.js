function consultarIMEI() {
  const imei = document.getElementById("imei").value;
  const erro = document.getElementById("error");
  if (!imei) {
    erro.innerHTML =
      '<ion-icon name="warning-outline"></ion-icon> Por favor, insira um número IMEI. <button id="close"><ion-icon name="close-outline"></ion-icon></button>';
    erro.classList.add("erro");
    erro.style.display = "flex";

    document.getElementById("close").addEventListener("click", function() {
        erro.style.display = "none";
      });

    return;
  }

  

  // URL da API com o IMEI inserido
  const url = `https://api-sp.smartgps.rs/__external/checkimei/${imei}`;

  // Fazendo a requisição GET para a API
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Falha na consulta");
      }
      return response.json();
    })
    .then((data) => {
      // Verificando a chave 'existingServers'
      const existingServers = data.existingServers;

      if (existingServers && existingServers.length > 0) {
        // Se existir pelo menos um servidor, exibe os servidores
        document.getElementById("result").style.display="flex";
        document.getElementById("result").innerHTML = `
                  <span class="title-result">Servidores encontrados:</span><br>
                  ${existingServers.join("<br>")}
              `;
              document.getElementById("result").classList.add('success');
      } else {
        // Caso contrário, exibe mensagem de nenhum servidor encontrado
        document.getElementById("result").textContent =
          "Nenhum servidor encontrado para este IMEI.";
      }
    })
    .catch((error) => {
      document.getElementById("result").textContent = `Erro: ${error.message}`;
    });
}

const icone = document.getElementById("iconeTema");

document.getElementById("trocaTema").addEventListener("click", function() {
  
  if (icone.name === "sunny-outline") {
    icone.name = "moon-outline";
  } else {
    icone.name = "sunny-outline";
  }

  if(!document.getElementById("trocaTema").classList.contains("temaBranco")){
    document.getElementById("trocaTema").classList.add("temaBranco");
  }
  else{
    document.getElementById("trocaTema").classList.remove("temaBranco");
  }

const container = document.getElementById("containerPrincipal");
  if(!container.classList.contains("temaBranco")){
    container.classList.add("temaBranco");
  }
  else{
    container.classList.remove("temaBranco");
  }

  const titulo = document.getElementById("titulo");
  if(!titulo.classList.contains("temaBranco")){
    titulo.classList.add("temaBranco");
  }
  else{
    titulo.classList.remove("temaBranco");
  }

  const imei = document.getElementById("imei");
  if(!imei.classList.contains("temaBranco")){
    imei.classList.add("temaBranco");
  }
  else{
    imei.classList.remove("temaBranco");
  }

  const result = document.getElementById("result");
  if(!result.classList.contains("temaBranco")){
    result.classList.add("temaBranco");
  }
  else{
    result.classList.remove("temaBranco");
  }
});