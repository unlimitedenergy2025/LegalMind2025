const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ خدمة الملفات الثابتة من الجذر مباشرة
app.use(express.static(__dirname));

// API Routes
app.get('/api/message', (req, res) => {
    res.json({ 
        message: 'مرحباً بكم في منصة LegalMind - النظام الداخلي لمجلس النواب الأردني',
        status: 'success',
        version: '1.0.0'
    });
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'LegalMind Backend'
    });
});

// ✅ خدمة index.html لجميع المسارات (من الجذر)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`✅ LegalMind Server running on port ${PORT}`);
    console.log(`📍 URL: http://localhost:${PORT}`);
});
