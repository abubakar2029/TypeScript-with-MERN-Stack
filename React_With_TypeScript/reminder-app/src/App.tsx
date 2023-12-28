import "./App.css";

import React from "react";
import Reminder from "./entities/reminder";
import ReminderList from "./components/ReminderList/ReminderList";
import logo from "./logo.svg";

const reminders: Reminder[] = [
  {
    id: 1,
    title: "Reminder 1",
  },
];
function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
