export const getPlace = async ({ lat, lng }: { lat: string; lng: string }) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
