import Reminder from "../../entities/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

// function ReminderList(props: ReminderListProps) {
function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item.id} className="list-group-item">
          {item.title}
          <button
            type="button"
            className="btn btn-outline-primary mx-2 rounded-pill"
            onClick={()=>onRemoveReminder(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
