
export const BASE_URL = "http://127.0.0.1:8000";

export const ENDPOINTS = {
  // Account APIs
  ADD_ACCOUNT: `${BASE_URL}/add-account`,
  ALL_ACCOUNTS: `${BASE_URL}/all-accounts`,
  REMOVE_ACCOUNT: (acc_num) => `${BASE_URL}/remove-account/${acc_num}`,

  // Transaction APIs
  DEPOSIT: (pin, amount) => `${BASE_URL}/deposit/${pin}?amount=${amount}`,
  WITHDRAW: (pin, amount) => `${BASE_URL}/withdraw/${pin}?amount=${amount}`,

  // PIN APIs
  CHANGE_PIN: (pin, new_pin) => `${BASE_URL}/change-pin/${pin}?new_pin=${new_pin}`,
  CHECK_BALANCE: (pin) => `${BASE_URL}/check-balance/${pin}`,
};
