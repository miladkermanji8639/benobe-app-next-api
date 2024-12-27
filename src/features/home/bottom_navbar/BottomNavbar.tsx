import BackgroundVector from '@/features/home/bottom_navbar/images/bg_vector.svg';
import Image from 'next/image';
import HomeIcon from '@/features/home/bottom_navbar/images/home.svg';
import SearchIcon from '@/features/home/bottom_navbar/images/search.svg';
import DoctorIcon from '@/features/home/bottom_navbar/images/doctors.svg';
import AppointmentIcon from '@/features/home/bottom_navbar/images/appointment.svg';
import ProfileIcon from '@/features/home/bottom_navbar/images/profile.svg';

const BottomNavbar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 h-16 w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src={BackgroundVector}
          alt="Navbar Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <nav className="items-between flex h-full justify-around">
        <div className="flex w-16 flex-col items-center justify-center">
          <Image src={SearchIcon} className="h-5 w-5" alt="Home Icon"></Image>
          <p className="text-xs">جستجو</p>
        </div>
        <div className="flex w-16 flex-col items-center justify-center">
          <Image src={DoctorIcon} className="h-5 w-5" alt="Home Icon"></Image>
          <p className="text-xs">پزشکان</p>
        </div>
        <div className="-mt-4 flex w-16 flex-col items-center justify-center text-secondary">
          <Image src={HomeIcon} className="h-5 w-5" alt="Home Icon"></Image>
          <p className="text-xs">خانه</p>
        </div>
        <div className="flex w-16 flex-col items-center justify-center">
          <Image src={AppointmentIcon} className="h-5 w-5" alt="Home Icon"></Image>
          <p className="text-xs">نوبت‌های من</p>
        </div>
        <div className="flex w-16 flex-col items-center justify-center">
          <Image src={ProfileIcon} className="h-5 w-5" alt="Home Icon"></Image>
          <p className="text-xs">پروفایل</p>
        </div>
      </nav>
    </div>
  );
};

export default BottomNavbar;
