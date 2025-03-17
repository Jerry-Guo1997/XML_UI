import React, { useState } from 'react';
import softwareData from '../data/software.json';

const SoftwareGrid = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSoftware = softwareData.softwareList.filter(software => {
    const matchesFilter = filter === 'all' || software.category === filter;
    const matchesSearch = software.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         software.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="software-section">
      <div className="search-container">
        <input
          type="text"
          placeholder="搜索软件..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-filter">
        <span>分类筛选：</span>
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          全部
        </button>
        <button
          className={`filter-btn ${filter === 'development' ? 'active' : ''}`}
          onClick={() => setFilter('development')}
        >
          开发工具
        </button>
        {/* 其他分类按钮 */}
      </div>

      <div className="grid-container">
        {filteredSoftware.map(software => (
          <div key={software.id} className="software-card">
            <div className="card-header">
              <div className="card-icon">
                <img src={software.icon} alt={`${software.name} icon`} />
              </div>
              <h3>{software.name}</h3>
            </div>
            <div className="card-body">
              <div className="card-description">{software.description}</div>
              <div className="card-buttons">
                <a href={software.link} className="card-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas"></i> 访问官网
                </a>
                {software.tutorial && (
                  <a href={software.tutorial} className="card-link tutorial-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas"></i> 学习教程
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareGrid;