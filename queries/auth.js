import instance from "./axios.config";

const signUp = async (body) => {
  const { data } = await instance.post("users/register", body);

  return data;
};

const login = async (body) => {
  const { data } = await instance.post("users/login", body);

  return data;
};

const setPin = async (body) => {
  const { data } = await instance.post("users/pin", body);

  return data;
};

export { login, signUp, setPin };