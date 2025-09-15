import React from "react";

function LeftPanel() {
  return (
    <div className="glass-panel-dark rounded-lg p-4 min-w-[240px]">
      <h2 className="text-xl font-bold mb-4">Painel Esquerdo</h2>
      <ul className="space-y-2">
        <li>Histórico</li>
        <li>Ferramentas</li>
        <li>Ajustes</li>
        {/* Adicione mais conforme seu app */}
      </ul>
    </div>
  );
}

export default LeftPanel;
