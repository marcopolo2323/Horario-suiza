// backend/server.js
const express = require('express');
const cors = require('cors');
const students = require('./data/students');
const schedules = require('./data/Schedules');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/horario/:dni', (req, res) => {
    const dni = req.params.dni;
    const student = students.find(s => s.dni === dni);
    if (student) {
        const scheduleKey = `ciclo${student.ciclo.split(' ')[1]}`;
        const schedule = schedules[scheduleKey];
        if (schedule) {
            res.json({ ...student, horario: schedule });
        } else {
            res.status(404).json({ error: 'Horario no encontrado para el ciclo' });
        }
    } else {
        res.status(404).json({ error: 'Estudiante no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
