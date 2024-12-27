import Image from 'next/image';

import Profile1 from './images/top/profile1.svg';
import Profile2 from './images/top/profile2.svg';
import Profile3 from './images/top/profile3.svg';
import Profile4 from './images/top/profile4.svg';

import Heart from './images/speciality/heart.svg';
import Eye from './images/speciality/eye.svg';
import Tooth from './images/speciality/tooth.svg';
import Blood from './images/speciality/blood.svg';
import Brain from './images/speciality/brain.svg';
import Liver from './images/speciality/liver.svg';

import CProfile1 from './images/consult/profile1.svg';
import CProfile2 from './images/consult/profile2.svg';
import CProfile3 from './images/consult/profile3.svg';
import CProfile4 from './images/consult/profile4.svg';

import Facilities from './images/facilities.svg';

import Mag from './images/mag.svg';

const MobileLanding: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-2 py-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <p className="font-semibold">برترین پزشکان به نوبه</p>
          <button className="rounded-lg bg-primary px-2 py-1 text-xs text-white">
            <p>مشاهده بیشتر</p>
          </button>
        </div>
        <div className="flex flex-row overflow-x-scroll">
          <Image className="w-[1000px]" src={Profile1} alt="Profile1"></Image>
          <Image className="" src={Profile2} alt="Profile2"></Image>
          <Image className="" src={Profile3} alt="Profile3"></Image>
          <Image className="" src={Profile4} alt="Profile4"></Image>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <p className="font-semibold">تخصص ها</p>
          <button className="rounded-lg bg-primary px-2 py-1 text-xs text-white">
            <p>مشاهده بیشتر</p>
          </button>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll px-2">
          <Image width={400} height={400} className="" src={Heart} alt="Profile1"></Image>
          <Image className="" src={Eye} alt="Profile2"></Image>
          <Image className="" src={Tooth} alt="Profile3"></Image>
          <Image className="" src={Blood} alt="Profile4"></Image>
          <Image className="" src={Brain} alt="Profile4"></Image>
          <Image className="" src={Liver} alt="Profile4"></Image>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <p className="font-semibold">مراکز درمانی</p>
          <button className="rounded-lg bg-primary px-2 py-1 text-xs text-white">
            <p>مشاهده بیشتر</p>
          </button>
        </div>
        <div className="flex flex-row overflow-x-scroll">
          <Image className="w-[1000px]" src={Facilities} alt="Profile1"></Image>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <p className="font-semibold">مشاور تلفنی</p>
          <button className="rounded-lg bg-primary px-2 py-1 text-xs text-white">
            <p>مشاهده بیشتر</p>
          </button>
        </div>
        <div className="flex flex-row overflow-x-scroll">
          <Image className="" src={CProfile1} alt="Profile1"></Image>
          <Image className="" src={CProfile2} alt="Profile2"></Image>
          <Image className="" src={CProfile3} alt="Profile3"></Image>
          <Image className="" src={CProfile4} alt="Profile4"></Image>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <p className="font-semibold">اخبار و مجله دانستنی‌ها</p>
          <button className="rounded-lg bg-primary px-2 py-1 text-xs text-white">
            <p>مشاهده بیشتر</p>
          </button>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll px-2">
          <Image className="" src={Mag} alt="Profile1"></Image>
          <Image className="" src={Mag} alt="Profile2"></Image>
          <Image className="" src={Mag} alt="Profile3"></Image>
          <Image className="" src={Mag} alt="Profile4"></Image>
        </div>
      </div>
    </div>
  );
};

export default MobileLanding;
