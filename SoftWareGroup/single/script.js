document.addEventListener('DOMContentLoaded', function() {
    // 软件数据
    const softwareData = [
        {
            id: 1,
            name: "Visual Studio Code",
            description: "轻量级但功能强大的代码编辑器，支持多种编程语言和扩展插件。",
            link: "https://code.visualstudio.com/",
            category: "development",
            icon: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons/icons/file_type_vscode.svg",
            tutorial: "https://code.visualstudio.com/docs"
        },
        {
            id: 2,
            name: "Adobe Photoshop",
            description: "专业的图像处理软件，提供强大的图像编辑和设计功能。",
            link: "https://www.adobe.com/products/photoshop.html",
            category: "design",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png"
        },
        {
            id: 3,
            name: "Microsoft Office",
            description: "包含Word、Excel、PowerPoint等办公软件的综合套件。",
            link: "https://www.office.com/",
            category: "office",
            icon: "https://icons8.com/icon/6kZdxe7t8OL1/microsoft-office-2019"
        },
        // ... 其他软件数据保持不变，只添加icon属性 ...
        {
            id: 4,
            name: "7-Zip",
            description: "高效的文件压缩和解压缩工具，支持多种压缩格式。",
            link: "https://www.7-zip.org/",
            category: "utility",
            icon: "https://7-zip.org/7ziplogo.png"
        },
        {
            id: 5,
            name: "IntelliJ IDEA",
            description: "功能强大的Java集成开发环境，支持多种框架和工具。",
            link: "https://www.jetbrains.com/idea/",
            category: "development",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/512px-IntelliJ_IDEA_Icon.svg.png"
        },
        {
            id: 6,
            name: "Figma",
            description: "基于浏览器的协作设计工具，用于UI/UX设计和原型制作。",
            link: "https://www.figma.com/",
            category: "design",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/512px-Figma-logo.svg.png"
        },
        {
            id: 7,
            name: "Notion",
            description: "集笔记、知识库、任务管理于一体的协作平台。",
            link: "https://www.notion.so/",
            category: "office",
            icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
        },
        {
            id: 8,
            name: "CCleaner",
            description: "系统优化和清理工具，可清理垃圾文件和修复注册表问题。",
            link: "https://www.ccleaner.com/",
            category: "utility",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/CCleaner_icon.svg/512px-CCleaner_icon.svg.png"
        },
        {
            id: 9,
            name: "GitHub Desktop",
            description: "GitHub的官方桌面客户端，简化Git和GitHub的使用流程。",
            link: "https://desktop.github.com/",
            category: "development",
            icon: "https://desktop.github.com/images/desktop-icon.svg"
        },
        {
            id: 10,
            name: "Sketch",
            description: "专为UI/UX设计师打造的矢量绘图应用程序。",
            link: "https://www.sketch.com/",
            category: "design",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/512px-Sketch_Logo.svg.png"
        },
        {
            id: 11,
            name: "Trello",
            description: "基于看板的项目管理工具，适用于个人和团队任务管理。",
            link: "https://trello.com/",
            category: "office",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/512px-Trello-logo-blue.svg.png"
        },
        {
            id: 12,
            name: "Malwarebytes",
            description: "强大的恶意软件检测和清除工具，保护计算机安全。",
            link: "https://www.malwarebytes.com/",
            category: "utility",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Malwarebytes_Logo.svg/512px-Malwarebytes_Logo.svg.png"
        }
    ];

    // 初始化软件格子
    const gridContainer = document.querySelector('.grid-container');
    
    function renderSoftwareGrid(filter = 'all') {
        gridContainer.innerHTML = '';
        
        const filteredSoftware = filter === 'all' 
            ? softwareData 
            : softwareData.filter(software => software.category === filter);
        
        filteredSoftware.forEach(software => {
            const card = document.createElement('div');
            card.className = 'software-card';
            card.dataset.category = software.category;
            
            card.innerHTML = `
                <div class="card-header">
                    <div class="card-icon">
                        <img src="${software.icon}" alt="${software.name} icon">
                    </div>
                    <h3>${software.name}</h3>
                </div>
                <div class="card-body">
                    <div class="card-description">${software.description}</div>
                    <div class="card-buttons">
                        <a href="${software.link}" class="card-link" target="_blank">访问官网</a>
                        <a href="${software.tutorial}" class="card-link tutorial-link" target="_blank">学习教程</a>
                    </div>
                </div>
            `;
            
            gridContainer.appendChild(card);
        });
    }
    
    // 初始渲染所有软件
    renderSoftwareGrid();
    
    // 标签页切换功能
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // 添加当前活动状态
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 分类筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加当前活动状态
            button.classList.add('active');
            
            // 根据筛选条件渲染软件格子
            const filter = button.getAttribute('data-filter');
            renderSoftwareGrid(filter);
        });
    });
    
    // 搜索功能（可选）

    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索软件...';
    searchInput.className = 'search-input';

    searchContainer.appendChild(searchInput);

    // 将搜索框放在分类筛选的前面
    const categoryFilter = document.querySelector('.category-filter');
    categoryFilter.insertBefore(searchContainer, categoryFilter.firstChild);
    
    document.querySelector('.category-filter').prepend(searchContainer);
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            // 如果搜索框为空，显示当前筛选类别的所有软件
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            renderSoftwareGrid(activeFilter);
            return;
        }
        
        // 根据搜索词筛选软件
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        const filteredByCategory = activeFilter === 'all' 
            ? softwareData 
            : softwareData.filter(software => software.category === activeFilter);
            
        const filteredBySearch = filteredByCategory.filter(software => 
            software.name.toLowerCase().includes(searchTerm) || 
            software.description.toLowerCase().includes(searchTerm)
        );
        
        // 渲染搜索结果
        gridContainer.innerHTML = '';
        
        if (filteredBySearch.length === 0) {
            const noResult = document.createElement('div');
            noResult.className = 'no-result';
            noResult.textContent = '没有找到匹配的软件';
            gridContainer.appendChild(noResult);
            return;
        }
        
        filteredBySearch.forEach(software => {
            const card = document.createElement('div');
            card.className = 'software-card';
            card.dataset.category = software.category;
            
            card.innerHTML = `
                <div class="card-header">
                    <div class="card-icon">
                        <img src="${software.icon}" alt="${software.name} icon">
                    </div>
                    <h3>${software.name}</h3>
                </div>
                <div class="card-body">
                    <div class="card-description">${software.description}</div>
                    <a href="${software.link}" class="card-link" target="_blank">访问官网</a>
                </div>
            `;
            
            gridContainer.appendChild(card);
        });
    });
});