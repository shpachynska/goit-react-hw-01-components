import Profile from "./components/Profile/Profile";
import user from './user.json';
import statisticalData from './statistical-data.json';
import Section from "./components/Section/Section";
import Statistics from './components/Statistics/Statistics'

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
        <Statistics
          title="Upload stats"
          stats={statisticalData}          
          />;

      </Section>
    </div>
  );
}




















//=========== defaults =========================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
