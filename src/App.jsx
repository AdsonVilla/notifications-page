import React from "react";
import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import { Notifications } from "./Components/Notifications";

function App() {
  const [readMessages, setReadMessages] = useState(false);
  const [notificationsNumber, setNotificationsNumber] = useState(7);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function handleToggleNotificationsStatus() {
    setReadMessages(!readMessages);
    setNotificationsNumber(0);
    setButtonDisabled(true);
  }

  return (
    <div className="container">
      <div className="page">
        <div className="header">
          <div className="notifications-number">
            <h1>Notifications</h1>
            <div>
              <p>{notificationsNumber}</p>
            </div>
          </div>
          <Button
            handleToggleNotificationsStatus={handleToggleNotificationsStatus}
            buttonDisabled={buttonDisabled}
          />
        </div>
        <Notifications readMessages={readMessages} />
      </div>
    </div>
  );
}

export default App;
