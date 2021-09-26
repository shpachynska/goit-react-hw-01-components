import Profile from './components/Profile/Profile';
import user from './user.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions.json';
import friends from './friends.json';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Section title="Task 1">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Task 2">
        <Statistics title="Upload stats" stats={statisticalData} />;
      </Section>
      <Section title="Task 3">
        <FriendList friends={friends} />;
      </Section>

      <Section title="Task 4">
        <TransactionHistory items={transactions} />;
      </Section>
    </div>
  );
}
