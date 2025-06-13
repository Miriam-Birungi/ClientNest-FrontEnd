import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaHashtag,
  FaLayerGroup,
  FaUserCircle,
  FaPlus,
  FaRegCalendarAlt,
  FaRegListAlt,
  FaRegCheckCircle,
  FaRegPaperPlane
} from 'react-icons/fa';
import './Dashboard.css';

const sidebarItems = [
  { id: 'all', label: 'All Channels', icon: <FaLayerGroup /> },
  { id: 'facebook', label: 'Connect Facebook', icon: <FaFacebookF /> },
  { id: 'instagram', label: 'Connect Instagram', icon: <FaInstagram /> },
  { id: 'twitter', label: 'Connect Twitter / X', icon: <FaTwitter /> },
  { id: 'linkedin', label: 'Connect LinkedIn', icon: <FaLinkedinIn /> },
  { id: 'threads', label: 'Connect Threads', icon: <FaHashtag /> },
  { id: 'youtube', label: 'Connect YouTube', icon: <FaYoutube /> },
  { id: 'tiktok', label: 'Connect TikTok', icon: <FaTiktok /> },
];

const sidebarBottom = [
  { id: 'tags', label: 'Manage Tags', icon: <FaHashtag /> },
  { id: 'channels', label: 'Manage Channels', icon: <FaLayerGroup /> },
];

const mainTabs = [
  { id: 'queue', label: 'Queue', icon: <FaRegListAlt /> },
  { id: 'drafts', label: 'Drafts', icon: <FaRegCalendarAlt /> },
  { id: 'approvals', label: 'Approvals', icon: <FaRegCheckCircle /> },
  { id: 'sent', label: 'Sent', icon: <FaRegPaperPlane /> },
];

const suggestionCards = [
  {
    emoji: '🧑🏾‍💻',
    title: 'One thing we stopped doing this year — and why',
    desc: 'What did you let go of this year — a client type, offer, or…',
  },
  {
    emoji: '🙏',
    title: 'One small change that shifted everything',
    desc: 'Talk about a situation that felt stuck or overwhelming — and the small but…',
  },
  {
    emoji: '🌀',
    title: 'This content format works every time',
    desc: 'Share a post format, prompt style, or type you keep returning to —…',
  },
];

const Dashboard = () => {
  const [activeSidebar, setActiveSidebar] = useState('all');
  const [activeTab, setActiveTab] = useState('queue');

  return (
    <div className="dashboard-mimic-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-top">
          <div className="sidebar-list">
            {sidebarItems.map(item => (
              <button
                key={item.id}
                className={`sidebar-btn${activeSidebar === item.id ? ' active' : ''}`}
                onClick={() => setActiveSidebar(item.id)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="sidebar-bottom">
          {sidebarBottom.map(item => (
            <button key={item.id} className="sidebar-btn sidebar-bottom-btn">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <div className="dashboard-topbar">
          <div className="dashboard-title-group">
            <span className="dashboard-main-icon"><FaLayerGroup /></span>
            <h2 className="dashboard-main-title">All Channels</h2>
          </div>
          <div className="dashboard-main-actions">
            <button className="dashboard-new-btn"><FaPlus /> New Post</button>
            <button className="dashboard-profile-btn"><FaUserCircle /></button>
          </div>
        </div>
        {/* Tabs */}
        <div className="dashboard-tabs">
          {mainTabs.map(tab => (
            <button
              key={tab.id}
              className={`dashboard-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="dashboard-tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        {/* Main Content Area */}
        <div className="dashboard-content-area">
          <div className="dashboard-empty-state">
            <div className="dashboard-empty-icon"><FaRegCalendarAlt /></div>
            <h3>No posts scheduled</h3>
            <p>Connect a channel to start scheduling posts</p>
          </div>
          <div className="dashboard-suggestions">
            <div className="dashboard-suggestions-header">
              <span>💡 Not sure what to post? We've got 80+ templates to help you</span>
              <button className="dashboard-view-templates">View All Templates</button>
            </div>
            <div className="dashboard-suggestion-cards">
              {suggestionCards.map((card, idx) => (
                <div className="dashboard-suggestion-card" key={idx}>
                  <span className="dashboard-suggestion-emoji">{card.emoji}</span>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 