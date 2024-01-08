import "./App.css";

import React, { useEffect, useState } from "react";

import Reminder from "./entities/reminder";
import ReminderList from "./components/ReminderList/ReminderList";
import { reminderService } from "./services/reminder";
import NewReminder from "./components/NewReminder/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();

    setReminders(reminders);
  };

  const removeReminder = (id: number): void => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    console.log(title);
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };
  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
