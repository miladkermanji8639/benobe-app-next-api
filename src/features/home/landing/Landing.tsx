import LatestDoctor from './doctors/LatestDoctor';
import TopDoctor from './doctors/TopDoctor';
import Specialties from '@/features/home/landing/specialties/Specialties';
import Mag from '@/features/home/landing/mag/Mag';
import Facilities from '@/features/home/landing/facilities/Facilities';
import Reviews from '@/features/home/landing/reviews/Reviews';
import Consultant from '@/features/home/landing/consultant/Consultant';
import Shop from './shop/Shop';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 px-3 py-2 xl:gap-28 xl:px-20 xl:py-12">
      <TopDoctor></TopDoctor>
      <Specialties></Specialties>
      <Facilities></Facilities>
      <Reviews></Reviews>
      <Consultant></Consultant>
      <Mag></Mag>
      <LatestDoctor></LatestDoctor>
      <Shop></Shop>
    </div>
  );
};

export default Landing;
