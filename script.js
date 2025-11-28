// LegalMind - النظام الداخلي لمجلس النواب الأردني
// البيانات الكاملة للنظام الداخلي

const legalSystem = {
    meta: {
        title: "النظام الداخلي لمجلس النواب الأردني",
        edition: "الطبعة الحادية عشر",
        year: "١٤٤٤هـ - ٢٠٢٣م",
        totalChapters: 24,
        totalArticles: 184,
        totalPages: 99
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
                    content: `يسمى هذا النظام (النظام الداخلي لمجلس النواب لسنة 2013) ويعمل به من تاريخ نشره في الجريدة الرسمية.`
                },
                {
                    id: "article2", 
                    number: 2,
                    title: "المادة 2",
                    content: `أ. تفتتح الدورة العادية لمجلس الأمة بمقتضى المادة 78 من الدستور بالاستماع إلى خطبة العرش، ثم ينصرف الأعيان والنواب كل إلى مجلسه.
ب. يبدأ انعقاد المجلس بتلاوة آيات من القرآن الكريم.`
                },
                {
                    id: "article3",
                    number: 3,
                    title: "المادة 3",
                    content: `أ. بعد انصراف النواب إلى مجلسهم، يعقد مجلس النواب جلسته الأولى، ويتولى الرئاسة الأقدم في النيابة فإن تساوى أكثر من نائب في الأقدمية فالنائب الأكثر نيابة بعدد الدورات فإن تساووا فالأكبر سنا بينهم، ويساعده أصغر عضويين حاضرين سنا وإذا تعذر قيام أي منهم بواجبه لسبب من الأسباب يجوز استخلافه بمن يليه سنا، وتنتهي مهمتهم بانتخاب رئيس المجلس.
ب. يمتنع على من تولى رئاسة الجلسة الافتتاحية من المنصوص عليهم في الفقرة (أ) من هذه المادة الترشح لموقع رئيس مجلس النواب في تلك الدورة.`
                },
                {
                    id: "article4",
                    number: 4,
                    title: "المادة 4",
                    content: `على كل نائب، قبل الشروع في عمله، أن يقسم اليمين أمام المجلس، سندا لأحكام المادة 80 من الدستور، بالنص التالي "أقسم بالله العظيم أن أكون مخلصا للملك والوطن، وأن أحافظ على الدستور وأن أخدم الأمة وأقوم بالواجبات الموكولة إلي حق القيام" على أن أي زيادة أو نقصان أو مخالفة لنص اليمين توجب إعادته.`
                },
                {
                    id: "article5",
                    number: 5,
                    title: "المادة 5",
                    content: `لا يجوز إجراء أي مناقشة أو إصدار أي قرار من المجلس قبل انتخاب رئيسه.`
                },
                {
                    id: "article6",
                    number: 6,
                    title: "المادة 6",
                    content: `بعد انتخاب المكتب الدائم ينتخب المجلس لجنة من أعضائه لوضع صيغة الرد على خطبة العرش وبعد أن يقرها المجلس يرافق أعضاء المجلس الرئيس لرفع الرد إلى الملك وذلك خلال أربعة عشر يوما من إلقاء خطبة العرش.`
                }
            ]
        },
        {
            id: "chapter2",
            number: 2,
            title: "الفصل الثاني: المكتب الدائم ووظائفه",
            articles: [
                {
                    id: "article7",
                    number: 7,
                    title: "المادة 7",
                    content: `أ. يتألف المكتب الدائم من الرئيس ونائبيه ومساعدين اثنين.
ب. اذا لم تفز امرأة بموقع الرئيس أو احد موقعي النائب الأول والثاني يقتصر حق الترشح لموقع احد مساعدي الرئيس على المرأة وفق تعليمات يضعها المكتب الدائم لهذه الغاية.
ج. اذا شغر منصب الرئيس لأي سبب من الأسباب الواردة في الفقرة (3) من المادة (69) من الدستور أو لأي سبب آخر يتولى نائب الرئيس رئاسة المجلس الى حين انتخاب رئيس جديد خلال مدة أسبوعين من تاريخ شغور المنصب واذا كان مجلس النواب غير منعقد يدعى مجلس الأمة الى الانعقاد بدورة استثنائية ينتخب فيها مجلس النواب رئيسا له وتمتد وظيفته الى يوم افتتاح الدورة العادية التالية.
د. عند شغور موقع احد نواب الرئيس أو المساعدين لأي سبب من الأسباب ينتخب المجلس من يحل محله في أول جلسة يعقدها وتمتد وظيفة المنتخب الى يوم افتتاح الدورة العادية التالية.`
                },
                {
                    id: "article8",
                    number: 8,
                    title: "المادة 8",
                    content: `يتولى رئيس المجلس المهام التالية:
أ. تمثيل المجلس والتكلم باسمه وطبقا لإرادته.
ب. مراعاة تطبيق أحكام الدستور والنظام الداخلي في مداولات المجلس وقراراته.
ج. وضع جدول أعمال كل جلسة من جلسات المجلس.
د. رئاسة الجلسات، وإعان افتتاحها وانتهائها وضبطها وإدارة النقاش فيها وتحديد موضوع البحث وإعطاء الإذن بالكلام.
هـ. إعلان قرارات المجلس ومتابعة تنفيذها.
و. اتخاذ الإجراءات اللازمة لحفظ كرامة المجلس وكرامة أعضائه.
ز. رئاسة الجهاز الإداري للمجلس.`
                },
                {
                    id: "article9",
                    number: 9,
                    title: "المادة 9",
                    content: `للرئيس حق الاشتراك في مناقشات المجلس، وفي هذه الحالة يتخلى عن كرسي الرئاسة ولا يعود إليه إلا بعد انتهاء النقاش وصدور قرار المجلس في الموضوع مدار البحث.`
                },
                {
                    id: "article10",
                    number: 10,
                    title: "المادة 10",
                    content: `أ. يتولى النائب الأول صلاحيات رئيس المجلس واختصاصاته في حال غيابه أو تعذر قيامه بمهامه أو اشتراكه في مناقشات المجلس أو عند بحث الأسئلة والاستجوابات والاقتراحات التي يقدمها الرئيس باعتباره نائبا في المجلس.
ب. يتولى النائب الثاني صلاحيات رئيس المجلس واختصاصاته في حال غياب الرئيس ونائبه الأول أو تعذر قيامهما بمهامهما أو اشتراكهما في مناقشات المجلس أو بحث الأسئلة والاستجوابات والاقتراحات التي يقدمانها باعتبارهما نائبين في المجلس.
ج. إذا تغيب الرئيس ونائباه او تعذر عليهم القيام بمهامهم يتولى رئاسة المجلس النائب الأقدم في النيابة فإن تساوى أكثر من نائب في الأقدمية فالنائب الأكثر نيابة بعدد الدورات فإن تساووا فالأكبر سنا بينهم.`
                }
            ]
        },
        {
            id: "chapter7",
            number: 7,
            title: "الفصل السابع: لجان المجلس",
            articles: [
                {
                    id: "article38",
                    number: 38,
                    title: "المادة 38",
                    content: `ينتخب المجلس في بدء كل دورة عادية أعضاء اللجان الدائمة التالية:
أ- اللجنة القانونية.
ب- اللجنة المالية.
ج- لجنة الاقتصاد والاستثمار.
د- لجنة الشؤون الخارجية.
هـ- اللجنة الإدارية.
و- لجنة التربية والتعليم.
ز- لجنة الشباب والرياضة والثقافة.
ح- لجنة التوجيه الوطني والإعلام.
ط- لجنة الصحة والغذاء.
ي- لجنة الزراعة والمياه.
ك- لجنة البيئة والمناخ.
ل- لجنة العمل والتنمية الاجتماعية والسكان.
م- لجنة الطاقة والثروة المعدنية.
ن- لجنة الخدمات العامة والنقل.
س- لجنة السياحة والآثار.
ع- لجنة الاقتصاد الرقمي والريادة.
ف- لجنة الحريات العامة وحقوق الإنسان.
ص- لجنة المرأة وشؤون الأسرة.
ق- لجنة الريف والبادية.
ر- لجنة فلسطين.`
                },
                {
                    id: "article39",
                    number: 39,
                    title: "المادة 39",
                    content: `تناط باللجنة القانونية المهام التالية:
أ. دراسة القوانين والاقتراحات بقوانين التي تتعلق بالدستور والانتخاب العام والتشريعات المدنية والجنائية والحقوقية والمحاكم والتنظيم القضائي والاتفاقيات القضائية وقوانين التنفيذ والأحوال الشخصية والجنسية والاستملاك والإيجار والدفاع والعفو عام والمخدرات والمؤثرات النفسية والسير والنقابات، وما في حكم تلك التشريعات، وأي قوانين لا تدخل في اختصاص لجنة أخرى وأي أمور تحال إليها من الرئيس أو المجلس.
ب. دراسة النظام الداخلي للمجلس واقتراحات تعديله.
ج. دراسة القضايا التي تتعلق بحصانة النواب.
د. مساعدة لجان المجلس الأخرى في صياغة النصوص التشريعية.
هـ. الإشراف على تطبيق مدونة السلوك ودراسة أي مقترحات بشأنها.
و. النظر في الشكاوى التي تقدم من النواب ضد أي جهة.
ز. النظر في أي مخالفة لمدونة السلوك.
ح. النظر في أي تصرف يسيء إلى سمعة المجلس وهيبته وأعضائه سواء أكان تحت القبة أم خارجها.
ط. دراسة الأمور المتعلقة بالفساد المالي والإداري في المؤسسات الرسمية العامة والمؤسسات العامة ومراقبة اجراءات مكافحة الفساد.`
                }
            ]
        },
        {
            id: "chapter11",
            number: 11,
            title: "الفصل الحادي عشر: نظام الكلام",
            articles: [
                {
                    id: "article97",
                    number: 97,
                    title: "المادة 97",
                    content: `لا يجوز لأحد أن يتكلم إلا بعد أن يطلب الكلام ويأذن له الرئيس، وإلا فللرئيس أن يمنعه من الكلام ويأمر بعدم إثبات أقواله في محضر الجلسة.`
                },
                {
                    id: "article98",
                    number: 98,
                    title: "المادة 98", 
                    content: `تقتيد طلبات الإذن بالكلام بترتيب تقديمها أو تسجيلها عبر اللوحة الإلكترونية ولا يجوز طلب الكلام في موضوع محال على إحدى اللجان قبل عرضه على جدول أعمال الجلسة.`
                },
                {
                    id: "article99",
                    number: 99,
                    title: "المادة 99",
                    content: `يأذن الرئيس بالكلام لطالبه حسب ترتيب الأسبقية في الطلب المشار إليه في المادة 98 من هذا النظام ويجوز لطالب الكلام التنازل عن دوره لغيره.`
                },
                {
                    id: "article100",
                    number: 100,
                    title: "المادة 100",
                    content: `ليس للرئيس ان يرفض الإذن بالكلام لغير سبب مشروع وعند الخلاف على ذلك يؤخذ رأي المجلس.`
                }
            ]
        },
        {
            id: "chapter16", 
            number: 16,
            title: "الفصل السادس عشر: الحصانة النيابية",
            articles: [
                {
                    id: "article144",
                    number: 144,
                    title: "المادة 144",
                    content: `لا يجوز خلال دورة انعقاد المجلس ملاحقة العضو جزائياً أو اتخاذ إجراءات جزائية أو إمارة بحقه أو إلقاء القبض عليه أو توقيفه إلا بإذن المجلس، باستثناء حالة الجرم الجنائي المشهود، وفي حالة القبض عليه بهذه الصورة يجب إعـام المجلس بذلك فوراً.`
                },
                {
                    id: "article145",
                    number: 145,
                    title: "المادة 145",
                    content: `يقدم رئيس الوزراء طلب الإذن باتخاذ الإجراءات الجزائية إلى رئيس المجلس، مشفوعا بمذكرة تشتمل على نوع الجرم ومكانه وزمانه والأدلة التي تستلزم اتخاذ إجراءات عاجلة.`
                },
                {
                    id: "article146",
                    number: 146,
                    title: "المادة 146", 
                    content: `يحيل الرئيس الطلب إلى اللجنة القانونية لفحصه والنظر فيه وتقديم تقرير عنه خلال مدة لا تتجاوز خمسة عشر يوماً، فإن لم يقدم التقرير خلال تلك المدة جاز للمجلس البت في الطلب مباشرة.`
                }
            ]
        }
    ],

    // Quick navigation items for important chapters
    quickNav: [
        {
            id: "chapter1",
            title: "افتتاح الدورة",
            description: "الإجراءات المتعلقة بافتتاح الدورة العادية للمجلس",
            icon: "🏛️",
            articlesCount: 6
        },
        {
            id: "chapter2", 
            title: "المكتب الدائم",
            description: "تشكيل واختصاصات المكتب الدائم للمجلس",
            icon: "👥",
            articlesCount: 4
        },
        {
            id: "chapter7",
            title: "لجان المجلس",
            description: "اللجان الدائمة واختصاصاتها ومهامها",
            icon: "📋",
            articlesCount: 20
        },
        {
            id: "chapter11",
            title: "نظام الكلام", 
            description: "القواعد المنظمة للكلام والمناقشات في المجلس",
            icon: "🎤",
            articlesCount: 24
        },
        {
            id: "chapter16",
            title: "الحصانة النيابية",
            description: "أحكام الحصانة النيابية والإجراءات المتعلقة بها",
            icon: "🛡️",
            articlesCount: 8
        }
    ],

    // Search index for fast searching
    searchIndex: [],

    // Initialize search index
    initializeSearchIndex: function() {
        this.searchIndex = [];
        this.chapters.forEach(chapter => {
            chapter.articles.forEach(article => {
                this.searchIndex.push({
                    id: article.id,
                    chapterId: chapter.id,
                    chapterTitle: chapter.title,
                    articleNumber: article.number,
                    articleTitle: article.title,
                    content: article.content,
                    searchText: `${article.title} ${article.content} ${chapter.title}`
                });
            });
        });
    },

    // Get chapter by ID
    getChapter: function(chapterId) {
        return this.chapters.find(chapter => chapter.id === chapterId);
    },

    // Get article by ID
    getArticle: function(articleId) {
        for (const chapter of this.chapters) {
            const article = chapter.articles.find(art => art.id === articleId);
            if (article) return { chapter, article };
        }
        return null;
    },

    // Search in content
    search: function(query) {
        if (!query.trim()) return [];
        
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
        if (searchTerms.length === 0) return [];

        return this.searchIndex.filter(item => {
            const text = item.searchText.toLowerCase();
            return searchTerms.every(term => text.includes(term));
        });
    },

    // Get statistics
    getStatistics: function() {
        let totalArticles = 0;
        this.chapters.forEach(chapter => {
            totalArticles += chapter.articles.length;
        });

        return {
            chapters: this.chapters.length,
            articles: totalArticles,
            pages: this.meta.totalPages
        };
    }
};

