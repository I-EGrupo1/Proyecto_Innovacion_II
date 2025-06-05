 // Gráfico de barras
 new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['Visitas médicas', 'Entrega alimentos', 'Apoyo domiciliario', 'Revisión técnica'],
      datasets: [{
        label: 'Solicitudes',
        data: [85, 70, 55, 30],
        backgroundColor: ['#3498db', '#e67e22', '#2ecc71', '#9b59b6']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });

  // Gráfico de línea
  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [{
        label: 'Solicitudes acumuladas',
        data: [45, 90, 130, 170],
        fill: false,
        borderColor: '#2c3e50',
        tension: 0.3
      }]
    },
    options: { responsive: true }
  });

  // Gráfico circular
  new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
      labels: ['Urgente', 'Movilidad reducida', 'Aislamiento', 'Otros'],
      datasets: [{
        label: 'Distribución',
        data: [40, 30, 20, 10],
        backgroundColor: ['#e74c3c', '#f1c40f', '#1abc9c', '#95a5a6']
      }]
    },
    options: { responsive: true }
  });

  // Gráfico radar
  new Chart(document.getElementById('radarChart'), {
    type: 'radar',
    data: {
      labels: ['Acceso médico', 'Alimentos', 'Internet', 'Transporte', 'Apoyo social'],
      datasets: [
        {
          label: 'Urbano',
          data: [80, 90, 70, 60, 85],
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          borderColor: '#3498db'
        },
        {
          label: 'Rural',
          data: [50, 60, 40, 30, 55],
          backgroundColor: 'rgba(231, 76, 60, 0.2)',
          borderColor: '#e74c3c'
        }
      ]
    },
    options: { responsive: true }
  });

  // Gráfico de área (línea con relleno)
  new Chart(document.getElementById('areaChart'), {
    type: 'line',
    data: {
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      datasets: [{
        label: 'Tareas Programadas',
        data: [5, 8, 7, 6, 9],
        fill: true,
        backgroundColor: 'rgba(46, 204, 113, 0.3)',
        borderColor: '#2ecc71'
      }]
    },
    options: { responsive: true }
  });