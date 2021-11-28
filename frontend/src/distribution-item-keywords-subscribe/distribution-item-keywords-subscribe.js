import * as React from 'react';
import Switch from "../common/switch/switch";

export default function DistributionItemKeywordsSubscribe() {
  return (
    <div className="distribution-item-news">
      <div className="distribution-item-news-container">
        <p className="distribution-item-news-name">Подписка по ключевым словам</p>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="keywords-subscribe-email-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="keywords-subscribe-telegram-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="keywords-subscribe-push-notifications-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="keywords-subscribe-data-sms-switcher"
          />
        </div>
      </div>
    </div>
  );
}
