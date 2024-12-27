import Image from 'next/image';
import Image1 from './images/latest1.png';
import Image2 from './images/latest2.png';
import Image3 from './images/latest3.png';
import Image4 from './images/latest4.png';
import ImageMore from './images/latest_more.png';
import LocationIcon from './images/location.svg';

const LatestDoctor: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">جدید ترین پزشکان به‌نوبه</p>
      </div>
      <div className="flex flex-row items-center xl:justify-between 2xl:justify-center 2xl:gap-6">
        <div className="flex flex-col items-center justify-center gap-2 rounded-3xl px-4 py-3 shadow xl:w-[250px] 2xl:w-[300px] 2xl:gap-4 2xl:py-8">
          <Image src={Image1} alt="Doctor" width={90} height={90}></Image>
          <p className="font-bold">دکتر صادق جهان بخت</p>
          <p className="">متخصص بیماری های ریوی</p>
          <div className="flex flex-row items-center justify-center">
            <Image src={LocationIcon} alt="Location Icon"></Image>
            <p className="text-primary">سنندج</p>
          </div>
          <button className="mb-3 w-full rounded-2xl bg-primary py-2 text-white">
            <p>جزئیات بیشتر</p>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-3xl px-4 py-3 shadow xl:w-[250px] 2xl:w-[300px] 2xl:gap-4 2xl:py-8">
          <Image src={Image2} alt="Doctor" width={90} height={90}></Image>
          <p className="font-bold">دکتر صادق جهان بخت</p>
          <p className="">متخصص بیماری های ریوی</p>
          <div className="flex flex-row items-center justify-center">
            <Image src={LocationIcon} alt="Location Icon"></Image>
            <p className="text-primary">سنندج</p>
          </div>
          <button className="mb-3 w-full rounded-2xl bg-primary py-2 text-white">
            <p>جزئیات بیشتر</p>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-3xl px-4 py-3 shadow xl:w-[250px] 2xl:w-[300px] 2xl:gap-4 2xl:py-8">
          <Image src={Image3} alt="Doctor" width={90} height={90}></Image>
          <p className="font-bold">دکتر صادق جهان بخت</p>
          <p className="">متخصص بیماری های ریوی</p>
          <div className="flex flex-row items-center justify-center">
            <Image src={LocationIcon} alt="Location Icon"></Image>
            <p className="text-primary">سنندج</p>
          </div>
          <button className="mb-3 w-full rounded-2xl bg-primary py-2 text-white">
            <p>جزئیات بیشتر</p>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-3xl px-4 py-3 shadow xl:w-[250px] 2xl:w-[300px] 2xl:gap-4 2xl:py-8">
          <Image src={Image4} alt="Doctor" width={90} height={90}></Image>
          <p className="font-bold">دکتر صادق جهان بخت</p>
          <p className="">متخصص بیماری های ریوی</p>
          <div className="flex flex-row items-center justify-center">
            <Image src={LocationIcon} alt="Location Icon"></Image>
            <p className="text-primary">سنندج</p>
          </div>
          <button className="mb-3 w-full rounded-2xl bg-primary py-2 text-white">
            <p>جزئیات بیشتر</p>
          </button>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 2xl:w-[300px] 2xl:py-8">
          <Image className="w-60" src={ImageMore} alt="More Image"></Image>
          <button className="w-60 rounded-2xl bg-primary px-4 py-2 text-white">
            <p>مشاهده همه</p>
          </button>
          <button className="w-60 rounded-2xl bg-[#1DEB3C] px-4 py-2 text-white">
            <p>ثبت نام پزشکان</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestDoctor;
