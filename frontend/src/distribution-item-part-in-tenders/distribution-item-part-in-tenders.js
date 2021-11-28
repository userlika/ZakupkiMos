import * as React from 'react';
import Switch from "../common/switch/switch";

export default function DistributionItemPartInTenders() {
  return (
    <div className="distribution-item-news">
      <div className="distribution-item-news-container">
        <p className="distribution-item-news-name">Участие в торгах</p>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="part-in-tenders-email-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="part-in-tenders-telegram-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="part-in-tenders-push-notifications-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="part-in-tenders-data-sms-switcher"
          />
        </div>
      </div>
    </div>
  );
}
