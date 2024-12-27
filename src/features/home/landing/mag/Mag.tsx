import Image from 'next/image';
import './style.css';

const Mag: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">اخبار و مجله دانستنی‌ها</p>
        <button className="rounded-xl bg-primary px-2 py-1 text-white">
          <p>مشاهده بیشتر</p>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="relative rounded-3xl xl:w-[400px]">
          <Image
            className="blur-[3.5px]"
            src="/mag/image1.png"
            alt="Image"
            width={400}
            height={350}
          />
          <div className="absolute bottom-2 left-2 right-2 m-2 w-auto rounded-xl bg-white/60 p-4 text-center">
            <p className="mb-1 text-xl font-bold">علت سرفه های خشک و مداوم</p>
            <p className="mb-2 overflow-hidden whitespace-nowrap text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از.
            </p>
            <p className="text-sm font-semibold text-primary">مطالعه کردن</p>
          </div>
        </div>
        <div className="relative rounded-3xl xl:w-[400px]">
          <Image
            className="blur-[3.5px]"
            src="/mag/image1.png"
            alt="Image"
            width={400}
            height={350}
          />
          <div className="absolute bottom-2 left-2 right-2 m-2 w-auto rounded-xl bg-white/60 p-4 text-center">
            <p className="mb-1 text-xl font-bold">علت سرفه های خشک و مداوم</p>
            <p className="mb-2 overflow-hidden whitespace-nowrap text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از.
            </p>
            <p className="text-sm font-semibold text-primary">مطالعه کردن</p>
          </div>
        </div>
        <div className="relative rounded-3xl xl:w-[400px]">
          <Image
            className="blur-[3.5px]"
            src="/mag/image1.png"
            alt="Image"
            width={400}
            height={350}
          />
          <div className="absolute bottom-2 left-2 right-2 m-2 w-auto rounded-xl bg-white/60 p-4 text-center">
            <p className="mb-1 text-xl font-bold">علت سرفه های خشک و مداوم</p>
            <p className="mb-2 overflow-hidden whitespace-nowrap text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از.
            </p>
            <p className="text-sm font-semibold text-primary">مطالعه کردن</p>
          </div>
        </div>
        <div className="relative rounded-3xl xl:w-[400px]">
          <Image
            className="blur-[3.5px]"
            src="/mag/image1.png"
            alt="Image"
            width={400}
            height={350}
          />
          <div className="absolute bottom-2 left-2 right-2 m-2 w-auto rounded-xl bg-white/60 p-4 text-center">
            <p className="mb-1 text-xl font-bold">علت سرفه های خشک و مداوم</p>
            <p className="mb-2 overflow-hidden whitespace-nowrap text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از.
            </p>
            <p className="text-sm font-semibold text-primary">مطالعه کردن</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mag;
