import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { Transactions } from 'components/Transactions/Transactions.jsx';
import transactions from 'components/Transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
