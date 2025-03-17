import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import SoftwareGrid from './components/SoftwareGrid';
import BlogGrid from './components/BlogGrid';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('software-grid');
  const [theme, setTheme] = useState('light');

  // 初始化主题
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  // 切换主题
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="container">
      <Header>
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            aria-label={`切换到${theme === 'light' ? '深色' : '浅色'}模式`}
          />
          <span className="slider">
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
          </span>
        </label>
      </Header>
      
      <div className="tabs">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="tab-content">
          {activeTab === 'software-grid' && <SoftwareGrid />}
          {activeTab === 'blog-grid' && <BlogGrid />}
          {activeTab === 'about' && (
            <div className="tab-pane">
              <h2>关于我们</h2>
              <p>我们致力于为用户提供优质的软件导航服务，帮助用户快速找到所需的软件工具。</p>
              <p>本平台收录了各类优质软件，包括开发工具、设计软件、办公软件和实用工具等多个类别。</p>
            </div>
          )}
          {/* 其他标签页内容 */}
        </div>
      </div>
      
      <footer>
        <p>&copy; 2023 软件导航平台 版权所有</p>
      </footer>
    </div>
  );
}

export default App;
