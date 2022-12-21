# Instalando Chartjs 2 para React

## Documentação Chartjs

| Documentação      | Link                                           |
| ----------------- | -----------------------------------------------|
| Chartjs           | https://chartjs-plugin-datalabels.netlify.app/ |
| React Chartjs 2   | https://react-chartjs-2.js.org/                |


## Instalação

```bash
yarn add chart.js react-chartjs-2
```

## Observações

Para o uso dos rótulos é necessários também instalar os plugins: chartjs-plugin-labels

## Instalação dos plugins de rótulos

```bash
yarn add chartjs-plugin-datalabels
````

## Registrando plugins

Logo após a instalação dos plugins, deve-se registrar os mesmos:

```javascript

import ChartDataLabels from 'chartjs-plugin-datalabels'; 
ChartJS.register(ChartDataLabels);

```

Feito isso basta inserir as opções, e os rótulos irão funcionar:
datalabels: {
                display: true,
                color: 'red',
            }

## Exemplo:
```javascript

import ChartDataLabels from 'chartjs-plugin-datalabels'; 
ChartJS.register(ChartDataLabels);

const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
            datalabels: { // rótulos
                display: true,
                color: 'red',
            }
        },
    };

```


## License

[MIT](https://choosealicense.com/licenses/mit/)