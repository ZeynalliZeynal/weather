export const getWeather = async (place: string) => {
  try {
    let res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=7c3c0a061af3455393931451241509&q=${place}&aqi=no`
    );

    if (!res.ok)
      res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=7c3c0a061af3455393931451241509&q=Azerbaijan&aqi=no`
      );

    const data = await res.json();
    return data.current;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
