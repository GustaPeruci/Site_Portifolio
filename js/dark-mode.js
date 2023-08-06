// Função para alternar o dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  // Verifica se o dark mode está ativado no início (por exemplo, se o usuário já o ativou em uma visita anterior)
  if (localStorage.getItem('darkModeEnabled')) {
    document.body.classList.add('dark-mode');
  }
  
  // Escuta o evento de clique no botão de alternância do dark mode
  document.getElementById('dark-mode-input').addEventListener('click', () => {
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    if (isDarkModeEnabled) {
      localStorage.removeItem('darkModeEnabled');
    } else {
      localStorage.setItem('darkModeEnabled', 'true');
    }
    toggleDarkMode();
  });
  