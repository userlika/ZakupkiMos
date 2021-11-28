import * as React from 'react';
import {useState} from 'react';

export default function SetUpNotificationsSecondary() {
  const [isEmail2, setIsEmail2] = useState(false);
  const onClickCheckBoxEmail2 = () => {
    setIsEmail2(!isEmail2);
  };
  const [email2, setEmail2] = useState('');
  const onChangeEmail2 = (event) => {
    setEmail2(event.currentTarget.value);
  };

  const [isTelegram2, setIsTelegram2] = useState(false);
  const onClickCheckBoxTelegram2 = () => {
    setIsTelegram2(!isTelegram2);
  };
  const [telegram2, setTelegram2] = useState('');
  const onChangeTelegram2 = (event) => {
    setTelegram2(event.currentTarget.value);
  };

  const [isSms2, setIsSms2] = useState(false);
  const onClickCheckBoxSms2 = () => {
    setIsSms2(!isSms2);
  };
  const [sms2, setSms2] = useState('');
  const onChangeSms2 = (event) => {
    setSms2(event.currentTarget.value);
  };

  return (
    <div className="set-up-notifications">
      <fieldset className="set-up-notifications__fieldset">
        <legend className="set-up-notifications__legend">Дополнительные контакты</legend>
        <div className="set-up-notifications__notification-item-block">
          <div className="set-up-notifications__notification-item-checkbox">
            <div
              role="button"
              tabIndex={0}
              onClick={onClickCheckBoxEmail2}
              onKeyPress={onClickCheckBoxEmail2}
              className={isEmail2
                ? 'set-up-notifications__notification-item set-up-notifications__notification-item--active'
                : 'set-up-notifications__notification-item'}
            >
            </div>
            <p className={isEmail2
              ? 'set-up-notifications__notification-item-name set-up-notifications__notification-item-name--active'
              : 'set-up-notifications__notification-item-name'
            }>Email</p>
          </div>
          <input
            className="set-up-notifications__notification-item-input"
            type="email"
            name="email"
            // placeholder="Enter email"
            onChange={onChangeEmail2}
            required
            disabled={!isEmail2}
          />
        </div>
        <div className="set-up-notifications__notification-item-block">
          <div className="set-up-notifications__notification-item-checkbox">
            <div
              role="button"
              tabIndex={0}
              onClick={onClickCheckBoxTelegram2}
              onKeyPress={onClickCheckBoxTelegram2}
              className={isTelegram2
                ? 'set-up-notifications__notification-item set-up-notifications__notification-item--active'
                : 'set-up-notifications__notification-item'}
            >
            </div>
            <p className={isTelegram2
              ? 'set-up-notifications__notification-item-name set-up-notifications__notification-item-name--active'
              : 'set-up-notifications__notification-item-name'
            }>Telegram</p>
          </div>
          <input
            className="set-up-notifications__notification-item-input"
            type="text"
            name="telegram"
            // placeholder="Enter email"
            onChange={onChangeTelegram2}
            required
            disabled={!isTelegram2}
          />
        </div>
        <div className="set-up-notifications__notification-item-block">
          <div className="set-up-notifications__notification-item-checkbox">
            <div
              role="button"
              tabIndex={0}
              onClick={onClickCheckBoxSms2}
              onKeyPress={onClickCheckBoxSms2}
              className={isSms2
                ? 'set-up-notifications__notification-item set-up-notifications__notification-item--active'
                : 'set-up-notifications__notification-item'}
            >
            </div>
            <p className={isSms2
              ? 'set-up-notifications__notification-item-name set-up-notifications__notification-item-name--active'
              : 'set-up-notifications__notification-item-name'
            }>SMS</p>
          </div>
          <input
            className="set-up-notifications__notification-item-input"
            type="email"
            name="email"
            // placeholder="Enter email"
            onChange={onChangeSms2}
            required
            disabled={!isSms2}
          />
        </div>
      </fieldset>
    </div>
  );
}