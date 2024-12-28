/* src\app\auth\page.tsx */
import Navbar from '@/features/home/navbar/Navbar';
import Login from '@/features/login/Login';
import Image from 'next/image';
import LoginImage from './images/image.png';

export default function Auth() {
  return (
    <>
      <div className="font-yekanBakh bg-background_primary sm:hidden">
        <Navbar />
      </div>
      <div className="font-yekanBakh hidden bg-background_primary sm:block xl:hidden"></div>
      <div className="font-yekanBakh hidden bg-background_primary xl:block">
        <div className="h-screen">
          <div className="shadow-[6px_6px_12px_rgba(0,0,0,0.25)]">
            <Navbar />
          </div>
          <div className="flex w-full flex-row items-center justify-center pt-40">
            <Login />
            <Image src={LoginImage} alt="Login Image" width={666} height={456} />
          </div>
        </div>
      </div>
    </>
  );
}
