import * as React from 'react';
import './distribution-item-news.css';
import Switch from "../common/switch/switch";

export default function DistributionItemNews() {
  return (
    <div className="distribution-item-news">
      <div className="distribution-item-news-container">
        <p className="distribution-item-news-name">Новости</p>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="news-email-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="news-telegram-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="news-push-notifications-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="news-sms-switcher"
          />
        </div>
      </div>
    </div>
  );
}
