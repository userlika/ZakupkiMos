import logo from './logo.svg';
import './App.css';
import SetUpNotificationsWrapper from "./set-up-notifications-wrapper/set-up-notifications-wrapper";
import Distribution from './distribution/distribution';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">Настройки уведомлений</h1>
        <SetUpNotificationsWrapper />
        <Distribution/>
      </div>
    </div>
  );
}

export default App;
