import React from 'react';
import Image from 'next/image';
import Logo from '@/app/images/logo.png';
import DownloadIcon from './images/download.svg';
import BazaarIcon from './images/bazaar.png';
import MyketIcon from './images/myket.png';
import InstagramIcon from './images/instagram.png';
import HeadphoneIcon from './images/headphone.svg';
import ChatIcon from './images/chat.svg';
import Kstp from './images/kstp.png';
import EnamadLogo from './images/enamad.png';
import MellatLogo from './images/mellat.png';
import RayaneOrgLogo from './images/rayane.png';
import TelegramLogo from './images/telegram.png';
import WhatsappLogo from './images/whatsapp.png';
import AparatLogo from './images/aparat.png';
import DownloadBox from './images/download.png';

const ButtonRegular: React.FC = () => {
  return (
    <>
      <div className="font-yekanBakh mb-16 bg-background_primary sm:hidden">
        <div className="flex flex-col items-center justify-center gap-2 bg-[#84CAF94D] px-3">
          <Image className="h-24 w-24" src={Logo} alt="Benobe Logo"></Image>
          <p className="text-center text-sm">
            به نوبه سامانه جامع خدمات سلامت دیجیتال با بهره وری از بهترین پزشکان و مراکز درمان کل
            کشور{' '}
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-1 px-4">
            <div className="w-full rounded-lg bg-[#2E86C14D] px-10 py-2 text-center">
              <p>برای پزشکان</p>
            </div>
            <div className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-[#2E86C14D] px-10 py-2 text-center">
              <p>برای بیماران</p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91667 5.25L7 8.75L11.0833 5.25"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-[#2E86C14D] px-10 py-2 text-center">
              <p>به نو به</p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91667 5.25L7 8.75L11.0833 5.25"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-4 pb-5 pt-2">
            <Image src={DownloadBox} alt="Downloadbox"></Image>
          </div>
        </div>
        <div className="flex flex-col bg-[#2E86C166] p-3 text-center text-sm">
          <p>کلیه‌ی حقوق این وبسایت متعلق به شرکت به نو به است.</p>
        </div>
      </div>
      <div className="font-yekanBakh hidden bg-background_primary sm:block xl:hidden"></div>
      <div className="font-yekanBakh hidden bg-background_primary xl:block">
        <div className="flex flex-col bg-[#84CAF94D] px-24 py-6">
          <div className="space-between flex w-full flex-row gap-28">
            <div className="flex w-2/4 flex-col gap-3">
              <h1 className="text-3xl font-bold">سامانه نوبت دهی دکتر آنلاین به نوبه </h1>
              <p>
                با استفاده از خدمات سلامت دیجیتال به نوبه تجربه سریع و راحت از خدمات پزشکی داشته
                باشید. نوبت‌دهی آنلاین، دریافت مشاوره به صورت تلفنی و استفاده از خدمات کلینیک‌ها و
                مراکز درمانی از جمله خدمات ما هستند. همچنین برای تجربه بهتر در استفاده از خدمات ما
                بر روی تلفن همراه، می‌توانید نرم‌افزار ما برای گوشی‌های اندروید را دریافت و نصب
                کنید.
              </p>
              <div className="flex flex-row items-center">
                <h1 className="text-3xl">دانلود اپلیکیشن</h1>
                <Image className="h-24 w-24" src={Logo} alt="Benobe Logo"></Image>
              </div>
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="flex flex-row items-center justify-center gap-4 rounded-lg bg-[#1C274C] px-4 py-1 text-white">
                  <Image className="" src={DownloadIcon} alt="Download Logo"></Image>
                  <div className="flex flex-col items-center justify-center text-center">
                    <p>اپلیکیشن اندروید</p>
                    <p>لینک مستقیم</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-1 rounded-lg bg-[#1C274C] px-4 py-1 text-white">
                  <Image className="w-12" src={BazaarIcon} alt="Download Logo"></Image>
                  <div className="flex flex-col items-center justify-center text-center">
                    <p>اپلیکیشن اندروید</p>
                    <p>دانلود از کافه بازار</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-1 rounded-lg bg-[#1C274C] px-4 py-1 text-white">
                  <Image className="w-12" src={MyketIcon} alt="Download Logo"></Image>
                  <div className="flex flex-col items-center justify-center text-center">
                    <p>اپلیکیشن اندروید</p>
                    <p>دانلود از مایکت</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/4 flex-col items-start gap-3 px-10">
              <p className="text-xl font-bold">اطلاعات و تکمیلی </p>
              <ul className="flex list-disc flex-col gap-1">
                <li>قوانین و مقررات</li>
                <li>راهنمای سایت</li>
                <li>قوانین ثبت نظر</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>به‌نوبه کلینیک</li>
              </ul>
            </div>
            <div className="flex w-1/4 flex-col items-center gap-2">
              <p className="text-2xl font-bold">شبکه‌های اجتماعی به‌نوبه</p>
              <div className="flex w-[200px] flex-row items-center justify-center rounded-lg bg-gradient-to-r from-[#F92CA7] to-[#6B1A93] text-white">
                <Image className="h-9 w-9" src={InstagramIcon} alt="Instagram Logo"></Image>
                <p className="text-md">benobe.ir@</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-8">
                <Image className="w-7" src={TelegramLogo} alt="Telegram Logo"></Image>
                <Image className="w-8" src={WhatsappLogo} alt="Whatsapp Logo"></Image>
                <Image className="w-8" src={AparatLogo} alt="Aparat Logo"></Image>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="flex w-full flex-row justify-between">
            <div className="flex w-1/3 flex-col items-center justify-center gap-1 border-l-2 border-dashed border-black">
              <Image src={HeadphoneIcon} alt="Headphone Icon"></Image>
              <p className="text-2xl text-[#084D7C]">در تمام لحظات همراهتونیم</p>
              <p>پشتیبانی ۷ روز هفته؛ ۹ صبح الی ۱ بامداد</p>
              <p>087-33730514</p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center gap-1 border-l-2 border-dashed border-black">
              <Image src={ChatIcon} alt="Chat Icon"></Image>
              <p className="text-2xl text-[#084D7C]">سوالات پر تکرار</p>
              <p>مشاهده پاسخ سوالات پر تکرار کاربران</p>
            </div>
            <div className="flex w-1/3 flex-row items-center justify-center gap-12">
              <Image className="w-16" src={Kstp} alt="KSTP Icon"></Image>
              <Image className="w-16" src={EnamadLogo} alt="Enamad Logo"></Image>
              <Image className="w-16" src={MellatLogo} alt="MellatPayment Logo"></Image>
              <Image className="w-16" src={RayaneOrgLogo} alt="RayaneOrg Logo"></Image>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center bg-[#2E86C166] p-4">
          <p className="text-lg">کلیه‌ی حقوق این وبسایت متعلق به شرکت به نو به است.</p>
        </div>
      </div>
    </>
  );
};

export default ButtonRegular;
