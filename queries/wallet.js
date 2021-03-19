import instance from "./axios.config";
import { handleError } from "../utils";

const getBalance = async (token) => {
  try {
    const { data, status } = await instance.get("wallet/balance", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { data, status };
  } catch (error) {
    return { data: null, status: error.response.status };
  }
};
const createWallet = async (token) => {
  try {
    const data = await instance.post("wallet", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

const transfer = async (body, token) => {
  try {
    const data = await instance.post("wallet/transfer", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

const getTx = async (token) => {
  try {
    const data = await instance.get("wallet/tx", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export { getBalance, createWallet, transfer, getTx };
