import Reminder from "../../entities/reminder";

interface ReminderListProps {
  items: Reminder[];
}

// function ReminderList(props: ReminderListProps) {
function ReminderList({ items }: ReminderListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default ReminderList;
