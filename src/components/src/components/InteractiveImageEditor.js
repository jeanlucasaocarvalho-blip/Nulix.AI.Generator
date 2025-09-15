import React, { useState } from "react";

function InteractiveImageEditor() {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="glass-panel-dark rounded-lg p-4 w-full max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Editor de Imagem</h2>
      <input type="file" accept="image/*" onChange={handleUpload} className="mb-4" />
      {image && (
        <div className="flex flex-col items-center">
          <img src={image} alt="Preview" className="mb-4 max-w-full rounded-lg shadow-lg" />
          {/* Botões de edição podem ser adicionados aqui */}
        </div>
      )}
    </div>
  );
}

export default InteractiveImageEditor;
