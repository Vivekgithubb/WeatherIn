async function HistoryFetcher(city) {
  const api_key = "9ea37ea7ea994d71915161824250607";
  const today = new Date().toISOString().split("T")[0];
  const url = `http://api.weatherapi.com/v1/history.json?key=${api_key}&q=${city}&dt=${today}`;
  if (!city.trim()) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export default HistoryFetcher;
