import * as React from 'react';
import './table-header.css';

export default function TableHeader() {
  return (
    <div className="table-header">
      <div className="table-header-container">
        <p className="table-header-name">Рассылки</p>
        <p className="table-header-name">Email</p>
        <p className="table-header-name">Telegram</p>
        <p className="table-header-name">Push-уведомление</p>
        <p className="table-header-name">SMS</p>
      </div>
    </div>
  );
}