const onSubmit = () => {
    let loadingElement = document.getElementById('loading')
    loadingElement.classList.remove('invisible')
    loadingElement.classList.add('visible')

    let loading = true
    setTimeout(() => {
        loading = false
        loadingElement.classList.remove('visible')
        loadingElement.classList.add('invisible')

        window.location.href = './dashboard.html'
    }, 2000)
};

let ctx = document.getElementById('myChart');
ctx.style.minHeight = '15rem'
ctx.style.maxHeight = '25rem'

new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['jan', 'fev', 'abr', 'maio', 'jun'],
    datasets: [{
        label: 'Recebíveis',
        data: [10000, 10000, 10000, 10000, 10000, 10000],
        borderWidth: 2,
        borderColor: '#4DB6AC',
        backgroundColor: '#4DB6AC'
    },
    {
        label: 'Investimentos',
        data: [0, 0, 0, 2500, 3000, 3250],
        borderWidth: 2,
        borderColor: '#00BCD4',
        backgroundColor: '#00BCD4'
    },
    {
        label: 'Gastos',
        data: [6500, 7000, 6750, 7250, 7000, 6750],
        borderWidth: 2,
        borderColor: '#FFCA28',
        backgroundColor: '#FFCA28'
    },
    {
        label: 'Dívidas',
        data: [10000, 6500, 3500, 250, 0, 0],
        borderWidth: 2,
        borderColor: '#E91E63',
        backgroundColor: '#E91E63'
    }
]
    },
    options: {
    responsive: true,
    aspectRation: 1,
    interaction: {
        mode: 'index',
    },
    scales: {
        y: {
        ticks: {
            stepSize: 250
        },
        suggestedMax: 12000
        }
    },
    plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Movimentações do mês',
            font: {
                size: 16,
            },
            padding: 16,
            align: 'start'
        },
    },
    maintainAspectRatio: false,
    }
});