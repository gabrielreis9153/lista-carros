import { useState } from "react";
import { Eye } from "lucide-react";
import "./CarList.css";

export default function CarList({ brands }) {
  const [visibleModel, setVisibleModel] = useState(null);

  function toggleImage(modelName) {
    setVisibleModel((prev) => (prev === modelName ? null : modelName));
  }

  function getImagePath(modelName) {
    const normalized = modelName.toLowerCase().replace(/\s+/g, "");
    return `/img/${normalized}.png`;
  }

  return (
    <div>
      <h2>Veículos cadastrados</h2>
      {brands.length === 0 ? (
        <p>Nenhum veículo cadastrado ainda.</p>
      ) : (
        brands.map((marca, index) => (
          <div key={index} className="brand-container">
            <div className="brand-block">
              <h3>{marca.brand}</h3>
              {marca.models.length === 0 ? (
                <p>Não há modelos disponíveis.</p>
              ) : (
                <ul>
                  {marca.models.map((modelo, i) => (
                    <li key={i}>
                      {modelo.name}
                      <button
                        onClick={() => toggleImage(modelo.name)}
                        className="eye-button"
                      >
                        <Eye size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {}
            <div className="image-side">
              {marca.models.map(
                (modelo) =>
                  visibleModel === modelo.name && (
                    <img
                      key={modelo.name}
                      src={getImagePath(modelo.name)}
                      alt={modelo.name}
                      className="car-image"
                      onError={(e) => {
                        e.target.onerror = null; // evita loop
                        e.target.src = "https://placecats.com/300/200"; // imagem de fallback
                        e.target.alt = `Imagem não encontrada para ${modelo.name}`;
                      }}
                    />
                  )
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
