// src/api/pinService.js
import axios from "axios";
import { ENDPOINTS } from "./api";

export const changePin = async (oldPin, newPin) =>
  axios.put(ENDPOINTS.CHANGE_PIN(oldPin, newPin));

export const checkBalance = async (pin) =>
  axios.get(ENDPOINTS.CHECK_BALANCE(pin));
