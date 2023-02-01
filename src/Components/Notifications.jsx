export function Notifications({ readMessages }) {
  return (
    <div className="notifications">
      <div
        className={
          readMessages ? "read-notification-card" : "unread-notification-card"
        }
      >
        <div className="notification-info">
          <img
            src="../assets/images/avatar-mark-webber.webp"
            alt="user-avatar"
          />
          <div className="user-activity">
            <div className="notification-alert">
              <p>
                <strong>Mark Webber</strong> reacted to your recent post{" "}
                <strong>My first tournament today!</strong>{" "}
              </p>{" "}
              <span>
                <div className="red-ball" />
              </span>
            </div>
            <span>1m ago</span>
          </div>
        </div>
      </div>
      <div
        className={
          readMessages ? "read-notification-card" : "unread-notification-card"
        }
      >
        <div className="notification-info">
          <img
            src="../assets/images/avatar-angela-gray.webp"
            alt="user-avatar"
          />
          <div className="user-activity">
            <div className="notification-alert">
              <p>
                <strong>Angela Gray</strong> followed you{" "}
              </p>{" "}
              <span>
                <div className="red-ball" />
              </span>
            </div>
            <span>5m ago</span>
          </div>
        </div>
      </div>
      <div
        className={
          readMessages ? "read-notification-card" : "unread-notification-card"
        }
      >
        <div className="notification-info">
          <img
            src="../assets/images/avatar-jacob-thompson.webp"
            alt="user-avatar"
          />
          <div className="user-activity">
            <div className="notification-alert">
              <p>
                <strong>Jacob Thompson</strong> has joined your group{" "}
                <strong>Chess Club</strong>{" "}
              </p>{" "}
              <span>
                <div className="red-ball" />
              </span>
            </div>
            <span>1 day ago</span>
          </div>
        </div>
      </div>
      <div
        className={
          readMessages ? "read-notification-card" : "unread-notification-card"
        }
      >
        <div className="notification-info">
          <img
            src="../assets/images/avatar-rizky-hasanuddin.webp"
            alt="user-avatar"
          />
          <div className="user-activity">
            <div className="notification-alert">
              <p>
                <strong>Rizky Hasanuddin</strong> sent you a private message{" "}
              </p>{" "}
              <span>
                <div className="red-ball" />
              </span>
            </div>
            <span>5 days ago</span>
          </div>
        </div>
      </div>
      <div
        className={
          readMessages ? "read-notification-card" : "unread-notification-card"
        }
      >
        <div className="notification-info">
          <img
            src="../assets/images/avatar-kimberly-smith.webp"
            alt="user-avatar"
          />
          <div className="user-activity">
            <div className="notification-alert">
              <p>
                <strong>Kimberly Smith</strong> commented on your picture{" "}
              </p>{" "}
              <span>
                <div className="red-ball" />
              </span>
            </div>
            <span>1 week ago</span>
          </div>
        </div>
      </div>
      <div
        className={
          readMessages ? "read-notification-card" : "unread-notification-card"
        }
      >
        <div className="notification-info">
          <img
            src="../assets/images/avatar-nathan-peterson.webp"
            alt="user-avatar"
          />
          <div className="user-activity">
            <div className="notification-alert">
              <p>
                <strong>Nathan Peterson</strong> reacted to your recent post{" "}
                <strong>5 end-game strategies to increase your win rate</strong>{" "}
              </p>{" "}
              <span>
                <div className="red-ball" />
              </span>
            </div>
            <span>2 weeks ago</span>
          </div>
        </div>
      </div>
      <div
        className={
          readMessages ? "read-notification-card" : "unread-notification-card"
        }
      >
        <div className="notification-info">
          <img src="../assets/images/avatar-anna-kim.webp" alt="user-avatar" />
          <div className="user-activity">
            <div className="notification-alert">
              <p>
                <strong>Anna Kim</strong> left your group{" "}
                <strong>Chess Club</strong>{" "}
              </p>{" "}
              <span>
                <div className="red-ball" />
              </span>
            </div>
            <span>2 weeks ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
