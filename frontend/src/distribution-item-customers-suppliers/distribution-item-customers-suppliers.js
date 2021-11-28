import * as React from 'react';
import Switch from "../common/switch/switch";

export default function DistributionItemCustomersSuppliers() {
  return (
    <div className="distribution-item-news distribution-item-news--white-bgc">
      <div className="distribution-item-news-container">
        <p className="distribution-item-news-name">Заказчики\поставщики</p>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="customers-suppliers-email-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="customers-suppliers-telegram-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="customers-suppliers-push-notifications-switcher"
          />
        </div>
        <div className="distribution-item-news-switch">
          <Switch
            switchName="customers-suppliers-sms-switcher"
          />
        </div>
      </div>
    </div>
  );
}
