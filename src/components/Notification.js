import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <>
      {showNotification && (
        <div className="notification-container">
          <p>You have already used this letter</p>
        </div>
      )}
    </>
  );
};

export default Notification;
