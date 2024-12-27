import LiverIcon from '@/features/home/landing/specialties/images/liver.png';
import BrainIcon from '@/features/home/landing/specialties/images/brain.png';
import BloodIcon from '@/features/home/landing/specialties/images/blood.png';
import DentistIcon from '@/features/home/landing/specialties/images/teeth.png';
import EyeIcon from '@/features/home/landing/specialties/images/eyes.png';
import HeartIcon from '@/features/home/landing/specialties/images/heart.png';
import ArrowIcon from '@/features/home/landing/specialties/images/arrow.svg';
import Image, { StaticImageData } from 'next/image';
import './style.css';

const Specialties: React.FC = () => {
  const specialtiesList = [
    {
      name: 'دکتر کبد',
      stat: '۵۰۰+ پزشک',
      image: LiverIcon,
      alt: 'Liver',
    },
    {
      name: 'دکتر مغز و اعصاب',
      stat: '۵۰۰+ پزشک',
      image: BrainIcon,
      alt: 'Brain',
    },
    {
      name: 'دکتر کم خونی',
      stat: '۵۰۰+ پزشک',
      image: BloodIcon,
      alt: 'Blood',
    },
    {
      name: 'دندان پزشک',
      stat: '۵۰۰+ پزشک',
      image: DentistIcon,
      alt: 'Dentist',
    },
    {
      name: 'دکتر چشم پزشک',
      stat: '۵۰۰+ پزشک',
      image: EyeIcon,
      alt: 'Eye',
    },
    {
      name: 'دکتر قلب و عروق',
      stat: '۵۰۰+ پزشک',
      image: HeartIcon,
      alt: 'Heart',
    },
  ];
  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">تخصص‌ها</p>
        <button className="rounded-xl bg-primary px-2 py-1 text-white">
          <p>مشاهده بیشتر</p>
        </button>
      </div>
      <div className="flex flex-row items-center justify-between xl:gap-8 2xl:justify-center">
        {specialtiesList.map(
          (
            item: { name: string; stat: string; image: StaticImageData; alt: string },
            index: number,
          ) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1 rounded-2xl py-3 shadow xl:w-[400px]"
            >
              <div className="rounded-full bg-[#84CAF980] p-4">
                <Image
                  className="h-4 w-4 xl:h-8 xl:w-8"
                  src={item.image}
                  alt={`${item.alt} Icon`}
                ></Image>
              </div>
              <p className="w-full text-center text-sm font-bold xl:text-base">{item.name}</p>
              <p className="w-full text-center text-xs xl:text-base">{item.stat}</p>
              <div className="flex flex-row items-center justify-center gap-1">
                <p className="font-bold text-primary">بریم</p>
                <Image className="h-5 w-5" src={ArrowIcon} alt="Arrow Icon"></Image>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Specialties;
