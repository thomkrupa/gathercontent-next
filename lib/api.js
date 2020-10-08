const { API_USERNAME, API_KEY } = process.env;

export const get = async (url) => {
  let data = `${API_USERNAME}:${API_KEY}`;
  let buff = new Buffer(data);
  let base64data = buff.toString("base64");

  const response = await fetch(`https://api.gathercontent.com${url}`, {
    headers: {
      Accept: "application/vnd.gathercontent.v2+json",
      Authorization: `Basic ${base64data}`,
    },
  });

  const json = await response.json();

  return json.data;
};
