import * as React from 'react';
import './set-up-notifications-wrapper.css'
import SetUpNotifications from '../set-up-notifications/set-up-notifications';
import SetUpNotificationsSecondary from '../set-up-notifications-secondary/set-up-notifications-secondary';

export default function SetUpNotificationsWrapper() {
  return (
    <div className="set-up-notifications-wrapper">
      <SetUpNotifications />
      <SetUpNotificationsSecondary />
    </div>
  );
}
