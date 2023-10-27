export default async (request, context) => {
  
  const url = new URL(request.url);
  if (url.searchParams.get("method") !== "transform"){
    return;
  }

  const response = await context.next();
  const page = await response.text();
  const regex = /LOCATION_UNKNOWN/i;
  
  // console.log("context.geo: ", context.geo );
  /*  {
    city: "Heredia",
    country: { code: "CR", name: "Costa Rica" },
    subdivision: { code: "H", name: "Heredia Province" },
    timezone: "America/Costa_Rica",
    latitude: 9.9983,
    longitude: -84.1171
  } */
  const location_data = `${context.geo.city}, ${context.geo.country.name}`;

  const updatedPage = page.replace(regex, location_data);

  return new Response(updatedPage, response);
};