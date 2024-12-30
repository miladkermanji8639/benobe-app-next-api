// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';
// const API_URL = 'https://emr-benobe.ir/api';

// Function to register or log in a doctor using mobile number
export const loginRegister = (mobile) => {
 return axios.post(`${API_URL}/doctor/login-register`, { mobile });
};

// Function to confirm the OTP entered by the user
export const loginConfirm = (token, otp_code) => {
 return axios.post(`${API_URL}/doctor/login-confirm/${token}`, { otp_code });
};

// Function to resend the OTP to the user
export const resendOtp = (token) => {
 return axios.post(`${API_URL}/doctor/resend-otp/${token}`);
};

// Function to check the two-factor password
export const twoFactorFormCheck = (two_factor_password) => {
 return axios.post(`${API_URL}/doctor/two-factor-form-check`, {
  two_factor_password
 });
};