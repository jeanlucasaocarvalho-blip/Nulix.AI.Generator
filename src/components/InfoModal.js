import React from "react";

function InfoModal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="glass-panel-dark rounded-xl p-8 max-w-lg w-full shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-white text-xl"
          onClick={onClose}
          aria-label="Fechar"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default InfoModal;
