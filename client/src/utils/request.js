async function request(method, url, data) {
  const options = {
    method,
    headers: {}
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const err = await res.json();

      throw new Error(err.message);
    }

    if (res.status !== 204) {
      const data = await res.json();

      return data;
    }
  } catch (err) {
    console.log(err.message)

    throw err;
  }
}

export default {
  get: (url) => request('GET', url),
  post: (url, data) => request('POST', url, data),
  put: (url, data) => request('PUT', url, data),
  delete: (url) => request('DELETE', url)
};
