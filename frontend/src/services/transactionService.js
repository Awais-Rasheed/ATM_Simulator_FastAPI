
import axios from "axios";
import { ENDPOINTS } from "./api";

export const depositAmount = async (pin, amount) =>
  axios.put(ENDPOINTS.DEPOSIT(pin, amount));

export const withdrawAmount = async (pin, amount) =>
  axios.put(ENDPOINTS.WITHDRAW(pin, amount));
