function consultarIMEI() {
  const imei = document.getElementById('imei').value; // Pegando o IMEI do input
  if (!imei) {
      alert('Por favor, insira um número IMEI.');
      return;
  }

  // URL da API com o IMEI inserido
  const url = `https://api-sp.smartgps.rs/__external/checkimei/${imei}`;

  // Fazendo a requisição GET para a API
  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Falha na consulta');
          }
          return response.json();
      })
      .then(data => {
          // Verificando a chave 'existingServers'
          const existingServers = data.existingServers;
          
          if (existingServers && existingServers.length > 0) {
              // Se existir pelo menos um servidor, exibe os servidores
              document.getElementById('result').innerHTML = `
                  <strong>Servidores encontrados:</strong><br>
                  ${existingServers.join('<br>')}
              `;
          } else {
              // Caso contrário, exibe mensagem de nenhum servidor encontrado
              document.getElementById('result').textContent = "Nenhum servidor encontrado para este IMEI.";
          }
      })
      .catch(error => {
          document.getElementById('result').textContent = `Erro: ${error.message}`;
      });
}