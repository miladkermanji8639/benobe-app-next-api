import BannerLanding from '@/features/bannerLanding/bannerLanding';
import BottomNavbar from '@/features/home/bottom_navbar/BottomNavbar';
import Navbar from '@/features/home/navbar/Navbar';
import Story from '@/features/home/stories/Story';
import Landing from '@/features/home/landing/Landing';
import Footer from '@/features/home/footer/Footer';
import Stat from '@/app/images/stats.svg';
import Image from 'next/image';
import MobileLanding from '@/features/home/mobile_landing/MobileLanding';

export default function Home() {
  return (
    <>
      <div className="font-yekanBakh bg-background_primary sm:hidden">
        <Navbar></Navbar>
        <BottomNavbar></BottomNavbar>
        <Story></Story>
        <BannerLanding></BannerLanding>

        <div className="flex flex-col items-center bg-[#f6fbff] py-4">
          <Image src={Stat} alt="Statistics"></Image>
        </div>
        <MobileLanding></MobileLanding>
        <Footer></Footer>
      </div>
      <div className="font-yekanBakh hidden bg-background_primary sm:block xl:hidden"></div>
      <div className="font-yekanBakh hidden bg-background_primary xl:block">
        <div className="flex flex-col">
          <Navbar></Navbar>
          <Story></Story>
          <BannerLanding></BannerLanding>
          <Landing></Landing>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
