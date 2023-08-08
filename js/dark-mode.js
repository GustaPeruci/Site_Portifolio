// Função para alternar o dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  // Verifica o dark mode está ativado no início
  const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
  if (isDarkModeEnabled) {
    document.body.classList.add('dark-mode');
  }
  
  // Atualiza o estado do checkbox com base no dark mode atual
  document.getElementById('dark-mode-input').checked = isDarkModeEnabled;
  
  // Escuta o evento de clique no botão de alternância do dark mode
  document.getElementById('dark-mode-input').addEventListener('click', () => {
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    if (isDarkModeEnabled) {
      localStorage.setItem('darkModeEnabled', 'false');
    } else {
      localStorage.setItem('darkModeEnabled', 'true');
    }
    toggleDarkMode();
  });
  