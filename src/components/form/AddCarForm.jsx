import { useState } from "react";
import "./AddCarForm.css";

export default function AddCarForm({ onAddCar }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (brand.trim() === "" || model.trim() === "") {
      alert("Por gentileza, insira o fabricante e o modelo do veículo a ser adicionado.");
      return;
    }
    onAddCar(brand.trim(), model.trim());
    setBrand("");
    setModel("");
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="formulario-adicionar-carro">
      <h2>Adicionar um novo veículo</h2>      
      <div className="campos-formulario">
        <label>
          Fabricante:
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Exemplo: Fiat"
          />
        </label>
      </div>
      <div className="campos-formulario">
        <label>
          Modelo:
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Exemplo: Palio"
          />
        </label>
      </div>
      <button type="submit" className="botao-inserir">Inserir veículo</button>
      </div>
    </form>
  );
}
