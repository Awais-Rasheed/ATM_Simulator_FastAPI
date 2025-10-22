
import axios from "axios";
import { ENDPOINTS } from "./api";

export const getAllAccounts = async () => {
  return axios.get(ENDPOINTS.ALL_ACCOUNTS);
};

export const addAccount = async (accountData) => {
  return axios.post(ENDPOINTS.ADD_ACCOUNT, accountData);
};

export const deleteAccount = async (accountNumber) => {
  return axios.delete(ENDPOINTS.REMOVE_ACCOUNT(accountNumber));
};
