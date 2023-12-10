import { Button } from "./FriendsList";
import { useState } from "react";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=933372");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌆 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={handleSubmit}>Add Friend</Button>
    </form>
  );
};

export default FormAddFriend;
