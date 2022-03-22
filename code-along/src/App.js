import logo from "./logo.svg";
import "./App.css";
import writers from "./writers";
import { ProfileCard } from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>Writers Profiles</h1>
      <div className="container">
        {writers.map((writer) => (
          <ProfileCard writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
