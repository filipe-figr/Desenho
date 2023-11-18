function criarGrid(rows, cols) {
    const tabela = document.createElement('table');

    for (let i = 0; i < rows; i++) {
      const linha = document.createElement('tr');

      for (let j = 0; j < cols; j++) {
        const celula = document.createElement('td');
        linha.appendChild(celula);
      }

      tabela.appendChild(linha);
    }

    document.body.appendChild(tabela);
  }

criarGrid(200, 200);