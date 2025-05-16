Chart.defaults.backgroundColor = '#FFFFFF';
Chart.defaults.borderColor = '#FFFFFF';
Chart.defaults.color = '#FFFFFF';
Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'Rajdhani';
Chart.defaults.plugins.tooltip.enabled = false;



const ctx = document.getElementById('skills');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels:
            [
                "Drinking Coffe",
                "VS Code",
                "Front-End",
                "JS",
                "Learning",
                "Back-End",
                "Valorant"
            ],

        datasets:
            [{
                data: [4, 4, 3, 2, 4, 1, 2],
                backgroundColor:
                    [
                        '#A330AF',
                        '#78236C',
                        '#9A2B8B',
                        '#A330AF',
                        '#78236C',
                        '#9A2B8B',
                        '#A330AF'
                    ]
            }]

    },
    options: {
        datasets:{
            bar:{
                borderRadius: 10
            }
        },
        plugins:{
            legend: {
                labels:{
                    font:{
                        size: 0
                    }
                }
            },
            font:{
                size: 200
            }
        },
        scales: {
            x: {
                grid:{
                    display: false
                }
            },
            y: {
                grid:{
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                beginAtZero: true,
                ticks: {
                    padding: 20,
                    maxTickLimit: 5,
                    callback: ((context, index) => {
                        let response;
                        if (context === 1) {
                            response = 'Genin';
                        } else if (context === 2) {
                            response = 'Chūnin';
                        } else if (context === 3) {
                            response = 'Jōnin';
                        } else if (context === 4) {
                            response = 'Kage';
                        }
                        return response;
                    })
                }
            }
        }
    }
})