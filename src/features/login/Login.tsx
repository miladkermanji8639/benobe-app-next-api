'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { loginRegister, resendOtp, loginConfirm } from './../../services/dr/auth/api';
import BackIcon from './images/back.svg';
import PhoneIcon from './images/phone.svg';
import PasswordIcon from './images/password.svg';
import VisibleIcon from './images/visible.svg';
import "./loading/loading.css";

const Login: React.FC = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(120);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [token, setToken] = useState(''); // Step 1: Add state for token
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const mobileRegex = /^(?!09{1}(\d)\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\d{7}$/;

  useEffect(() => {
    if (step === 2) {
      otpRefs.current[0]?.focus();
    }
  }, [step]);

  const handleLoginRegister = async () => {
    setMobileError('');
    setErrorMessage('');
    setMessage('');
    setOtp(['', '', '', '']);

    if (!mobile || !mobileRegex.test(mobile)) {
      setMobileError('لطفا شماره موبایل خود را به درستی وارد کنید');
      return;
    }

    if (!termsAccepted) {
      setErrorMessage('لطفا شرایط و قوانین را بپذیرید');
      return;
    }

    setLoading(true);
    try {
      const response = await loginRegister(mobile);
      setToken(response.data.token); // Step 2: Store token from response
      setMessage('کد تایید با موفقیت به شماره شما ارسال شد!');
      setErrorMessage('');
      setStep(2);
    } catch (error) {
      setErrorMessage((error as any).response.data.error);
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    const enteredOtp = otp.join('');
    setErrorMessage('');
    if (enteredOtp.length < 4) {
      setErrorMessage('لطفا کد تایید خود را به درستی وارد کنید');
      return;
    }

    setLoading(true);
    try {
      const response = await loginConfirm(token, enteredOtp); // Step 3: Use the token here

      if (response.data.success) {
        setStep(3);
      } else {
        setErrorMessage('کد تایید نامعتبر است');
      }
    } catch (error) {
      setErrorMessage('کد تایید نامعتبر است');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 3) {
        otpRefs.current[index + 1]?.focus();
      }
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        otpRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      await resendOtp(/* توکن یا اطلاعات لازم برای ارسال مجدد */);
      setMessage('کد تایید مجدداً ارسال شد!');
      setErrorMessage('');
      setTimer(120);
    } catch (error) {
      setErrorMessage('ارسال مجدد کد تایید ناموفق بود.');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  return (
    <div>
      {step === 1 && (
        <div className="flex w-[500px] flex-col items-center justify-center gap-3 rounded-2xl bg-white px-20 py-10">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <span className="text-[#707070]">ورود کاربر</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <span className="text-primary">بازگشت</span>
              <Image src={BackIcon} alt="Back Icon" />
            </div>
          </div>
          <br />
          <br />
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row items-center">
              <Image src={PhoneIcon} alt="Phone Icon" />
              <span className="text-[#707070]">شماره موبایل</span>
            </div>
            <input
              dir="ltr"
              className="h-[50px] w-full rounded-2xl px-6 py-2 shadow-[6px_6px_12px_rgba(0,0,0,0.25)]"
              type="text"
              value={mobile}
              onChange={(e) => {
                setMobileError('');
                setMobile(e.target.value);
                if (!e.target.value.match(mobileRegex)) {
                  setMobileError('لطفا شماره موبایل خود را به درستی وارد کنید');
                }
              }}
              placeholder="09181234567" maxLength={11}
            />
            {mobileError && <span className="text-red-500 font-semibold">{mobileError}</span>}
          </div>
          <br />
          <button onClick={handleLoginRegister} disabled={loading}>
            <div className={`w-[330px] rounded-2xl bg-gradient-to-r from-[#2E86C1] to-[#84CAF9] py-2 text-xl text-white flex justify-center items-center`}>
              {loading ? <div className="loader"></div> : 'ادامه'}
            </div>
          </button>
          {errorMessage && <span className='text-red-500 font-semibold'>{errorMessage}</span>}
          <div className="flex w-full flex-row items-center gap-2 px-4">
            <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
            <span>
              <a className="text-primary" href="#">
                شرایط و قوانین{' '}
              </a>
              را خوانده‌ام و پذیرفته‌ام
            </span>
          </div>
          <br />
        </div>
      )}
      {step === 2 && (
        <div className="flex w-[500px] flex-col items-center justify-center gap-3 rounded-2xl bg-white px-20 py-10">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <span className="text-[#707070]">ورود کاربر جدید</span>
            </div>
            <div
              className="flex flex-row items-center justify-center gap-2"
              onClick={() => {
                setStep(1);
              }}
            >
              <span className="text-primary">بازگشت</span>
              <Image src={BackIcon} alt="Back Icon" />
            </div>
          </div>
          <br />
          <br />
          {!errorMessage && message && <span className='text-green-500 font-semibold'>{message}</span>}
          <div className="flex w-full flex-row items-center justify-between" dir='ltr'>
            {Array.from({ length: 4 }, (_, index) => (
              <input
                key={index}
                ref={(el: HTMLInputElement | null) => { otpRefs.current[index] = el; }}
                type="text"
                className="h-16 w-16 rounded-2xl border border-black/80 text-center font-bold"
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onFocus={() => otpRefs.current[index]?.select()}
              />
            ))}
          </div>
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}
          <br />
          <button onClick={handleOtpSubmit} disabled={loading}>
            <div className={`w-[330px] rounded-2xl bg-gradient-to-r from-[#2E86C1] to-[#84CAF9] py-2 text-xl text-white flex justify-center items-center`}>
              {loading ? <div className="loader"></div> : 'ادامه'}
            </div>
          </button>
          <div className="flex w-full flex-row items-center gap-2 px-4">
            <span className="text-primary">ارسال مجدد کد</span>
            <span>{Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</span>
            {timer === 0 ? (
              <button onClick={handleResendOtp} className="text-blue-500">ارسال مجدد</button>
            ) : (
              <span className="text-blue-500">{/* متن ارسال مجدد در اینجا */}</span>
            )}
          </div>
          <br />
        </div>
      )}
      {step === 3 && (
        <div className="flex w-[500px] flex-col items-center justify-center gap-3 rounded-2xl bg-white px-20 py-10">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <span className="text-[#707070]">ورود کاربر جدید</span>
            </div>
            <div
              className="flex flex-row items-center justify-center gap-2"
              onClick={() => {
                setStep(2);
              }}
            >
              <span className="text-primary">بازگشت</span>
              <Image src={BackIcon} alt="Back Icon" />
            </div>
          </div>
          <br />
          <br />
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row items-center">
              <Image src={PasswordIcon} alt="Password Icon" />
              <span className="text-[#707070]">رمز عبور </span>
            </div>
            <div className="flex w-full flex-row items-center justify-between rounded-2xl px-6 py-2 shadow-[6px_6px_12px_rgba(0,0,0,0.25)]">
              <input
                dir="ltr"
                className="h-[50px] w-full rounded-2xl px-6 py-2 shadow-[6px_6px_12px_rgba(0,0,0,0.25)]"
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
              />
              <Image src={VisibleIcon} alt="Visible Icon" />
            </div>
          </div>
          <br />
          <button>
            <div className="w-[330px] rounded-2xl bg-gradient-to-r from-[#2E86C1] to-[#84CAF9] py-2 text-xl text-white">
              ادامه
            </div>
          </button>
          <br />
        </div>
      )}
    </div>
  );
};

export default Login;
