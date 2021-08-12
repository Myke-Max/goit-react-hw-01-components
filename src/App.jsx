import Profile from './components/profile/Profile';
import StatisticList from './components/statisticList/StatisticList';
import FriendList from './components/friends-list/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

console.log(transactions);

export default function App() {
  return (
    <div className="container">
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
