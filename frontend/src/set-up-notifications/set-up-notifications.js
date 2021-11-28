import * as React from 'react';
import {useState} from 'react';
import './set-up-notifications.css';

export default function SetUpNotifications() {
  const [isEmail, setIsEmail] = useState(false);
  const onClickCheckBoxEmail = () => {
    setIsEmail(!isEmail);
  };
  const [email, setEmail] = useState('');
  const onChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const [isTelegram, setIsTelegram] = useState(false);
  const onClickCheckBoxTelegram = () => {
    setIsTelegram(!isTelegram);
  };
  const [telegram, setTelegram] = useState('');
  const onChangeTelegram = (event) => {
    setTelegram(event.currentTarget.value);
  };

  const [isSms, setIsSms] = useState(false);
  const onClickCheckBoxSms = () => {
    setIsSms(!isSms);
  };
  const [sms, setSms] = useState('');
  const onChangeSms = (event) => {
    setSms(event.currentTarget.value);
  };

  return (
    <div className="set-up-notifications">
      <fieldset className="set-up-notifications__fieldset">
        <legend className="set-up-notifications__legend">Основные контакты</legend>
        <div className="set-up-notifications__notification-item-block">
          <div className="set-up-notifications__notification-item-checkbox">
            <div
              role="button"
              tabIndex={0}
              onClick={onClickCheckBoxEmail}
              onKeyPress={onClickCheckBoxEmail}
              className={isEmail
                ? 'set-up-notifications__notification-item set-up-notifications__notification-item--active'
                : 'set-up-notifications__notification-item'}
            >
            </div>
            <p className={isEmail
              ? 'set-up-notifications__notification-item-name set-up-notifications__notification-item-name--active'
              : 'set-up-notifications__notification-item-name'
            }>Email</p>
          </div>
          <input
            className="set-up-notifications__notification-item-input"
            type="email"
            name="email"
            // placeholder="Enter email"
            onChange={onChangeEmail}
            required
            disabled={!isEmail}
          />
        </div>
        <div className="set-up-notifications__notification-item-block">
          <div className="set-up-notifications__notification-item-checkbox">
            <div
              role="button"
              tabIndex={0}
              onClick={onClickCheckBoxTelegram}
              onKeyPress={onClickCheckBoxTelegram}
              className={isTelegram
                ? 'set-up-notifications__notification-item set-up-notifications__notification-item--active'
                : 'set-up-notifications__notification-item'}
            >
            </div>
            <p className={isTelegram
              ? 'set-up-notifications__notification-item-name set-up-notifications__notification-item-name--active'
              : 'set-up-notifications__notification-item-name'
            }>Telegram</p>
          </div>
          <input
            className="set-up-notifications__notification-item-input"
            type="text"
            name="telegram"
            // placeholder="Enter email"
            onChange={onChangeTelegram}
            required
            disabled={!isTelegram}
          />
        </div>
        <div className="set-up-notifications__notification-item-block">
          <div className="set-up-notifications__notification-item-checkbox">
            <div
              role="button"
              tabIndex={0}
              onClick={onClickCheckBoxSms}
              onKeyPress={onClickCheckBoxSms}
              className={isSms
                ? 'set-up-notifications__notification-item set-up-notifications__notification-item--active'
                : 'set-up-notifications__notification-item'}
            >
            </div>
            <p className={isSms
              ? 'set-up-notifications__notification-item-name set-up-notifications__notification-item-name--active'
              : 'set-up-notifications__notification-item-name'
            }>SMS</p>
          </div>
          <input
            className="set-up-notifications__notification-item-input"
            type="email"
            name="email"
            // placeholder="Enter email"
            onChange={onChangeSms}
            required
            disabled={!isSms}
          />
        </div>
      </fieldset>
    </div>
  );
}
