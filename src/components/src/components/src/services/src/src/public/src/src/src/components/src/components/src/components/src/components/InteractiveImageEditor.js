import React, { useState } from "react";
import { editImage, enhanceImage } from "../services/geminiService";

function InteractiveImageEditor() {
  const [imageUrl, setImageUrl] = useState("");
  const [editPrompt, setEditPrompt] = useState("");
  const [editedImageUrl, setEditedImageUrl] = useState("");
  const [enhancedImageUrl, setEnhancedImageUrl] = useState("");

  const handleEditImage = async () => {
    if (!imageUrl || !editPrompt) return;
    const result = await editImage(imageUrl, editPrompt);
    setEditedImageUrl(result.url);
  };

  const handleEnhanceImage = async () => {
    if (!imageUrl) return;
    const result = await enhanceImage(imageUrl);
    setEnhancedImageUrl(result.url);
  };

  return (
    <div className="bg-[#1a223f] rounded-lg p-4 mt-8 shadow max-w-xl w-full">
      <h2 className="text-xl font-semibold mb-4">Editor Interativo de Imagens</h2>
      <div className="flex flex-col gap-2 mb-2">
        <input
          type="text"
          placeholder="URL da imagem para editar"
          className="rounded px-3 py-2 text-black"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prompt de edição (ex: adicionar efeito, mudar cor...)"
          className="rounded px-3 py-2 text-black"
          value={editPrompt}
          onChange={(e) => setEditPrompt(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            className="bg-purple-600 rounded px-4 py-2 text-white font-bold"
            onClick={handleEditImage}
          >
            Editar Imagem
          </button>
          <button
            className="bg-yellow-600 rounded px-4 py-2 text-white font-bold"
            onClick={handleEnhanceImage}
          >
            Melhorar Imagem
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {editedImageUrl && (
          <div>
            <h3 className="font-bold mb-2">Imagem Editada:</h3>
            <img src={editedImageUrl} alt="Editada" className="rounded max-h-64" />
          </div>
        )}
        {enhancedImageUrl && (
          <div>
            <h3 className="font-bold mb-2">Imagem Melhorada:</h3>
            <img src={enhancedImageUrl} alt="Melhorada" className="rounded max-h-64" />
          </div>
        )}
      </div>
    </div>
  );
}

export default InteractiveImageEditor;
