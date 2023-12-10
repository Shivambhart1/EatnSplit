import { Button } from "./FriendsList";

const Friend = ({ friend, onFriendSelection, selectedFriend, onSplitBill }) => {
  const isSelectedFriend = selectedFriend?.id === friend.id;

  return (
    <li className={isSelectedFriend ? "selected" : ""}>
      <img src={friend.image} alt="friends" />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} Rs.{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you Rs.{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onFriendSelection(friend)}>
        {isSelectedFriend ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
