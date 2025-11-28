// LegalMind - النظام الداخلي لمجلس النواب الأردني
// النظام الجديد مع البيانات الديناميكية من API

// نظام إدارة البيانات الديناميكية
class DataManager {
    constructor() {
        this.siteData = null;
        this.isDataLoaded = false;
    }

    async loadSiteData() {
        try {
            const response = await fetch('/api/site/data');
            if (response.ok) {
                this.siteData = await response.json();
                this.isDataLoaded = true;
                console.log('✅ بيانات الموقع تم تحميلها بنجاح');
                return this.siteData;
            }
        } catch (error) {
            console.error('❌ فشل في تحميل بيانات الموقع:', error);
        }
        
        // Fallback to static data if API fails
        this.siteData = this.getStaticData();
        this.isDataLoaded = true;
        return this.siteData;
    }

    getStaticData() {
        return {
            meta: {
                title: "النظام الداخلي لمجلس النواب الأردني",
                edition: "الطبعة الحادية عشر",
                year: "١٤٤٤هـ - ٢٠٢٣م",
                totalChapters: 24,
                totalArticles: 184,
                totalPages: 99
            },
            hero: {
                title: "النظام الداخلي",
                subtitle: "لمجلس النواب الأردني",
                description: "١٤٤٤هـ - ٢٠٢٣م - مع جميع التعديلات",
                badge: "الطبعة الحادية عشر"
            },
            team: {
                members: [
                    {
                        name: "فرحان الخوالدة",
                        role: "مشارك في مشروع الزمالة البرلمانية",
                        badge: "صندوق الملك عبدالله الثاني"
                    },
                    {
                        name: "سلمى بجق",
                        role: "مشاركة في مشروع الزمالة البرلمانية", 
                        badge: "صندوق الملك عبدالله الثاني"
                    }
                ],
                description: "مشاركون في مشروع الزمالة البرلمانية - أحد برامج صندوق الملك عبدالله الثاني"
            },
            about: {
                title: "عن منصة LegalMind",
                description: "منصة LegalMind هي مبادرة رقمية تهدف إلى توفير النظام الداخلي لمجلس النواب الأردني بشكل سهل ومتاح للجميع. تم تطوير المنصة كجزء من مشروع الزمالة البرلمانية بهدف تعزيز الشفافية والوصول إلى المعلومات التشريعية."
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
            ],
            quickNav: [],
            features: []
        };
    }

    getChapters() {
        return this.siteData?.chapters || [];
    }

    getQuickNav() {
        return this.siteData?.quickNav || [];
    }

    getHeroData() {
        return this.siteData?.hero || {};
    }

    getTeamData() {
        return this.siteData?.team || {};
    }

    getAboutData() {
        return this.siteData?.about || {};
    }

    getMetaData() {
        return this.siteData?.meta || {};
    }

    // البحث في المحتوى
    search(query) {
        if (!query.trim() || !this.isDataLoaded) return [];
        
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
        if (searchTerms.length === 0) return [];

        const results = [];
        const chapters = this.getChapters();

        chapters.forEach(chapter => {
            chapter.articles.forEach(article => {
                const searchText = `${article.title} ${article.content} ${chapter.title}`.toLowerCase();
                if (searchTerms.every(term => searchText.includes(term))) {
                    results.push({
                        id: article.id,
                        chapterId: chapter.id,
                        chapterTitle: chapter.title,
                        articleNumber: article.number,
                        articleTitle: article.title,
                        content: article.content
                    });
                }
            });
        });

        return results;
    }
}

// النظام الأساسي مع البيانات الديناميكية
const dataManager = new DataManager();

// LegalMind Navigation System - المحدث
class NavigationSystem {
    constructor() {
        this.currentChapter = null;
        this.currentArticle = null;
        this.isSidebarOpen = true;
        this.isMobileMenuOpen = false;
        this.bookmarks = JSON.parse(localStorage.getItem('legalmind-bookmarks')) || [];
        
        this.initializeNavigation();
    }

