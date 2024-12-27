import Image from 'next/image';
import HamburgerIcon from '@/features/home/navbar/images/hamburger.svg';
import BenobeLogo from '@/app/images/logo.png';
import ProfileIcon from '@/features/home/navbar/images/user.svg';
import MobileProfileIcon from '@/features/home/navbar/images/profile.svg';
import '@/features/home/navbar/styles/style.css';
import Link from 'next/link';
import DoctorIcon from '@/features/home/navbar/images/doctors.svg';
import LocationsIcon from '@/features/home/navbar/images/locations.svg';
import ConsultIcon from '@/features/home/navbar/images/consult.svg';
import MagazineIcon from '@/features/home/navbar/images/magazine.svg';
import ShopIcon from '@/features/home/navbar/images/shop.svg';
import LogoutIcon from '@/features/home/navbar/images/exit.svg';
import SearchIcon from '@/features/bannerLanding/images/search.svg';
import DropdownIcon from '@/features/bannerLanding/images/dropdown.svg';

const NavbarAlt: React.FC = () => {
  return (
    <>
      <div className="sm:hidden">
        <div className="nav-border relative flex items-center justify-between px-3 pb-2 pt-8">
          <Image src={HamburgerIcon} alt="Hamburger Menu Icon"></Image>
          <Image
            className="absolute left-1/2 h-16 w-16 -translate-x-1/2 transform"
            alt="Benobe Logo"
            src={BenobeLogo}
          ></Image>
          <button className="">
            <Image className="h-9 w-9" src={MobileProfileIcon} alt="Profile Icon"></Image>
          </button>
        </div>
      </div>
      <div className="hidden sm:block xl:hidden"></div>
      <div className="hidden xl:block">
        <div className="flex flex-col border-b border-border_primary px-4 py-2 shadow-xl xl:px-28 xl:py-2">
          <div className="flex flex-row items-center justify-between">
            <div>
              <Image className="xl:h-24 xl:w-24" src={BenobeLogo} alt="Benobe Logo"></Image>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 xl:gap-12 2xl:gap-20">
              <Link href="#" className="flex flex-row items-center justify-center">
                <p>صفحه اصلی</p>
              </Link>
              <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
                <Image src={DoctorIcon} alt="Doctor Icon"></Image>
                <p>لیست پزشکان</p>
              </Link>
              <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
                <Image src={LocationsIcon} alt="Locations Icon"></Image>
                <p>مراکز درمانی</p>
              </Link>
              <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
                <Image src={ConsultIcon} alt="Consult Icon"></Image>
                <p>مشاوره آنلاین</p>
              </Link>
              <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
                <Image src={MagazineIcon} alt="Magazine Icon"></Image>
                <p>مجله سلامت</p>
              </Link>
              <Link href="#" className="flex flex-row items-center justify-center gap-2 xl:gap-3">
                <Image src={ShopIcon} alt="Shop Icon"></Image>
                <p>فروشگاه</p>
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <button className="flex flex-row items-center justify-center gap-[2px] rounded-md border border-black px-2 py-2">
                <Image className="xl:w-6" src={ProfileIcon} alt="Profile Icon"></Image>
                <p className="text-md">ورود / ثبت نام</p>
              </button>
              <button>
                <Image src={LogoutIcon} alt="Logout Icon"></Image>
              </button>
            </div>
          </div>
          <div className="mb-2 flex w-full flex-row justify-center">
            <div className="flex flex-row items-center justify-between rounded-2xl border border-primary bg-white px-1 py-2 xl:border-none xl:px-3 xl:py-4">
              <div className="flex flex-row items-center justify-center gap-2 border-l-2 px-2">
                <p className="text-sm text-primary xl:text-lg">انتخاب شهر</p>
                <Image
                  className="h-4 w-4"
                  src={DropdownIcon}
                  width={14}
                  height={14}
                  alt="Dropdown"
                />
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
        </div>
      </div>
    </>
  );
};

export default NavbarAlt;
