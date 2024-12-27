'use client';

import { AppDispatch, RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopDoctors } from './topDoctorSlice';
import Image from 'next/image';
import StarIcon from './images/star.svg';
import LocationIcon from './images/location.svg';
import './style.css';

const LatestDoctor: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { doctors, loading, error } = useSelector((state: RootState) => state.topDoctors);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchTopDoctors());
  }, [dispatch]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoctors = doctors.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(doctors.length / itemsPerPage);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">برترین پزشکان</p>
        <button className="rounded-xl bg-primary px-2 py-1 text-white">
          <p>مشاهده بیشتر</p>
        </button>
      </div>
      <div className="flex flex-row items-center xl:justify-between xl:gap-8 2xl:justify-center">
        {currentDoctors.map((doctor: TopDoctorProps, index: number) => (
          <div
            className="flex flex-col items-center justify-center gap-2 rounded-3xl px-4 shadow xl:w-[300px] 2xl:w-[400px]"
            key={index}
          >
            <div className="flex w-full flex-row-reverse items-center gap-1 pt-2">
              <p>{doctor.rating}</p>
              <Image src={StarIcon} alt="Star Icon" className="h-4 w-4"></Image>
            </div>
            <Image src={doctor.imagePath} alt="Doctor" width={90} height={90}></Image>
            <p className="font-bold">{doctor.name}</p>
            <p>{doctor.speciality}</p>
            <div className="flex flex-row items-center justify-center">
              <Image src={LocationIcon} alt="Location Icon"></Image>
              <p className="text-primary">{doctor.location}</p>
            </div>
            <div className="flex w-full flex-row items-center justify-between px-4">
              <p>اولین نوبت خالی</p>
              <p>{doctor.first_available}</p>
            </div>
            <button className="mb-3 w-full rounded-2xl bg-primary py-2 text-white">
              <p>دریافت نوبت</p>
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div key={index} onClick={() => handlePageChange(index)} className="cursor-pointer">
            {currentPage === index ? (
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="8.5" fill="#22C0FF" />
                <circle cx="11.5" cy="11.5" r="11" stroke="#22C0FF" />
              </svg>
            ) : (
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#2E86C1" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestDoctor;
