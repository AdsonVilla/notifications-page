export function Button({ handleToggleNotificationsStatus, buttonDisabled }) {
  return (
    <div>
      <button
        disabled={buttonDisabled}
        onClick={() => handleToggleNotificationsStatus()}
      >
        Mark all as read
      </button>
    </div>
  );
}
