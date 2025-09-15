// Tipos utilizados no Nulix AI

// Ferramenta
export type Tool = {
  name: string;
  description: string;
  icon?: string;
  options?: ToolOptions;
};

// Histórico de uso das ferramentas
export type HistoryItem = {
  id: string;
  tool: string;
  input: any;
  output: any;
  createdAt: number;
  metadata?: HistoryItemMetadata;
};

export type HistoryItemMetadata = {
  [key: string]: any;
};

// Opções das ferramentas
export type ToolOptions = {
  [key: string]: any;
};
