import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import Statistics from '../Statistics/Statistics';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import data from '../../dataBase/data.json';
import user from '../../dataBase/user.json';
import friends from '../../dataBase/friends.json';
import transactions from '../../dataBase/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={data.title} stats={data} />

      <FriendList dataFriends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
