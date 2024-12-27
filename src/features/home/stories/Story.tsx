'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStories } from '@/features/home/stories/storySlice';
import { RootState, AppDispatch } from '@/store/store';
import Image from 'next/image';
import PlaybackIcon from '@/features/home/stories/images/playback.svg';
import '@/features/home/stories/styles/story.css';

const Story: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { stories, loading, error } = useSelector((state: RootState) => state.stories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;
  return (
    <div className="story-list">
      <ul className="no-scrollbar flex flex-row gap-3 overflow-x-scroll px-4 py-3 xl:gap-5 xl:px-24 xl:py-5">
        {stories.map((story: StoryProps, index: number) => (
          <div className="relative flex flex-col items-center justify-center" key={index}>
            <div className="border-story h-16 w-16 xl:h-20 xl:w-20">
              <Image
                className="rounded-full object-cover p-[1px]"
                src={story.imagePath}
                alt={`${story.name} Story`}
                width={80}
                height={80}
              ></Image>
            </div>
            {story.live === true && (
              <div className="absolute top-12 z-20 flex flex-row items-center justify-center gap-2 rounded-full bg-[#3384BD] px-3 text-white xl:top-16">
                <Image src={PlaybackIcon} alt="Playback" width={12} height={12}></Image>
                <p className="text-sm">زنده</p>
              </div>
            )}
            <p className="py-1.5 text-[13px] xl:py-2 xl:text-sm">{story.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Story;
