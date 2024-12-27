import Template from './images/template.svg';
import Image from 'next/image';

const Consultant: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">مشاوران تلفنی</p>
        <button className="rounded-xl bg-primary px-2 py-1 text-white">
          <p>مشاهده بیشتر</p>
        </button>
      </div>
      <div className="relative w-full px-20">
        <Image className="w-full" src={Template} alt="Template"></Image>
        <div className="pointer-events-auto absolute inset-0 bg-transparent"></div>
      </div>
    </div>
  );
};

export default Consultant;
