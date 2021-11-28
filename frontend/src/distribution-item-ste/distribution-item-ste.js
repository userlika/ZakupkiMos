import * as React from 'react';
import Switch from "../common/switch/switch";

export default function DistributionItemSte() {
  return (
    <div className="distribution-item-news distribution-item-news--white-bgc">
      <div className="distribution-item-news-container">
        <p className="distribution-item-news-name">Подписка по СТЕ</p>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="ste-email-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="ste-data-telegram-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="ste-data-push-notifications-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="ste-data-sms-switcher"
          />
        </div>
      </div>
    </div>
  );
}
