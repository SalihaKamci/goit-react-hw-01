import "./App.css";
import Profile from "./components/Profile/profile";
import userData from "./components/Profile/userData.json";
import FriendList from "./components/FriendList/friends";
import listFrend from "./components/FriendList/friends.json";
import TransactionHistory from "./components/transactions/TransactionHistory";
import transaction from "./components/transactions/transactions.json";
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList ListFrends={listFrend} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
