import * as React from 'react';
import Switch from "../common/switch/switch";

export default function DistributionItemRegData() {
  return (
    <div className="distribution-item-news distribution-item-news--white-bgc">
      <div className="distribution-item-news-container">
        <p className="distribution-item-news-name">Регистрационные данные</p>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="reg-data-email-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="reg-data-telegram-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="reg-data-push-notifications-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="reg-data-sms-switcher"
          />
        </div>
      </div>
    </div>
  );
}
