import { useState } from "react";

import Topbar from "../../global_components/Topbar";

import Header from "./main_components/Header";
import Input from "./main_components/Input";
import Results from "./main_components/Results";

import { useFetch } from "../../../../hooks/useFetch";

let teste = [
  {
    nTeste: 1,
    status: "Aprovado",
    tempoTeste: 100,
    menorTempo: 2,
    usoMemoria: 10,
    tipoFalha: "",
  },
  {
    nTeste: 2,
    status: "Reprovado",
    tempoTeste: 150,
    menorTempo: 5,
    usoMemoria: 15,
    tipoFalha: "Tempo excedido",
  },
  {
    nTeste: 3,
    status: "Erro",
    tempoTeste: 200,
    menorTempo: 10,
    usoMemoria: 20,
    tipoFalha: "",
  },
];

export default function MainPage({ selection }) {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [responseQuestion, setResponse] = useState([]);
  const { post } = useFetch();

  const handleSetFile = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const handleCancel = () => {
    setFileName("");
    setFile(null);
  };

  const handleUpload = async () => {
    const { year, level, phase, name } = selection;
    const body = {
      year: year, level: level,
      phase: phase, name: name,
      file: file, fileName: fileName
    };
    const data = await post("/questions/validate");
    data ? setResponse(data) : null // --> Resposta ser exibida no Frontend (responsabilidade do time front)
  };

  return (
    <div className="h-full bg-slate-900 text-white overflow-y-auto light:bg-white">
      <Topbar collapsed={true} />

      <Header
        year={selection.year}
        fase={selection.phase}
        level={selection.level}
        question={selection.problem}
        file={file}
        cancel={handleCancel}
        onSubmit={handleUpload}
      />

      <Input fileName={fileName} file={file} onFileChange={handleSetFile} />

      <Results testes={teste} />
    </div>
  );
}
