import React from "react";

function InfoModal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="bg-[#222c4e] rounded-lg shadow-xl p-6 min-w-[300px] max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <button
            className="text-white text-2xl font-bold px-2"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default InfoModal;
