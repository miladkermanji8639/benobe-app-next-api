import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const loginRegister = (mobile) => {
 return axios.post(`${API_URL}/doctor/login-register`, { mobile });
};

export const loginConfirm = (token, otp_code) => {
 return axios.post(`${API_URL}/doctor/login-confirm/${token}`, { otp_code });
};

export const resendOtp = (token) => {
 return axios.post(`${API_URL}/doctor/resend-otp/${token}`);
};
