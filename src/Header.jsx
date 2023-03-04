export default function Header() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(new Date().toLocaleString());
  const dayName = days[d.getDay()];

  return (
    <div>
      <header>
        <div className="appNameDiv">
          <span className="appName">TodoApp</span>
        </div>
        <div className="dateDiv">
          <span className="dayName">{dayName}</span>
          <span className="date">
            {new Date().toLocaleString("eu-SW", {
              day: "2-digit",
              month: "numeric",
            })}
          </span>
        </div>
      </header>
    </div>
  );
}
