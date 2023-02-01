export function Button({ handleToggleNotificationsStatus }) {
  return (
    <div>
      <button onClick={() => handleToggleNotificationsStatus()}>
        Mark all as read
      </button>
    </div>
  );
}
