import React, { useState } from 'react';

const BlogGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 示例博客数据
  const blogs = [
    {
      id: 1,
      title: 'React 最佳实践指南',
      author: '张三',
      date: '2023-12-01',
      excerpt: '本文将介绍 React 开发中的一些最佳实践，帮助你写出更好的代码...',
      tags: ['React', '前端开发'],
      category: 'tech',
      link: 'https://example.com/blog/1'
    },
    {
      id: 2,
      title: '设计系统的构建之路',
      author: '李四',
      date: '2023-12-02',
      excerpt: '如何构建一个可扩展的设计系统？本文将分享我的经验...',
      tags: ['设计系统', 'UI/UX'],
      category: 'design',
      link: 'https://example.com/blog/2'
    },
    // 可以添加更多博客数据
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesFilter = activeFilter === 'all' || blog.category === activeFilter;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="tab-pane active">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="搜索博客..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="category-filter">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          全部
        </button>
        <button
          className={`filter-btn ${activeFilter === 'tech' ? 'active' : ''}`}
          onClick={() => setActiveFilter('tech')}
        >
          技术博客
        </button>
        <button
          className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
          onClick={() => setActiveFilter('design')}
        >
          设计灵感
        </button>
        <button
          className={`filter-btn ${activeFilter === 'life' ? 'active' : ''}`}
          onClick={() => setActiveFilter('life')}
        >
          生活随笔
        </button>
      </div>

      <div className="grid-container">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="blog-header">
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
              <div className="blog-body">
                <p className="blog-excerpt">{blog.excerpt}</p>
              </div>
              <div className="blog-footer">
                <div className="blog-tags">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <a href={blog.link} className="blog-link" target="_blank" rel="noopener noreferrer">
                  阅读全文
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="no-result">
            没有找到相关博客
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGrid;