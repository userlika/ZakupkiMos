import * as React from 'react';
import Switch from "../common/switch/switch";

export default function DistributionItemContractRelations() {
  return (
    <div className="distribution-item-news distribution-item-news--white-bgc">
      <div className="distribution-item-news-container">
        <p className="distribution-item-news-name">Договорные отношения</p>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="contract-relations-email-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="contract-relations-telegram-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="contract-relations-push-notifications-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="contract-relations-sms-switcher"
          />
        </div>
      </div>
    </div>
  );
}
