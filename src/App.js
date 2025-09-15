import React, { useState, useCallback, useEffect } from 'react';
// Importe seus componentes principais aqui (exemplo):
// import LeftPanel from "./components/LeftPanel";
// import RightPanel from "./components/RightPanel";
// import InfoModal from "./components/InfoModal";
// import InteractiveImageEditor from "./components/InteractiveImageEditor";

function App() {
  // Você pode adicionar o estado principal do seu app aqui
  const [theme, setTheme] = useState('dark');

  // Exemplo de função para alternar tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="w-screen h-screen p-2 md:p-4 box-border flex gap-2 md:gap-4">
      {/* Exemplo de uso dos componentes */}
      {/* <LeftPanel theme={theme} toggleTheme={toggleTheme} /> */}
      {/* <RightPanel theme={theme} /> */}
      <main className="flex-1 glass-panel-dark rounded-lg h-full max-h-full overflow-y-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Nulix AI</h1>
        <p className="text-center text-lg mb-6">Seu superapp de criação de conteúdo.</p>
        <button className="btn-primary px-6 py-3 rounded-lg text-lg font-bold" onClick={toggleTheme}>
          Alternar Tema
        </button>
      </main>
    </div>
  );
}

export default App;
