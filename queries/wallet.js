import instance from "./axios.config";
import { handleError } from "../utils";
const getBalance = async () => {
  try {
    const { data, status } = await instance.get("wallet/balance");
    return { data, status };
  } catch (error) {
    console.log({ error });
    return { data: null, status: error.response.status };
  }
};
const createWallet = async () => {
  try {
    const data = await instance.post("wallet");
    return data;
  } catch (error) {
    handleError(error);
  }
};

const transfer = async (body) => {
  try {
    const data = await instance.post("wallet/transfer", body);
    return data;
  } catch (error) {
    handleError(error);
  }
};

const getTx = async () => {
  try {
    const data = await instance.get("wallet/tx");
    return data;
  } catch (error) {
    handleError(error);
  }
};

export { getBalance, createWallet, transfer, getTx };
