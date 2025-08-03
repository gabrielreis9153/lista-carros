import { useState, useEffect } from "react";
import CarList from "./components/car-list/CarList";
import AddCarForm from "./components/form/AddCarForm";

export default function App() {
  const [carros, setCarros] = useState([]);
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/brands.json").then(res => res.json()),
      fetch("/cars_by_brand.json").then(res => res.json())
    ])
      .then(([marcasData, carrosData]) => {
        setMarcas(marcasData);
        const agrupado = agruparPorMarca(carrosData, marcasData);
        setCarros(agrupado);
      })
      .catch((err) => console.error("Erro ao carregar os dados:", err));
  }, []);

  function agruparPorMarca(lista, marcas) {
    const marcasMap = {};

    lista.forEach((carro) => {
      const marcaId = carro.brand;
      const nomeMarca = marcas.find(m => m.id === marcaId)?.name || `Marca ${marcaId}`;

      if (!marcasMap[nomeMarca]) {
        marcasMap[nomeMarca] = {
          brand: nomeMarca,
          models: []
        };
      }

      marcasMap[nomeMarca].models.push({ name: carro.nome_modelo });
    });

    return Object.values(marcasMap);
  }

  function handleAddCar(brand, model) {
    const marcaExistente = carros.find(c => c.brand === brand);

    let novaLista;

    if (marcaExistente) {
      novaLista = carros.map(c =>
        c.brand === brand
          ? { ...c, models: [...c.models, { name: model }] }
          : c
      );
    } else {
      novaLista = [...carros, {
        brand: brand,
        models: [{ name: model }]
      }];
    }

    setCarros(novaLista);
  }

  return (
    <div>
      <h1>Lista de Veículos</h1>
      <AddCarForm onAddCar={handleAddCar} />
      <CarList brands={carros} />
    </div>
  );
}