// LegalMind Navigation System
class NavigationSystem {
    constructor() {
        this.currentChapter = null;
        this.currentArticle = null;
        this.isSidebarOpen = true;
        this.isMobileMenuOpen = false;
        this.bookmarks = JSON.parse(localStorage.getItem('legalmind-bookmarks')) || [];
        
        this.initializeNavigation();
        this.setupEventListeners();
        this.updateStatistics();
    }

    initializeNavigation() {
        this.renderChaptersTree();
        this.renderQuickNavigation();
        this.setupScrollEffects();
        this.setupBookmarkButton();
    }

    setupEventListeners() {
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

        legalSystem.chapters.forEach(chapter => {
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

        legalSystem.quickNav.forEach(navItem => {
            const chapter = legalSystem.getChapter(navItem.id);
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
        const chapter = legalSystem.getChapter(chapterId);
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
        const result = legalSystem.getArticle(articleId);
        if (!result) return;

        const { chapter, article } = result;
        this.currentChapter = chapter;
        this.currentArticle = article;

        // Update UI
        this.updateActiveChapter(chapter.id);
        this.renderArticleContent(chapter, article);
        this.updateBreadcrumb(chapter.title, article.title);
        this.updateURL(chapter.id, articleId);

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
                    <button class="nav-btn prev-btn" ${!prevArticle ? 'disabled' : ''} onclick="${prevArticle ? `navigation.loadArticle('${prevArticle.id}')` : ''}">
                        ← المادة السابقة
                    </button>
                    <button class="nav-btn next-btn" ${!nextArticle ? 'disabled' : ''} onclick="${nextArticle ? `navigation.loadArticle('${nextArticle.id}')` : ''}">
                        المادة التالية →
                    </button>
                </div>
            </div>
        `;
    }

    formatArticleContent(content) {
        // Replace line breaks with paragraphs
        const paragraphs = content.split('\n').filter(p => p.trim());
        let html = '';
        
        paragraphs.forEach(paragraph => {
            // Check if paragraph starts with letter and dot (like "أ." or "ب.")
            if (/^[أ-ي]\./.test(paragraph.trim())) {
                html += `<h4>${paragraph.trim()}</h4>`;
            } else {
                html += `<p>${paragraph.trim()}</p>`;
            }
        });
        
        return html;
    }

    attachArticleEventListeners() {
        // Add click events for internal article references
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
        legalSystem.chapters.forEach(chapter => {
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
        this.handleScroll(); // Initial call
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

        // Update active chapter based on scroll position
        this.updateActiveChapterOnScroll();
    }

    updateActiveChapterOnScroll() {
        const chapters = document.querySelectorAll('.legal-article');
        const sidebarLinks = document.querySelectorAll('.chapter-link');
        
        let currentActive = null;
        
        chapters.forEach(chapter => {
            const rect = chapter.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentActive = chapter.id.split('-')[0]; // Get chapter id from article id
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
        // Adjust sidebar for mobile
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
        
        // Update theme button icon
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
        const stats = legalSystem.getStatistics();
        
        const chaptersCount = document.getElementById('chaptersCount');
        const articlesCount = document.getElementById('articlesCount');
        const pagesCount = document.getElementById('pagesCount');
        
        if (chaptersCount) chaptersCount.textContent = stats.chapters;
        if (articlesCount) articlesCount.textContent = stats.articles;
        if (pagesCount) pagesCount.textContent = stats.pages;
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(notification => {
            notification.remove();
        });

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }
}

// LegalMind Search System
class SearchSystem {
    constructor() {
        this.searchIndex = legalSystem.searchIndex;
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
            // Real-time search with debouncing
            globalSearch.addEventListener('input', (e) => {
                this.handleSearchInput(e.target.value);
            });

            // Enter key search
            globalSearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(e.target.value);
                }
            });

            // Clear search on escape
            globalSearch.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.clearSearch();
                    e.target.blur();
                }
            });
        }

        // Search button
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = globalSearch.value;
                this.performSearch(query);
            });
        }
    }

    setupGlobalSearch() {
        // Add search shortcut (Ctrl+K or Cmd+K)
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
        // Clear previous timeout
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        // Show/hide suggestions
        const suggestions = document.getElementById('searchSuggestions');
        if (!suggestions) return;

        if (query.length < 2) {
            suggestions.classList.remove('show');
            return;
        }

        // Debounce search
        this.searchTimeout = setTimeout(() => {
            this.showSearchSuggestions(query);
        }, 300);
    }

    showSearchSuggestions(query) {
        const suggestions = document.getElementById('searchSuggestions');
        if (!suggestions) return;

        const results = this.search(query).slice(0, 5); // Top 5 results
        
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

        // Add click events to suggestions
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

        this.currentResults = this.search(query);
        this.displaySearchResults(query, this.currentResults);
        
        // Hide suggestions
        const suggestions = document.getElementById('searchSuggestions');
        if (suggestions) {
            suggestions.classList.remove('show');
        }

        // Update URL
        this.updateSearchURL(query);
    }

    search(query) {
        if (!query.trim() || query.length < 2) {
            return [];
        }

        const searchTerms = query.toLowerCase()
            .split(' ')
            .filter(term => term.length > 2)
            .map(term => this.normalizeText(term));

        if (searchTerms.length === 0) {
            return [];
        }

        return this.searchIndex.filter(item => {
            const searchableText = this.normalizeText(item.searchText);
            return searchTerms.every(term => searchableText.includes(term));
        }).sort((a, b) => {
            // Sort by relevance
            const aScore = this.calculateRelevance(a, searchTerms);
            const bScore = this.calculateRelevance(b, searchTerms);
            return bScore - aScore;
        });
    }

    normalizeText(text) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u064B-\u065F]/g, '') // Remove Arabic diacritics
            .replace(/[أإآ]/g, 'ا')
            .replace(/[ة]/g, 'ه')
            .replace(/[ى]/g, 'ي');
    }

    calculateRelevance(item, searchTerms) {
        let score = 0;
        const normalizedContent = this.normalizeText(item.searchText);

        searchTerms.forEach(term => {
            // Higher score for matches in title
            if (this.normalizeText(item.articleTitle).includes(term)) {
                score += 10;
            }
            
            // Higher score for matches in chapter title
            if (this.normalizeText(item.chapterTitle).includes(term)) {
                score += 5;
            }
            
            // Score for content matches
            const contentMatches = (normalizedContent.match(new RegExp(term, 'g')) || []).length;
            score += contentMatches;
            
            // Bonus for exact article number match
            if (term === item.articleNumber.toString()) {
                score += 20;
            }
        });

        return score;
    }

    displaySearchResults(query, results) {
        const welcomeMessage = document.getElementById('welcomeMessage');
        const chapterContent = document.getElementById('chapterContent');
        const searchResults = document.getElementById('searchResults');

        // Hide other sections
        if (welcomeMessage) welcomeMessage.style.display = 'none';
        if (chapterContent) chapterContent.style.display = 'none';

        // Show search results
        if (searchResults) {
            searchResults.style.display = 'block';
            searchResults.innerHTML = this.generateSearchResultsHTML(query, results);
        }

        // Update breadcrumb
        navigation.updateBreadcrumb(`نتائج البحث: "${query}"`);

        // Scroll to results
        searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    generateSearchResultsHTML(query, results) {
        if (results.length === 0) {
            return `
                <div class="search-results-header">
                    <h2>لا توجد نتائج</h2>
                    <p>لم نتمكن من العثور على أي نتائج لبحثك عن: "${query}"</p>
                </div>
                <div class="search-suggestions-help">
                    <h3>اقتراحات للبحث:</h3>
                    <ul>
                        <li>تأكد من صحة الكلمات المفتاحية</li>
                        <li>جرب استخدام كلمات بحثية أكثر عمومية</li>
                        <li>ابحث برقم المادة (مثال: 144)</li>
                        <li>ابحث باسم الفصل (مثال: الحصانة النيابية)</li>
                    </ul>
                </div>
            `;
        }

        let html = `
            <div class="search-results-header">
                <h2>نتائج البحث</h2>
                <p>عثرنا على ${results.length} نتيجة لبحثك عن: "${query}"</p>
            </div>
            <div class="search-results-list">
        `;

        results.forEach(result => {
            html += `
                <div class="search-result-item" data-article="${result.id}">
                    <h4>
                        <span class="article-number">${result.articleNumber}</span>
                        ${this.highlightText(result.articleTitle, query)}
                        <span class="result-chapter">${result.chapterTitle}</span>
                    </h4>
                    <div class="result-content">
                        ${this.highlightText(this.getPreview(result.content, query), query)}
                    </div>
                    <button class="view-article-btn" onclick="searchSystem.viewSearchResult('${result.id}')">
                        عرض المادة كاملة
                    </button>
                </div>
            `;
        });

        html += `</div>`;
        return html;
    }

    getPreview(content, query, maxLength = 200) {
        const normalizedContent = this.normalizeText(content);
        const normalizedQuery = this.normalizeText(query);
        const queryTerms = normalizedQuery.split(' ').filter(term => term.length > 2);

        // Find the best match position
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
            // No direct match, return beginning of content
            return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
        }

        // Extract context around the match
        const start = Math.max(0, bestPosition - 50);
        const end = Math.min(content.length, start + maxLength);
        let preview = content.substring(start, end);

        // Add ellipsis if needed
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

        // Show welcome message or current content
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

// LegalMind Main Application
class LegalMindApp {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    async init() {
        try {
            // Show loading spinner
            this.showLoading();

            // Initialize legal system
            legalSystem.initializeSearchIndex();

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

            // Hide loading spinner
            this.hideLoading();

            // Mark as initialized
            this.isInitialized = true;

            console.log('✅ LegalMind initialized successfully');
            
        } catch (error) {
            console.error('❌ Failed to initialize LegalMind:', error);
            this.showError('فشل في تحميل التطبيق. يرجى تحديث الصفحة.');
        }
    }

    setupImageFallbacks() {
        // Add error handlers for images
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', () => {
                // Replace with placeholder or hide
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

        // Handle chapter/article URLs
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
            // Fallback for browsers that don't support Web Share API
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
            // Fallback: copy to clipboard
            this.copyToClipboard(window.location.href);
        }
    }

    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            navigation.showNotification('تم نسخ الرابط إلى الحافظة', 'success');
        } catch (error) {
            // Fallback for older browsers
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
        // Create error overlay
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