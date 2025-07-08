async function Fetcher(city) {
  const api_key = "9ea37ea7ea994d71915161824250607";
  const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;
  if (!city.trim()) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export default Fetcher;
