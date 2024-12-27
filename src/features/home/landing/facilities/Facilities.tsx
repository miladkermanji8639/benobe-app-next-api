import Image from 'next/image';
import HospitalIcon from '@/features/home/landing/facilities/images/hospital.svg';
import DropdownLogo from '@/features/home/landing/facilities/images/more.svg';
import '@/features/home/landing/facilities/styles/styles.css';
import LocationIcon from '@/features/home/landing/facilities/images/location.svg';
import NextIcon from '@/features/home/landing/facilities/images/next.svg';
import LabIcon from '@/features/home/landing/facilities/images/lab.svg';
import ClinicIcon from '@/features/home/landing/facilities/images/clinic.svg';
import ErIcon from '@/features/home/landing/facilities/images/er.svg';
import ScanIcon from '@/features/home/landing/facilities/images/scan.svg';
import Template from './template.svg';

const Facilities: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="w-full text-right">
        <h1 className="text-3xl font-bold">مراکز درمانی</h1>
      </div>
      <div className="flex w-full flex-row items-center justify-center">
        <Image src={Template} alt="Template"></Image>
      </div>
      <div className="hidden w-full flex-col gap-8 px-10 2xl:px-20">
        <div className="flex w-full flex-row justify-center gap-6">
          <div className="flex flex-col items-center justify-center rounded-b-[26px] rounded-tl-[70px] px-16 py-8 shadow xl:w-[275px]">
            <div className="rounded-full bg-[#418DC0CC] p-4">
              <Image src={HospitalIcon} alt="Hospital Icon"></Image>
            </div>
            <p className="text-lg font-bold">بیمارستان</p>
            <p className="text-sm">۵ بیمارستان</p>
            <br />
            <Image src={DropdownLogo} alt="Dropdown Logo"></Image>
          </div>
          <div className="flex flex-col items-center justify-center rounded-b-[26px] rounded-tl-[70px] px-16 py-8 shadow xl:w-[275px]">
            <div className="rounded-full bg-[#418DC0CC] p-4">
              <Image src={LabIcon} alt="Lab Icon"></Image>
            </div>
            <p className="text-lg font-bold">آزمایشکاه</p>
            <p className="text-sm">۵ آزمایشگاه</p>
            <br />
            <Image src={DropdownLogo} alt="Dropdown Logo"></Image>
          </div>
          <div className="flex flex-col items-center justify-center rounded-b-[26px] rounded-tl-[70px] px-16 py-8 shadow xl:w-[275px]">
            <div className="rounded-full bg-[#418DC0CC] p-4">
              <Image src={ClinicIcon} alt="Clinic Icon"></Image>
            </div>
            <p className="text-lg font-bold">کلینیک</p>
            <p className="text-sm">۵ کلینیک</p>
            <br />
            <Image src={DropdownLogo} alt="Dropdown Logo"></Image>
          </div>
          <div className="flex flex-col items-center justify-center rounded-b-[26px] rounded-tl-[70px] px-16 py-8 shadow xl:w-[275px]">
            <div className="rounded-full bg-[#418DC0CC] p-4">
              <Image src={ErIcon} alt="ER Icon"></Image>
            </div>
            <p className="text-lg font-bold">درمانگاه</p>
            <p className="text-sm">۵ درمانگاه</p>
            <br />
            <Image src={DropdownLogo} alt="Dropdown Logo"></Image>
          </div>
          <div className="flex flex-col items-center justify-center rounded-b-[26px] rounded-tl-[70px] px-16 py-8 shadow xl:w-[275px]">
            <div className="rounded-full bg-[#418DC0CC] p-4">
              <Image src={ScanIcon} alt="Scan Icon"></Image>
            </div>
            <p className="text-lg font-bold">مراکز تصویر برداری</p>
            <p className="text-sm">۵ مراکز تصویر برداری</p>
            <br />
            <Image src={DropdownLogo} alt="Dropdown Logo"></Image>
          </div>
        </div>
        <div className="px-10">
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-b-[26px] rounded-tl-[70px] px-4 py-4 shadow">
            <div className="flex w-full flex-row items-center justify-between">
              <p className="text-2xl">برترین بیمارستان ها</p>
              <p className="px-4 text-primary">مشاهده بیشتر</p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-center gap-2 rounded-[20px] bg-[#84CAF966] px-12 py-2">
                <div className="rounded-full bg-white xl:h-14 xl:w-14 2xl:h-28 2xl:w-28"></div>
                <p className="text-center text-sm">درمانگاه سعدی</p>
                <div className="flex flex-row items-center justify-center">
                  <Image src={LocationIcon} alt="Location Icon"></Image>
                  <p>تهران</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-[20px] bg-[#84CAF966] px-12 py-2">
                <div className="rounded-full bg-white xl:h-14 xl:w-14 2xl:h-28 2xl:w-28"></div>
                <p className="text-sm">درمانگاه سعدی</p>
                <div className="flex flex-row items-center justify-center">
                  <Image src={LocationIcon} alt="Location Icon"></Image>
                  <p>تهران</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-[20px] bg-[#84CAF966] px-12 py-2">
                <div className="rounded-full bg-white xl:h-14 xl:w-14 2xl:h-28 2xl:w-28"></div>
                <p className="text-sm">درمانگاه سعدی</p>
                <div className="flex flex-row items-center justify-center">
                  <Image src={LocationIcon} alt="Location Icon"></Image>
                  <p>تهران</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-[20px] bg-[#84CAF966] px-12 py-2">
                <div className="rounded-full bg-white xl:h-14 xl:w-14 2xl:h-28 2xl:w-28"></div>
                <p className="text-sm">درمانگاه سعدی</p>
                <div className="flex flex-row items-center justify-center">
                  <Image src={LocationIcon} alt="Location Icon"></Image>
                  <p>تهران</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-[20px] bg-[#84CAF966] px-12 py-2">
                <div className="h-28 w-28 rounded-full bg-white"></div>
                <p className="text-sm">درمانگاه سعدی</p>
                <div className="flex flex-row items-center justify-center">
                  <Image src={LocationIcon} alt="Location Icon"></Image>
                  <p>تهران</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-[20px] bg-[#84CAF966] px-12 py-2">
                <div className="h-28 w-28 rounded-full bg-white"></div>
                <p className="text-sm">درمانگاه سعدی</p>
                <div className="flex flex-row items-center justify-center">
                  <Image src={LocationIcon} alt="Location Icon"></Image>
                  <p>تهران</p>
                </div>
              </div>
              <Image className="justify-self-end" src={NextIcon} alt="NextIcon"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
