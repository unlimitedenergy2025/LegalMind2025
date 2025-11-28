const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// تحميل البيانات من ملف JSON
function loadData() {
    try {
        const dataPath = path.join(__dirname, 'data.json');
        if (fs.existsSync(dataPath)) {
            const rawData = fs.readFileSync(dataPath, 'utf8');
            return JSON.parse(rawData);
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
    return null;
}

// حفظ البيانات إلى ملف JSON
function saveData(data) {
    try {
        const dataPath = path.join(__dirname, 'data.json');
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error('Error saving data:', error);
        return false;
    }
}

// API Routes
app.get('/api/message', (req, res) => {
    const data = loadData();
    res.json({ 
        message: 'مرحباً بكم في منصة LegalMind - النظام الداخلي لمجلس النواب الأردني',
        status: 'success',
        version: data?.siteInfo?.version || '1.0.0'
    });
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'LegalMind Backend'
    });
});

// API لإدارة البيانات
app.get('/api/admin/data', (req, res) => {
    const data = loadData();
    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ error: 'Data not found' });
    }
});

app.post('/api/admin/save', (req, res) => {
    const newData = req.body;
    
    // تحديث وقت التعديل الأخير
    if (!newData.admin) newData.admin = {};
    newData.admin.lastUpdated = new Date().toISOString();
    
    if (saveData(newData)) {
        res.json({ 
            status: 'success', 
            message: 'Data saved successfully',
            timestamp: newData.admin.lastUpdated
        });
    } else {
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// API لبيانات الموقع
app.get('/api/site/data', (req, res) => {
    const data = loadData();
    if (data) {
        // إرجاع البيانات المنظمة للموقع الرئيسي
        const siteData = {
            meta: {
                title: data.siteInfo?.name || "LegalMind",
                edition: data.siteInfo?.version || "الطبعة الحادية عشر", 
                year: data.siteInfo?.year || "١٤٤٤هـ - ٢٠٢٣م",
                totalChapters: data.chapters?.length || 0,
                totalArticles: data.chapters?.reduce((total, chapter) => total + (chapter.articles?.length || 0), 0) || 0,
                totalPages: 99
            },
            hero: data.hero,
            team: data.team,
            about: data.about,
            chapters: data.chapters || [],
            quickNav: data.quickNav || [],
            features: data.features || []
        };
        res.json(siteData);
    } else {
        res.status(404).json({ error: 'Site data not found' });
    }
});

// خدمة لوحة التحكم
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// خدمة الملفات الإدارية
app.get('/admin.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.js'));
});

app.get('/admin.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.css'));
});

// خدمة index.html لجميع المسارات (للموقع الرئيسي)
app.get('*', (req, res) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/admin')) {
        // تجاهل مسارات API ولوحة التحكم
        res.status(404).json({ error: 'Endpoint not found' });
    } else {
        // خدمة الموقع الرئيسي
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`✅ LegalMind Server running on port ${PORT}`);
    console.log(`📍 الموقع الرئيسي: http://localhost:${PORT}`);
    console.log(`📍 لوحة التحكم: http://localhost:${PORT}/admin`);
    console.log(`📍 API Health: http://localhost:${PORT}/api/health`);
});
