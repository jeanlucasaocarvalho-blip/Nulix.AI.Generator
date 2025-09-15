import React from "react";

function RightPanel() {
  return (
    <div className="glass-panel-dark rounded-lg p-4 min-w-[240px]">
      <h2 className="text-xl font-bold mb-4">Painel Direito</h2>
      <ul className="space-y-2">
        <li>Função Extra 1</li>
        <li>Função Extra 2</li>
        <li>Função Extra 3</li>
        {/* Adicione mais conforme seu app */}
      </ul>
    </div>
  );
}

export default RightPanel;
