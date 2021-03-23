import instance from "./axios.config";

const signUp = async (body) => {
  const { data } = await instance.post("users/register", body);

  return data;
};

const login = async (body) => {
  const { data } = await instance.post("users/login", body);

  console.log(data)

  return data;
};

const setPin = async (body, token) => {
  const { data } = await instance.post("users/pin", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { login, signUp, setPin };
