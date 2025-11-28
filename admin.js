// لوحة تحكم LegalMind - النظام الداخلي لمجلس النواب الأردني

class AdminPanel {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.currentData = {};
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAuthentication();
        this.loadData();
    }

    setupEventListeners() {
        // نموذج الدخول
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // تسجيل الخروج
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.handleLogout();
        });

        // التنقل بين الأقسام
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.getAttribute('data-tab'));
            });
        });

        // نماذج الحفظ
        document.getElementById('heroForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveHeroData();
        });

        document.getElementById('teamForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveTeamData();
        });

        document.getElementById('aboutForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveAboutData();
        });

        document.getElementById('settingsForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveSettings();
        });

        // إضافة فصل جديد
        document.getElementById('addChapterBtn').addEventListener('click', () => {
            this.addNewChapter();
        });

        // ⬇️⬇️⬇️ إضافة نظام الإحصائيات ⬇️⬇️⬇️
        this.setupAnalytics();
    }

    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // بيانات الدخول
        const validUsername = 'Farhan#';
        const validPassword = '2000617154';

        if (username === validUsername && password === validPassword) {
            this.currentUser = username;
            this.isLoggedIn = true;
            this.showDashboard();
            this.showNotification('تم الدخول بنجاح!', 'success');
        } else {
            this.showNotification('اسم المستخدم أو كلمة المرور غير صحيحة', 'error');
        }
    }

    handleLogout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.showLoginScreen();
        this.showNotification('تم تسجيل الخروج', 'info');
    }

    showLoginScreen() {
        document.getElementById('loginScreen').style.display = 'flex';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('loginForm').reset();
    }

    showDashboard() {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('adminName').textContent = `مرحباً، ${this.currentUser}`;
        
        // تحميل البيانات الحالية
        this.loadCurrentData();
    }

    checkAuthentication() {
        this.showLoginScreen();
    }

    switchTab(tabName) {
        // إخفاء جميع الأقسام
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // إلغاء تنشيط جميع الأزرار
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // إظهار القسم المطلوب
        document.getElementById(`${tabName}-tab`).classList.add('active');
        
        // تنشيط الزر المطلوب
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // إذا كان قسم الفصول، نحدث القائمة
        if (tabName === 'chapters') {
            this.loadChaptersList();
        }
        
        // إذا كان قسم الإحصائيات، نحدث البيانات
        if (tabName === 'analytics') {
            this.loadAnalytics();
        }
    }

    async loadData() {
        try {
            const response = await fetch('/api/admin/data');
            if (response.ok) {
                this.currentData = await response.json();
            } else {
                this.currentData = this.getDefaultData();
            }
        } catch (error) {
            console.error('Error loading data:', error);
            this.currentData = this.getDefaultData();
        }
    }

    getDefaultData() {
        return {
            hero: {
                title: "النظام الداخلي",
                subtitle: "لمجلس النواب الأردني", 
                description: "١٤٤٤هـ - ٢٠٢٣م - مع جميع التعديلات"
            },
            team: {
                member1: {
                    name: "فرحان الخوالدة",
                    role: "مشارك في مشروع الزمالة البرلمانية"
                },
                member2: {
                    name: "سلمى بجق", 
                    role: "مشاركة في مشروع الزمالة البرلمانية"
                }
            },
            about: {
                title: "عن منصة LegalMind",
                description: "منصة LegalMind هي مبادرة رقمية تهدف إلى توفير النظام الداخلي لمجلس النواب الأردني بشكل سهل ومتاح للجميع."
            },
            settings: {
                siteName: "LegalMind",
                siteDescription: "النظام الداخلي لمجلس النواب الأردني",
                version: "الطبعة الحادية عشر"
            },
            chapters: []
        };
    }

    loadCurrentData() {
        // تحميل بيانات الهيرو
        document.getElementById('heroTitle').value = this.currentData.hero?.title || '';
        document.getElementById('heroSubtitle').value = this.currentData.hero?.subtitle || '';
        document.getElementById('heroDescription').value = this.currentData.hero?.description || '';

        // تحميل بيانات الفريق
        document.getElementById('member1Name').value = this.currentData.team?.member1?.name || '';
        document.getElementById('member1Role').value = this.currentData.team?.member1?.role || '';
        document.getElementById('member2Name').value = this.currentData.team?.member2?.name || '';
        document.getElementById('member2Role').value = this.currentData.team?.member2?.role || '';

        // تحميل بيانات عن المنصة
        document.getElementById('aboutTitle').value = this.currentData.about?.title || '';
        document.getElementById('aboutDescription').value = this.currentData.about?.description || '';

        // تحميل الإعدادات
        document.getElementById('siteName').value = this.currentData.settings?.siteName || '';
        document.getElementById('siteDescription').value = this.currentData.settings?.siteDescription || '';
        document.getElementById('siteVersion').value = this.currentData.settings?.version || '';
    }

    async saveHeroData() {
        this.currentData.hero = {
            title: document.getElementById('heroTitle').value,
            subtitle: document.getElementById('heroSubtitle').value,
            description: document.getElementById('heroDescription').value
        };

        await this.saveData();
        this.showNotification('تم حفظ نصوص الهيرو بنجاح', 'success');
    }

    async saveTeamData() {
        this.currentData.team = {
            member1: {
                name: document.getElementById('member1Name').value,
                role: document.getElementById('member1Role').value
            },
            member2: {
                name: document.getElementById('member2Name').value,
                role: document.getElementById('member2Role').value
            }
        };

        await this.saveData();
        this.showNotification('تم حفظ معلومات الفريق بنجاح', 'success');
    }

    async saveAboutData() {
        this.currentData.about = {
            title: document.getElementById('aboutTitle').value,
            description: document.getElementById('aboutDescription').value
        };

        await this.saveData();
        this.showNotification('تم حفظ معلومات المنصة بنجاح', 'success');
    }

    async saveSettings() {
        this.currentData.settings = {
            siteName: document.getElementById('siteName').value,
            siteDescription: document.getElementById('siteDescription').value,
            version: document.getElementById('siteVersion').value
        };

        await this.saveData();
        this.showNotification('تم حفظ الإعدادات بنجاح', 'success');
    }

    async saveData() {
        try {
            const response = await fetch('/api/admin/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.currentData)
            });

            if (!response.ok) {
                throw new Error('Failed to save data');
            }

            this.updateMainSite();
        } catch (error) {
            console.error('Error saving data:', error);
            this.showNotification('خطأ في حفظ البيانات', 'error');
        }
    }

    updateMainSite() {
        if (window.parent && window.parent.navigation) {
            window.parent.navigation.showNotification('تم تحديث المحتوى', 'success');
        }
    }

    loadChaptersList() {
        const chaptersList = document.getElementById('chaptersList');
        if (!chaptersList) return;

        const chapters = this.currentData.chapters || [];
        
        if (chapters.length === 0) {
            chaptersList.innerHTML = '<p class="no-chapters">لا توجد فصول مضافة حالياً</p>';
            return;
        }

        chaptersList.innerHTML = chapters.map(chapter => `
            <div class="chapter-item" data-chapter="${chapter.id}">
                <div class="chapter-header">
                    <h4 class="chapter-title">${chapter.title}</h4>
                    <div class="chapter-actions">
                        <button class="edit-btn" onclick="adminPanel.editChapter('${chapter.id}')">تعديل</button>
                        <button class="delete-btn" onclick="adminPanel.deleteChapter('${chapter.id}')">حذف</button>
                    </div>
                </div>
                <div class="chapter-info">
                    <p>عدد المواد: ${chapter.articles?.length || 0}</p>
                </div>
            </div>
        `).join('');
    }

    addNewChapter() {
        const chapterId = 'chapter_' + Date.now();
        const newChapter = {
            id: chapterId,
            number: (this.currentData.chapters?.length || 0) + 1,
            title: `الفصل الجديد ${(this.currentData.chapters?.length || 0) + 1}`,
            articles: []
        };

        if (!this.currentData.chapters) {
            this.currentData.chapters = [];
        }

        this.currentData.chapters.push(newChapter);
        this.saveData().then(() => {
            this.loadChaptersList();
            this.showNotification('تم إضافة الفصل الجديد', 'success');
        });
    }

    editChapter(chapterId) {
        this.showNotification('ميزة تعديل الفصل قيد التطوير', 'info');
    }

    deleteChapter(chapterId) {
        if (confirm('هل أنت متأكد من حذف هذا الفصل؟')) {
            this.currentData.chapters = this.currentData.chapters.filter(ch => ch.id !== chapterId);
            this.saveData().then(() => {
                this.loadChaptersList();
                this.showNotification('تم حذف الفصل', 'success');
            });
        }
    }

    // ⬇️⬇️⬇️ نظام الإحصائيات الجديد ⬇️⬇️⬇️
    setupAnalytics() {
        // أحداث الأزرار
        const refreshBtn = document.getElementById('refreshStats');
        const resetBtn = document.getElementById('resetStats');
        const exportBtn = document.getElementById('exportStats');

        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.loadAnalytics();
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetAnalytics();
            });
        }

        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportAnalytics();
            });
        }
    }

    async loadAnalytics() {
        try {
            this.setLoadingState(true);
            
            const response = await fetch('/api/analytics/stats');
            if (!response.ok) throw new Error('فشل في جلب الإحصائيات');
            
            const data = await response.json();
            
            if (data.success) {
                this.updateAnalyticsUI(data.data);
                this.showNotification('تم تحديث الإحصائيات بنجاح', 'success');
            } else {
                throw new Error(data.message || 'خطأ في البيانات');
            }
        } catch (error) {
            console.error('Error loading analytics:', error);
            this.showNotification('فشل في تحميل الإحصائيات', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    updateAnalyticsUI(stats) {
        // تحديث الأرقام الرئيسية
        if (document.getElementById('totalVisitors')) {
            document.getElementById('totalVisitors').textContent = stats.totalVisitors.toLocaleString();
        }
        if (document.getElementById('countriesCount')) {
            document.getElementById('countriesCount').textContent = Object.keys(stats.visitsByCountry || {}).length.toLocaleString();
        }
        if (document.getElementById('pagesCount')) {
            document.getElementById('pagesCount').textContent = (stats.popularPages || []).length.toLocaleString();
        }

        // تحديث قائمة الدول
        const countriesList = document.getElementById('countriesList');
        if (countriesList) {
            countriesList.innerHTML = '';
            
            Object.entries(stats.visitsByCountry || {})
                .sort((a, b) => b[1] - a[1])
                .forEach(([country, count]) => {
                    const countryItem = document.createElement('div');
                    countryItem.className = 'country-item';
                    countryItem.innerHTML = `
                        <span class="country-name">${this.getCountryName(country)}</span>
                        <span class="country-count">${count.toLocaleString()}</span>
                    `;
                    countriesList.appendChild(countryItem);
                });
        }

        // تحديث قائمة الصفحات
        const popularPages = document.getElementById('popularPages');
        if (popularPages) {
            popularPages.innerHTML = '';
            
            (stats.popularPages || []).forEach(item => {
                const pageItem = document.createElement('div');
                pageItem.className = 'page-item';
                pageItem.innerHTML = `
                    <span class="page-name">${item.page}</span>
                    <span class="page-count">${item.visits.toLocaleString()}</span>
                `;
                popularPages.appendChild(pageItem);
            });
        }

        // تحديث معلومات النظام
        if (document.getElementById('lastUpdate')) {
            document.getElementById('lastUpdate').textContent = new Date().toLocaleString('ar-EG');
        }
        if (document.getElementById('lastReset')) {
            document.getElementById('lastReset').textContent = new Date(stats.lastReset).toLocaleString('ar-EG');
        }
        if (document.getElementById('serverTime')) {
            document.getElementById('serverTime').textContent = new Date(stats.serverTime).toLocaleString('ar-EG');
        }
    }

    getCountryName(code) {
        const countryNames = {
            'JO': 'الأردن 🇯🇴',
            'SA': 'السعودية 🇸🇦', 
            'EG': 'مصر 🇪🇬',
            'AE': 'الإمارات 🇦🇪',
            'QA': 'قطر 🇶🇦',
            'KW': 'الكويت 🇰🇼',
            'BH': 'البحرين 🇧🇭',
            'OM': 'عمان 🇴🇲',
            'LB': 'لبنان 🇱🇧',
            'PS': 'فلسطين 🇵🇸',
            'SY': 'سوريا 🇸🇾',
            'IQ': 'العراق 🇮🇶',
            'YE': 'اليمن 🇾🇪',
            'غير معروف': 'غير معروف 🌍'
        };
        
        return countryNames[code] || `${code} 🌍`;
    }

    async resetAnalytics() {
        if (!confirm('هل أنت متأكد من إعادة تعيين جميع الإحصائيات؟ لا يمكن التراجع عن هذا الإجراء.')) {
            return;
        }

        try {
            const response = await fetch('/api/analytics/reset', {
                method: 'POST'
            });
            
            if (!response.ok) throw new Error('فشل في إعادة التعيين');
            
            const data = await response.json();
            
            if (data.success) {
                this.showNotification('تم إعادة تعيين الإحصائيات بنجاح', 'success');
                this.loadAnalytics();
            }
        } catch (error) {
            console.error('Error resetting analytics:', error);
            this.showNotification('فشل في إعادة تعيين الإحصائيات', 'error');
        }
    }

    exportAnalytics() {
        this.showNotification('ميزة التصدير قيد التطوير', 'info');
    }

    setLoadingState(isLoading) {
        const buttons = ['refreshStats', 'resetStats', 'exportStats'];
        const elements = ['totalVisitors', 'countriesCount', 'pagesCount'];
        
        buttons.forEach(btnId => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.classList.toggle('loading', isLoading);
                if (isLoading) {
                    btn.innerHTML = btn.innerHTML.replace('🔄', '⏳');
                } else {
                    btn.innerHTML = btn.innerHTML.replace('⏳', '🔄');
                }
            }
        });
        
        elements.forEach(elId => {
            const el = document.getElementById(elId);
            if (el) {
                el.classList.toggle('pulse', isLoading);
            }
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.textContent = message;
            notification.className = `notification ${type} show`;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
    }
}

// تهيئة لوحة التحكم عند تحميل الصفحة
let adminPanel;
document.addEventListener('DOMContentLoaded', () => {
    adminPanel = new AdminPanel();
});
