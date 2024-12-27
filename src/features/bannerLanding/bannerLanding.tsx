import Image from 'next/image';
import BannerImage from './images/banner.png';
import TextSwitcher from '@/components/TextSwitcher';
import SearchIcon from '@/features/bannerLanding/images/search.svg';
import DropdownIcon from '@/features/bannerLanding/images/dropdown.svg';

import UserIcon from '@/features/bannerLanding/images/usersLanding.svg';
import LabIcon from '@/features/bannerLanding/images/labLanding.svg';
import HospitalIcon from '@/features/bannerLanding/images/hospitalLanding.svg';
import DoctorIcon from '@/features/bannerLanding/images/doctor.svg';

const BannerLanding: React.FC = () => {
  return (
    <div className="z-0 px-2 xl:px-0">
      <div className="z-10 xl:relative">
        <div className="bg-primary/[.3] z-20 flex h-full w-full flex-col items-center gap-2 text-black xl:absolute xl:gap-12 xl:py-32 xl:text-white">
          <p className="text-center text-lg font-bold xl:text-6xl">
            به‌نوبه: سامانه جامع خدمات آنلاین پزشکی و درمانی
          </p>
          <TextSwitcher texts={['پزشک', 'بیمارستان', 'کلینیک', 'تخصص']} />
          <div className="flex flex-row items-center justify-between rounded-2xl border border-primary bg-white px-2 py-2 xl:border-none xl:px-3 xl:py-4">
            <div className="flex flex-row items-center justify-center gap-1 border-l-2 px-2 xl:gap-2">
              <p className="text-center text-sm text-primary xl:text-lg">انتخاب شهر</p>
              <Image className="h-4 w-4" src={DropdownIcon} width={14} height={14} alt="Dropdown" />
            </div>
            <div className="px-2 text-lg text-gray-500 xl:w-[600px]">
              <input
                className="w-full text-sm focus:outline-none xl:text-base"
                placeholder="جست و جو ..."
              />
            </div>
            <div className="rounded-lg bg-primary p-2 xl:p-3">
              <Image className="h-5 w-5" src={SearchIcon} alt="Search" />
            </div>
          </div>
        </div>
        <Image className="z-0 hidden xl:block" src={BannerImage} alt="Banner" />
      </div>

      <div className="z-50 mt-5 hidden w-full justify-center rounded-2xl border border-primary xl:relative xl:-mt-16 xl:flex xl:border-none 2xl:-mt-28">
        <div className="flex flex-row items-center justify-center rounded-2xl bg-white px-2 py-6 shadow-xl">
          <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-dashed px-2 text-center text-black xl:px-16">
            <Image className="w-6 xl:w-16" src={UserIcon} alt="User Icon" />
            <p className="text-sm font-bold xl:text-2xl">۳۰۰,۰۰۰+</p>
            <p className="text-xs xl:text-[16px]">کاربر فعال</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-dashed px-2 text-center text-black xl:px-16">
            <Image className="w-6 xl:w-16" src={LabIcon} alt="Lab Icon" />
            <p className="text-sm font-bold xl:text-2xl">۵۰۰+</p>
            <p className="text-xs xl:text-[16px]">آزمایشگاه ثبت شده</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-dashed px-2 text-center text-black xl:px-16">
            <Image className="w-6 xl:w-16" src={HospitalIcon} alt="Hospital Icon" />
            <p className="text-sm font-bold xl:text-2xl">۲۰۰+</p>
            <p className="text-xs xl:text-[16px]">بیمارستان ثبت شده</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-black xl:px-16">
            <Image className="w-6 xl:w-16" src={DoctorIcon} alt="Doctor Icon" />
            <p className="text-sm font-bold xl:text-2xl">۶,۵۰۰+</p>
            <p className="text-xs xl:text-[16px]">دکتر ثبت شده</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLanding;