    async initializeNavigation() {
        await this.setupEventListeners();
        this.setupScrollEffects();
        this.setupBookmarkButton();
        this.updateStatistics();
    }

    async setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                this.isMobileMenuOpen = !this.isMobileMenuOpen;
                navLinks.classList.toggle('active', this.isMobileMenuOpen);
                mobileMenuBtn.classList.toggle('active', this.isMobileMenuOpen);
            });
        }

        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebarContent = document.querySelector('.sidebar-content');
        
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                this.isSidebarOpen = !this.isSidebarOpen;
                sidebarContent.classList.toggle('active', this.isSidebarOpen);
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.isMobileMenuOpen = false;
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });

        // Handle browser navigation
        window.addEventListener('popstate', (event) => {
            this.handlePopState(event);
        });

        // Handle scroll events
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        // Handle resize events
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Sidebar search
        const sidebarSearch = document.querySelector('.sidebar-search-input');
        if (sidebarSearch) {
            sidebarSearch.addEventListener('input', (e) => {
                this.filterChapters(e.target.value);
            });
        }

        // Load data and render
        await this.loadAndRenderData();
    }

    async loadAndRenderData() {
        await dataManager.loadSiteData();
        this.renderChaptersTree();
        this.renderQuickNavigation();
        this.updateHeroSection();
        this.updateTeamSection();
        this.updateAboutSection();
        this.updateWelcomeMessage();
    }

    filterChapters(query) {
        const chapters = document.querySelectorAll('.chapter-item');
        const normalizedQuery = query.toLowerCase().trim();

        chapters.forEach(chapter => {
            const link = chapter.querySelector('.chapter-link');
            const text = link.textContent.toLowerCase();
            
            if (text.includes(normalizedQuery)) {
                chapter.style.display = 'block';
            } else {
                chapter.style.display = 'none';
            }
        });
    }

    renderChaptersTree() {
        const chaptersTree = document.getElementById('chaptersTree');
        if (!chaptersTree) return;

        chaptersTree.innerHTML = '';

        const chapters = dataManager.getChapters();
        chapters.forEach(chapter => {
            const chapterItem = document.createElement('div');
            chapterItem.className = 'chapter-item';
            
            const chapterLink = document.createElement('a');
            chapterLink.href = `#${chapter.id}`;
            chapterLink.className = 'chapter-link';
            chapterLink.textContent = chapter.title;
            chapterLink.setAttribute('data-chapter', chapter.id);
            
            chapterLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadChapter(chapter.id);
            });

            chapterItem.appendChild(chapterLink);
            chaptersTree.appendChild(chapterItem);
        });
    }

    renderQuickNavigation() {
        const quickNavGrid = document.getElementById('quickNavGrid');
        if (!quickNavGrid) return;

        quickNavGrid.innerHTML = '';

        const quickNav = dataManager.getQuickNav();
        const chapters = dataManager.getChapters();

        quickNav.forEach(navItem => {
            const chapter = chapters.find(ch => ch.id === navItem.id);
            if (!chapter) return;

            const navElement = document.createElement('div');
            navElement.className = 'quick-nav-item';
            navElement.setAttribute('data-chapter', navItem.id);
            
            navElement.innerHTML = `
                <div class="nav-icon">${navItem.icon}</div>
                <h3>${navItem.title}</h3>
                <p>${navItem.description}</p>
                <div class="quick-nav-meta">
                    <span>${chapter.articles.length} مادة</span>
                    <span>الفصل ${chapter.number}</span>
                </div>
            `;

            navElement.addEventListener('click', () => {
                this.loadChapter(navItem.id);
            });

            quickNavGrid.appendChild(navElement);
        });
    }

    updateHeroSection() {
        const heroData = dataManager.getHeroData();
        if (!heroData) return;

        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroBadge = document.querySelector('.hero-badge');

        if (heroTitle) {
            heroTitle.innerHTML = `
                ${heroData.title}
                <span class="highlight">${heroData.subtitle}</span>
            `;
        }

        if (heroSubtitle) {
            heroSubtitle.textContent = heroData.description;
        }

        if (heroBadge && heroData.badge) {
            heroBadge.innerHTML = `<span>${heroData.badge}</span>`;
        }
    }

    updateTeamSection() {
        const teamData = dataManager.getTeamData();
        if (!teamData || !teamData.members) return;

        // This will be implemented when we update the team section in HTML
        console.log('Team data loaded:', teamData);
    }

    updateAboutSection() {
        const aboutData = dataManager.getAboutData();
        if (!aboutData) return;

        // This will be implemented when we update the about section in HTML
        console.log('About data loaded:', aboutData);
    }

    updateWelcomeMessage() {
        const welcomeHeader = document.querySelector('.welcome-header h2');
        const welcomeDescription = document.querySelector('.welcome-header p');
        
        if (welcomeHeader) {
            welcomeHeader.textContent = `مرحباً بكم في منصة ${dataManager.getMetaData().title || 'LegalMind'}`;
        }
        
        if (welcomeDescription) {
            welcomeDescription.textContent = dataManager.getMetaData().title + ' مع جميع التعديلات';
        }
    }

    setupBookmarkButton() {
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', () => {
                this.toggleBookmark();
            });
        }
    }

    toggleBookmark() {
        if (!this.currentArticle) return;

        const bookmarkIndex = this.bookmarks.findIndex(b => b.id === this.currentArticle.id);
        
        if (bookmarkIndex > -1) {
            // Remove bookmark
            this.bookmarks.splice(bookmarkIndex, 1);
            this.showNotification('تم إزالة المقالة من الإشارات المرجعية', 'info');
        } else {
            // Add bookmark
            this.bookmarks.push({
                id: this.currentArticle.id,
                title: this.currentArticle.title,
                chapter: this.currentChapter.title,
                timestamp: new Date().toISOString()
            });
            this.showNotification('تم إضافة المقالة إلى الإشارات المرجعية', 'success');
        }

        // Save to localStorage
        localStorage.setItem('legalmind-bookmarks', JSON.stringify(this.bookmarks));
        
        // Update bookmark button state
        this.updateBookmarkButton();
    }

    updateBookmarkButton() {
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        if (!bookmarkBtn || !this.currentArticle) return;

        const isBookmarked = this.bookmarks.some(b => b.id === this.currentArticle.id);
        bookmarkBtn.innerHTML = isBookmarked ? 
            '<span>🔖</span> محفوظة' : 
            '<span>🔖</span> حفظ';
        
        bookmarkBtn.classList.toggle('active', isBookmarked);
    }

    loadChapter(chapterId) {
        const chapters = dataManager.getChapters();
        const chapter = chapters.find(ch => ch.id === chapterId);
        if (!chapter) return;

        this.currentChapter = chapter;
        this.currentArticle = null;

        // Update UI
        this.updateActiveChapter(chapterId);
        this.renderChapterContent(chapter);
        this.updateBreadcrumb(chapter.title);
        this.updateURL(chapterId);

        // Scroll to content
        this.scrollToContent();

        // Update bookmark button
        this.updateBookmarkButton();
    }

    loadArticle(articleId) {
        const chapters = dataManager.getChapters();
        let foundChapter = null;
        let foundArticle = null;

        for (const chapter of chapters) {
            const article = chapter.articles.find(art => art.id === articleId);
            if (article) {
                foundChapter = chapter;
                foundArticle = article;
                break;
            }
        }

        if (!foundChapter || !foundArticle) return;

        this.currentChapter = foundChapter;
        this.currentArticle = foundArticle;

        // Update UI
        this.updateActiveChapter(foundChapter.id);
        this.renderArticleContent(foundChapter, foundArticle);
        this.updateBreadcrumb(foundChapter.title, foundArticle.title);
        this.updateURL(foundChapter.id, articleId);

        // Scroll to content
        this.scrollToContent();

        // Update bookmark button
        this.updateBookmarkButton();
    }

    renderChapterContent(chapter) {
        const welcomeMessage = document.getElementById('welcomeMessage');
        const chapterContent = document.getElementById('chapterContent');
        const searchResults = document.getElementById('searchResults');

        // Hide other sections
        if (welcomeMessage) welcomeMessage.style.display = 'none';
        if (searchResults) searchResults.style.display = 'none';

        // Show chapter content
        if (chapterContent) {
            chapterContent.style.display = 'block';
            chapterContent.innerHTML = this.generateChapterHTML(chapter);
        }

        // Add event listeners to article links
        this.attachArticleEventListeners();
    }

    renderArticleContent(chapter, article) {
        const welcomeMessage = document.getElementById('welcomeMessage');
        const chapterContent = document.getElementById('chapterContent');
        const searchResults = document.getElementById('searchResults');

        // Hide other sections
        if (welcomeMessage) welcomeMessage.style.display = 'none';
        if (searchResults) searchResults.style.display = 'none';

        // Show chapter content
        if (chapterContent) {
            chapterContent.style.display = 'block';
            chapterContent.innerHTML = this.generateArticleHTML(chapter, article);
        }
    }

    generateChapterHTML(chapter) {
        let html = `
            <div class="article-header">
                <h2>${chapter.title}</h2>
                <div class="article-meta">
                    ${chapter.articles.length} مادة | الفصل ${chapter.number}
                </div>
            </div>
            <div class="article-content">
        `;

        chapter.articles.forEach(article => {
            html += `
                <div class="legal-article" id="${article.id}">
                    <h3 class="article-title">
                        <span class="article-number">${article.number}</span>
                        ${article.title}
                    </h3>
                    <div class="article-body">
                        ${this.formatArticleContent(article.content)}
                    </div>
                </div>
            `;
        });

        html += `</div>`;
        return html;
    }

    generateArticleHTML(chapter, article) {
        const allArticles = this.getAllArticles();
        const currentIndex = allArticles.findIndex(a => a.id === article.id);
        const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
        const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

        return `
            <div class="article-header">
                <h2>${chapter.title}</h2>
                <div class="article-meta">
                    المادة ${article.number} | الفصل ${chapter.number}
                </div>
            </div>
            <div class="article-content">
                <div class="legal-article" id="${article.id}">
                    <h3 class="article-title">
                        <span class="article-number">${article.number}</span>
                        ${article.title}
                    </h3>
                    <div class="article-body">
                        ${this.formatArticleContent(article.content)}
                    </div>
                </div>
                
                <div class="article-navigation">
                    <button class="nav-btn prev-btn" ${!prevArticle ? 'disabled' : ''} onclick="navigation.loadArticle('${prevArticle.id}')">
                        ← المادة السابقة
                    </button>
                    <button class="nav-btn next-btn" ${!nextArticle ? 'disabled' : ''} onclick="navigation.loadArticle('${nextArticle.id}')">
                        المادة التالية →
                    </button>
                </div>
            </div>
        `;
    }

    formatArticleContent(content) {
        const paragraphs = content.split('\n').filter(p => p.trim());
        let html = '';
        
        paragraphs.forEach(paragraph => {
            if (/^[أ-ي]\./.test(paragraph.trim())) {
                html += `<h4>${paragraph.trim()}</h4>`;
            } else {
                html += `<p>${paragraph.trim()}</p>`;
            }
        });
        
        return html;
    }

    attachArticleEventListeners() {
        document.querySelectorAll('.article-body').forEach(body => {
            body.addEventListener('click', (e) => {
                const link = e.target.closest('a[data-article]');
                if (link) {
                    e.preventDefault();
                    const articleId = link.getAttribute('data-article');
                    this.loadArticle(articleId);
                }
            });
        });
    }

    getAllArticles() {
        let allArticles = [];
        const chapters = dataManager.getChapters();
        
        chapters.forEach(chapter => {
            chapter.articles.forEach(article => {
                allArticles.push({
                    id: article.id,
                    number: article.number,
                    chapterId: chapter.id,
                    chapterNumber: chapter.number
                });
            });
        });
        return allArticles.sort((a, b) => a.number - b.number);
    }

    updateActiveChapter(activeChapterId) {
        // Update sidebar
        document.querySelectorAll('.chapter-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-chapter') === activeChapterId) {
                link.classList.add('active');
            }
        });

        // Update quick navigation
        document.querySelectorAll('.quick-nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-chapter') === activeChapterId) {
                item.classList.add('active');
            }
        });
    }

    updateBreadcrumb(...items) {
        const breadcrumb = document.getElementById('breadcrumb');
        if (!breadcrumb) return;

        let html = '<a href="#home" onclick="navigation.goHome()">الرئيسية</a>';
        
        items.forEach(item => {
            html += ` <span class="breadcrumb-separator">/</span> `;
            html += `<span>${item}</span>`;
        });

        breadcrumb.innerHTML = html;
    }

    updateURL(chapterId, articleId = null) {
        let url = `#${chapterId}`;
        if (articleId) {
            url += `-${articleId}`;
        }
        
        window.history.pushState({ chapterId, articleId }, '', url);
    }

    handlePopState(event) {
        const hash = window.location.hash.substring(1);
        
        if (!hash) {
            this.goHome();
            return;
        }

        const parts = hash.split('-');
        const chapterId = parts[0];
        const articleId = parts[1];

        if (articleId) {
            this.loadArticle(articleId);
        } else {
            this.loadChapter(chapterId);
        }
    }

    goHome() {
        this.currentChapter = null;
        this.currentArticle = null;

        const welcomeMessage = document.getElementById('welcomeMessage');
        const chapterContent = document.getElementById('chapterContent');
        const searchResults = document.getElementById('searchResults');

        if (welcomeMessage) welcomeMessage.style.display = 'block';
        if (chapterContent) chapterContent.style.display = 'none';
        if (searchResults) searchResults.style.display = 'none';

        this.updateBreadcrumb();
        this.updateActiveChapter(null);
        window.history.pushState({}, '', '#home');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update bookmark button
        this.updateBookmarkButton();
    }

    scrollToContent() {
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
            contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    setupScrollEffects() {
        this.handleScroll();
    }

    handleScroll() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        this.updateActiveChapterOnScroll();
    }

    updateActiveChapterOnScroll() {
        const chapters = document.querySelectorAll('.legal-article');
        const sidebarLinks = document.querySelectorAll('.chapter-link');
        
        let currentActive = null;
        
        chapters.forEach(chapter => {
            const rect = chapter.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentActive = chapter.id.split('-')[0];
            }
        });

        if (currentActive) {
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-chapter') === currentActive) {
                    link.classList.add('active');
                }
            });
        }
    }

    handleResize() {
        if (window.innerWidth <= 768) {
            this.isSidebarOpen = false;
            const sidebarContent = document.querySelector('.sidebar-content');
            if (sidebarContent) {
                sidebarContent.classList.remove('active');
            }
        } else {
            this.isSidebarOpen = true;
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('legalmind-theme', newTheme);
        
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('legalmind-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    updateStatistics() {
        const meta = dataManager.getMetaData();
        
        const chaptersCount = document.getElementById('chaptersCount');
        const articlesCount = document.getElementById('articlesCount');
        const pagesCount = document.getElementById('pagesCount');
        
        if (chaptersCount) chaptersCount.textContent = meta.totalChapters || 0;
        if (articlesCount) articlesCount.textContent = meta.totalArticles || 0;
        if (pagesCount) pagesCount.textContent = meta.totalPages || 0;
    }

    showNotification(message, type = 'info') {
        document.querySelectorAll('.notification').forEach(notification => {
            notification.remove();
        });

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }
}

// LegalMind Search System - المحدث
class SearchSystem {
    constructor() {
        this.currentResults = [];
        this.searchTimeout = null;
        
        this.initializeSearch();
    }

    initializeSearch() {
        this.setupSearchEventListeners();
        this.setupGlobalSearch();
    }

    setupSearchEventListeners() {
        const globalSearch = document.getElementById('globalSearch');
        if (globalSearch) {
            globalSearch.addEventListener('input', (e) => {
                this.handleSearchInput(e.target.value);
            });

            globalSearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(e.target.value);
                }
            });

            globalSearch.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.clearSearch();
                    e.target.blur();
                }
            });
        }

        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = document.getElementById('globalSearch').value;
                this.performSearch(query);
            });
        }
    }

    setupGlobalSearch() {
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('globalSearch');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }
        });
    }

    handleSearchInput(query) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        const suggestions = document.getElementById('searchSuggestions');
        if (!suggestions) return;

        if (query.length < 2) {
            suggestions.classList.remove('show');
            return;
        }

        this.searchTimeout = setTimeout(() => {
            this.showSearchSuggestions(query);
        }, 300);
    }

    showSearchSuggestions(query) {
        const suggestions = document.getElementById('searchSuggestions');
        if (!suggestions) return;

        const results = dataManager.search(query).slice(0, 5);
        
        if (results.length === 0) {
            suggestions.classList.remove('show');
            return;
        }

        suggestions.innerHTML = results.map(result => `
            <div class="suggestion-item" data-article="${result.id}">
                <div class="suggestion-title">
                    <strong>${result.articleTitle}</strong>
                    <span class="suggestion-chapter">${result.chapterTitle}</span>
                </div>
                <div class="suggestion-preview">
                    ${this.highlightText(this.getPreview(result.content, query), query)}
                </div>
            </div>
        `).join('');

        suggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const articleId = item.getAttribute('data-article');
                this.selectSuggestion(articleId);
            });
        });

        suggestions.classList.add('show');
    }

    performSearch(query) {
        if (!query.trim()) {
            this.clearSearch();
            return;
        }

        this.currentResults = dataManager.search(query);
        this.displaySearchResults(query, this.currentResults);
        
        const suggestions = document.getElementById('searchSuggestions');
        if (suggestions) {
            suggestions.classList.remove('show');
        }

        this.updateSearchURL(query);
    }

    getPreview(content, query, maxLength = 200) {
        const normalizedContent = this.normalizeText(content);
        const normalizedQuery = this.normalizeText(query);
        const queryTerms = normalizedQuery.split(' ').filter(term => term.length > 2);

        let bestPosition = -1;
        let bestTerm = '';

        for (const term of queryTerms) {
            const position = normalizedContent.indexOf(term);
            if (position !== -1 && (bestPosition === -1 || position < bestPosition)) {
                bestPosition = position;
                bestTerm = term;
            }
        }

        if (bestPosition === -1) {
            return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
        }

        const start = Math.max(0, bestPosition - 50);
        const end = Math.min(content.length, start + maxLength);
        let preview = content.substring(start, end);

        if (start > 0) preview = '...' + preview;
        if (end < content.length) preview = preview + '...';

        return preview;
    }

    highlightText(text, query) {
        if (!query.trim()) return text;

        const terms = query.split(' ').filter(term => term.length > 2);
        let highlightedText = text;

        terms.forEach(term => {
            const regex = new RegExp(`(${this.escapeRegex(term)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark class="search-highlight">$1</mark>');
        });

        return highlightedText;
    }

    normalizeText(text) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u064B-\u065F]/g, '')
            .replace(/[أإآ]/g, 'ا')
            .replace(/[ة]/g, 'ه')
            .replace(/[ى]/g, 'ي');
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    selectSuggestion(articleId) {
        this.clearSearch();
        navigation.loadArticle(articleId);
    }

    viewSearchResult(articleId) {
        this.clearSearch();
        navigation.loadArticle(articleId);
    }

    clearSearch() {
        const searchInput = document.getElementById('globalSearch');
        const suggestions = document.getElementById('searchSuggestions');
        const searchResults = document.getElementById('searchResults');

        if (searchInput) searchInput.value = '';
        if (suggestions) suggestions.classList.remove('show');
        if (searchResults) searchResults.style.display = 'none';

        this.currentResults = [];

        if (!navigation.currentChapter) {
            navigation.goHome();
        } else if (navigation.currentArticle) {
            navigation.loadArticle(navigation.currentArticle.id);
        } else {
            navigation.loadChapter(navigation.currentChapter.id);
        }
    }

    updateSearchURL(query) {
        const encodedQuery = encodeURIComponent(query);
        window.history.pushState({ searchQuery: query }, '', `#search?q=${encodedQuery}`);
    }

    handleSearchURL() {
        const hash = window.location.hash.substring(1);
        if (hash.startsWith('search?q=')) {
            const query = decodeURIComponent(hash.split('?q=')[1]);
            this.performSearch(query);
        }
    }
}

// LegalMind Main Application - المحدث
class LegalMindApp {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    async init() {
        try {
            this.showLoading();

            // Initialize components
            window.navigation = new NavigationSystem();
            window.searchSystem = new SearchSystem();

            // Load saved theme
            navigation.loadTheme();

            // Handle initial URL
            this.handleInitialURL();

            // Setup share functionality
            this.setupShareFunctionality();

            // Setup images fallback
            this.setupImageFallbacks();

            this.hideLoading();
            this.isInitialized = true;

            console.log('✅ LegalMind initialized successfully with dynamic data');
            
        } catch (error) {
            console.error('❌ Failed to initialize LegalMind:', error);
            this.showError('فشل في تحميل التطبيق. يرجى تحديث الصفحة.');
        }
    }

    setupImageFallbacks() {
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', () => {
                const placeholder = img.closest('.feature-icon, .member-avatar, .logo-image');
                if (placeholder) {
                    placeholder.innerHTML = '<div class="image-placeholder">📄</div>';
                }
            });
        });
    }

    handleInitialURL() {
        const hash = window.location.hash.substring(1);
        
        if (!hash || hash === 'home') {
            navigation.goHome();
            return;
        }

        if (hash.startsWith('search?')) {
            searchSystem.handleSearchURL();
            return;
        }

        const parts = hash.split('-');
        const chapterId = parts[0];
        const articleId = parts[1];

        if (articleId) {
            navigation.loadArticle(articleId);
        } else if (chapterId) {
            navigation.loadChapter(chapterId);
        }
    }

    setupShareFunctionality() {
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn && navigator.share) {
            shareBtn.addEventListener('click', () => {
                this.shareContent();
            });
        } else if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.copyToClipboard(window.location.href);
            });
        }
    }

    async shareContent() {
        const shareData = {
            title: 'النظام الداخلي لمجلس النواب الأردني',
            text: 'اطلع على النظام الداخلي لمجلس النواب الأردني عبر منصة LegalMind',
            url: window.location.href
        };

        try {
            await navigator.share(shareData);
        } catch (error) {
            this.copyToClipboard(window.location.href);
        }
    }

    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            navigation.showNotification('تم نسخ الرابط إلى الحافظة', 'success');
        } catch (error) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            navigation.showNotification('تم نسخ الرابط إلى الحافظة', 'success');
        }
    }

    showLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = 'flex';
        }
    }

    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
    }

    showError(message) {
        const errorOverlay = document.createElement('div');
        errorOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            color: white;
            font-size: 18px;
        `;
        
        errorOverlay.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; margin-bottom: 20px;">❌</div>
                <h3>خطأ في التحميل</h3>
                <p>${message}</p>
                <button onclick="location.reload()" style="
                    background: #dc2626;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                ">إعادة تحميل الصفحة</button>
            </div>
        `;
        
        document.body.appendChild(errorOverlay);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.legalMindApp = new LegalMindApp();
});
