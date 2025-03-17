import React from 'react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'software-grid', name: '软件导航' },
    { id: 'blog-grid', name: '博客导航' },  // 添加博客导航标签
    { id: 'about', name: '关于我们' },
    { id: 'contact', name: '联系方式' },
    { id: 'help', name: '帮助中心' }
  ];

  return (
    <div className="tab-buttons">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;