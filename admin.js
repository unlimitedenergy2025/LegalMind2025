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
        // في الواقع، هنا نتحقق من الجلسة أو التوكن
        // لكن لأغراض العرض، نعرض شاشة الدخول مباشرة
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
    }

    async loadData() {
        try {
            const response = await fetch('/api/admin/data');
            if (response.ok) {
                this.currentData = await response.json();
            } else {
                // إذا لم توجد بيانات، نستخدم البيانات الافتراضية
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
                description: "منصة LegalMind هي مبادرة رقمية تهدف إلى توفير النظام الداخلي لمجلس النواب الأردني بشكل سهل ومتاح للجميع. تم تطوير المنصة كجزء من مشروع الزمالة البرلمانية بهدف تعزيز الشفافية والوصول إلى المعلومات التشريعية."
            },
            settings: {
                siteName: "LegalMind",
                siteDescription: "النظام الداخلي لمجلس النواب الأردني",
                version: "الطبعة الحادية عشر"
            },
            chapters: [
                {
                    id: "chapter1",
                    number: 1,
                    title: "الفصل الأول: افتتاح الدورة العادية",
                    articles: [
                        {
                            id: "article1",
                            number: 1,
                            title: "المادة 1",
                            content: "يسمى هذا النظام (النظام الداخلي لمجلس النواب لسنة 2013) ويعمل به من تاريخ نشره في الجريدة الرسمية."
                        }
                    ]
                }
            ]
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

            // تحديث الموقع الرئيسي إذا كان متاحاً
            this.updateMainSite();
        } catch (error) {
            console.error('Error saving data:', error);
            this.showNotification('خطأ في حفظ البيانات', 'error');
        }
    }

    updateMainSite() {
        // إرسال إشعار لتحديث الموقع الرئيسي
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
        // هنا يمكن إضافة نافذة تعديل الفصل
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

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// تهيئة لوحة التحكم عند تحميل الصفحة
let adminPanel;
document.addEventListener('DOMContentLoaded', () => {
    adminPanel = new AdminPanel();
});
