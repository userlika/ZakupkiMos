import * as React from 'react';
import Switch from "../common/switch/switch";

export default function DistributionItemSpecSubsc() {
  return (
    <div className="distribution-item-news">
      <div className="distribution-item-news-container">
        <p className="distribution-item-news-name">Участие в торгах</p>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="spec-subsc-email-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="spec-subsc-telegram-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="spec-subsc-push-notifications-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="spec-subsc-data-sms-switcher"
          />
        </div>
      </div>
    </div>
  );
}
