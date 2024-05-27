// backend/data/students.js
module.exports = [
    {
        dni: '12345678',
        nombre: 'Juan Pérez',
        ciclo: 'Ciclo 1',
        horario: [
            { fecha: '2024-05-20', curso: 'Matemáticas', hora: '08:00 - 10:00' }, // Lunes
            { fecha: '2024-05-21', curso: 'Historia', hora: '10:00 - 12:00' }, // Martes
        ],
    },
    {
        dni: '87654321',
        nombre: 'Maria Lopez',
        ciclo: 'Ciclo 2',
        horario: [
            { fecha: '2024-05-20', curso: 'Física', hora: '08:00 - 10:00' }, // Lunes
            { fecha: '2024-05-21', curso: 'Química', hora: '10:00 - 12:00' }, // Martes
        ],
    },
    {
        dni: '76543211',
        nombre: 'Luis Martinez',
        ciclo: 'Ciclo 3',
        horario: [
            { fecha: '2024-05-20', curso: 'Ingles', hora: '08:00 - 10:00' },
            { fecha: '2024-05-20', curso: 'Ingles', hora: '10:00 - 12:00' },
            { fecha: '2024-05-21', curso: 'Programacion Distribuida', hora: '08:00 - 10:00' },
            { fecha: '2024-05-21', curso: 'Programacion Concurrente', hora: '10:00 - 12:00' },
            { fecha: '2024-05-22', curso: 'Investigacion Tecnologica', hora: '08:00 - 10:00' },
            { fecha: '2024-05-22', curso: 'Experiencias Formativas', hora: '10:00 - 12:00' },
            { fecha: '2024-05-23', curso: 'Ingles', hora: '08:00 - 10:00' },
            { fecha: '2024-05-23', curso: 'Ingles', hora: '10:00 - 12:00' },
            { fecha: '2024-05-24', curso: 'Desarrollo Backend', hora: '08:00 - 10:00' },
            { fecha: '2024-05-24', curso: 'Ingles', hora: '10:00 - 12:00' },
        ],
    },
    // Añade más estudiantes aquí...
];
