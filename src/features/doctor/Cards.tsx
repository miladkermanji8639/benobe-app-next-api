const Doctor: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-2">
      <div className="flex flex-col gap-7">
        <div className="rounded-lg bg-gradient-to-t from-[#2E86C1] to-[#84CAF9] pr-[14px]">
          <div className="rounded-l-lg bg-white p-4">
            <h1 className="text-md font-semibold">درباره پزشک</h1>
            <p className="text-justify text-sm">
              دارای بورد تخصصی بیماری های نوزادان و کودکاندرمان اختلالات گوارشی و الرژیک نوزادان و
              کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی
              شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی (اسپیرومتری)، حضور
              دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش
              های مراجعین انجام می شودسابقه فعالیت بیش از 20 سال در بخش های مراقبت های ویژه نوزادان،
              همکاری با کودکان و سوختگی بیمارستان پیامبران بیمارستان ابن سینا و سابقه 10 سال فعالیت
              در بیمارستان شهدای یافت آبادپیج اینستاگرام dr.behrouzmegdadi سایت شخصی
              www.drbehrouzmeghdadi.com برای نوبت گیری اسکن پای کودک و ویزیت ارتوپدی لطفا کلیک کنید
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-t from-[#2E86C1] to-[#84CAF9] pl-[14px]">
          <div className="rounded-r-lg bg-white p-4">
            <h1 className="text-md font-semibold">درباره پزشک</h1>
            <p className="text-justify text-sm">
              دارای بورد تخصصی بیماری های نوزادان و کودکاندرمان اختلالات گوارشی و الرژیک نوزادان و
              کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی
              شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی (اسپیرومتری)، حضور
              دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش
              های مراجعین انجام می شودسابقه فعالیت بیش از 20 سال در بخش های مراقبت های ویژه نوزادان،
              همکاری با کودکان و سوختگی بیمارستان پیامبران بیمارستان ابن سینا و سابقه 10 سال فعالیت
              در بیمارستان شهدای یافت آبادپیج اینستاگرام dr.behrouzmegdadi سایت شخصی
              www.drbehrouzmeghdadi.com برای نوبت گیری اسکن پای کودک و ویزیت ارتوپدی لطفا کلیک کنید
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center p-2">
          <h2 className="w-full">نوبت ویزیت حضوری</h2>
          <div className="flex w-full flex-row items-center justify-center"></div>
          <div className="flex w-full flex-row items-center justify-between"></div>
          <button className="p-4">
            <p>دریافت نوبت</p>
          </button>
        </div>
        <div>
          <h2>نوبت ویزیت آنلاین</h2>
        </div>
        <div>
          <h2>آدرس و تلفن تماس</h2>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
