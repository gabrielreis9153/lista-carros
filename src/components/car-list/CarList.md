CarList é um componente React que exibe uma lista de veículos com suas respectivas marcas, e, ao lado de cada veículo, tem um ícone de olho que foi importado do Lucide React que exibe o respectivo carro. 

Props: 

- Array: 

Cada item deve ter a seguinte estrutura: 

[
    {
        brand: "Nome da marca".
        models: [
            name: "Nome do veículo"
        ]
    }
]

- As imagens devem estar na pasta 'img' dentro da pasta pública. Caso não estejam, exibe a imagem de um gatinho. 

- Estilos na pasta de mesmo nome, com final .css

Obs: 

- clicando uma vez no olho, exibe o respectivo carro, clicando novamente, ele deixa de exibir. Apenas um carro é exibido por vez.