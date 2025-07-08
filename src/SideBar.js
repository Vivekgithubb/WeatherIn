import { useGlobal } from "./GlobalContext";
import SideContent from "./SideContent";

function SideBar() {
  const { historyData } = useGlobal();
  if (!historyData || !historyData.forecast)
    return <p>Loading history data...</p>;

  const forecastdata = historyData.forecast.forecastday[0];
  const forecasthour = historyData.forecast.forecastday[0].hour;

  const currenthour = new Date().getHours();

  const startIndex = forecasthour.findIndex((hour) => {
    const forecastHour = new Date(hour.time).getHours();
    return forecastHour >= currenthour;
  });
  // Fallback if not found
  const safeStartIndex = startIndex === -1 ? 0 : startIndex;

  // Collect next 6 hours, wrapping around if necessary
  const upcominghour = [];

  for (let i = 0; i < 6; i++) {
    const index = (safeStartIndex + i) % forecasthour.length;
    upcominghour.push(forecasthour[index]);
  }
  return (
    <div className="flex flex-col gap-2">
      {upcominghour.map((hourData, index) => (
        <SideContent
          forecastdata={forecastdata}
          forecasthour={hourData}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}

export default SideBar;
