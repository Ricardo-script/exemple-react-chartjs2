import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // importar para poder fazer funcionar os rótulos

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels, // registrar para poder funcionar os rótulos
    Title,
    Tooltip,
    Legend,
);

export function ChartBars() {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Gráfico de barras',
            },
            datalabels: { //rótulos 
                display: true,
                color: 'gray',
                labels: {
                    title: {
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        },
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [50, 56, 80, 75, 63, 40, 77],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Bar options={options} data={data} />;

}

