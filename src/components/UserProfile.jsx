import { useContext } from "react";
import { userContext } from "./UserContext";

export const UserProfile = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>UserProfile</h1>
      <p>Name:{user.name}</p>
    </div>
  );
};
