import React from "react";

import Friend from "./Friend";

const FriendsList = ({ friends, onFriendSelection, selectedFriend }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onFriendSelection={onFriendSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
};

export const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default FriendsList;
