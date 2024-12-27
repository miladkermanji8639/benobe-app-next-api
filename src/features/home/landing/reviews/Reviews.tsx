// import Image from 'next/image';
// import ShapeVector from './images/shape.svg';
import AnimatedReview from './switch';

const Reviews: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">نظرات کاربران</p>
        <button className="rounded-xl bg-primary px-2 py-1 text-white">
          <p>مشاهده بیشتر</p>
        </button>
      </div>
      <div className="flex w-full flex-row justify-center">
        <div className="relative">
          {/* <Image className="w-full" src={ShapeVector} alt="Shape vector"></Image> */}
          <AnimatedReview></AnimatedReview>
          <div className="pointer-events-auto absolute inset-0 bg-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
