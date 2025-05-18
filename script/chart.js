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
                "JS",
                "Front-End",
                "VS Code",
                "Learning",
                "Back-End",
                "Valorant",
                'Bootstrap',
                'Vue'
            ],

        datasets:
            [{
                data: [4, 2, 2.5, 3, 3.5, 1.5, 2.5, 3 , 0.5],
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
                        } else if (context >= 4) {
                            response = 'Kage';
                        } else if (context === 0){
                            response = 'Academy Student';
                        }
                        return response;
                    })
                }
            }
        }
    }
})


