import React, { useState } from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import InfoModal from "./components/InfoModal";
import InteractiveImageEditor from "./components/InteractiveImageEditor";
import {
  generateImage,
  editImage,
  enhanceImage,
  generateGenericText,
  generateStructuredContent,
  groundedSearch,
} from "./services/geminiService";
import { RANDOM_PROMPTS } from "./constants";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [imageResult, setImageResult] = useState(null);
  const [textResult, setTextResult] = useState("");
  const [prompt, setPrompt] = useState("");

  // Função para gerar imagem
  const handleGenerateImage = async () => {
    const result = await generateImage(prompt || RANDOM_PROMPTS[0]);
    setImageResult(result.url);
    setModalTitle("Imagem Gerada");
    setModalContent(<img src={result.url} alt="Gerada" />);
    setModalOpen(true);
  };

  // Função para gerar texto
  const handleGenerateText = async () => {
    const result = await generateGenericText(prompt || RANDOM_PROMPTS[1]);
    setTextResult(result);
    setModalTitle("Texto Gerado");
    setModalContent(<div>{result}</div>);
    setModalOpen(true);
  };

  return (
    <div className="flex min-h-screen">
      <LeftPanel />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8">Nulix AI</h1>
        <div className="flex space-x-4 mb-8">
          <input
            type="text"
            className="rounded px-3 py-2 text-black"
            placeholder="Digite seu prompt ou escolha um aleatório..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="bg-blue-600 rounded px-4 py-2 text-white font-bold"
            onClick={handleGenerateImage}
          >
            Gerar Imagem
          </button>
          <button
            className="bg-green-600 rounded px-4 py-2 text-white font-bold"
            onClick={handleGenerateText}
          >
            Gerar Texto
          </button>
        </div>
        <InteractiveImageEditor />
      </main>
      <RightPanel />
      <InfoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      >
        {modalContent}
      </InfoModal>
    </div>
  );
}

export default App;
