function gerarCorHex() {
  const letras = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function gerarPaleta() {
  const palette = document.getElementById('palette');
  palette.innerHTML = ''; // Limpa a paleta anterior

  for (let i = 0; i < 5; i++) {
    const cor = gerarCorHex();
    const bloco = document.createElement('div');
    bloco.className = 'color-block';
    bloco.style.backgroundColor = cor;

    const codigo = document.createElement('div');
    codigo.className = 'color-code';
    codigo.innerText = cor;

    // Cópia para área de transferência ao clicar
    bloco.addEventListener('click', () => {
      navigator.clipboard.writeText(cor).then(() => {
        codigo.innerText = 'Copiado!';
        setTimeout(() => {
          codigo.innerText = cor;
        }, 1000);
      });
    });

    bloco.appendChild(codigo);
    palette.appendChild(bloco);
  }
}

document.getElementById('generateBtn').addEventListener('click', gerarPaleta);

// Gera uma paleta ao carregar a página
window.onload = gerarPaleta;
