import Profile from './components/Profile';
import StatisticList from './components/StatisticList';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

console.log(transactions);

export default function App() {
  return (
    <div>
      <div>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>

      <div>
        <StatisticList title="Upload stats" stats={statisticalData} />
      </div>

      <div>
        <FriendList friends={friends} />
      </div>

      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </div>
  );
}
