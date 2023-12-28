import "./App.css";

import React, { useState } from "react";

import Reminder from "./entities/reminder";
import ReminderList from "./components/ReminderList/ReminderList";

function App() {
  // const [reminders, setReminders] = useState<Reminder[]>(); // showing ( reminders[] | undefined )
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: "Reminder 1",
    },
  ]);
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
