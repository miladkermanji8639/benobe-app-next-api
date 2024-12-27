'use client';

import { useState, useEffect } from 'react';
import Image1 from './images/image1.svg';
import Image2 from './images/image2.svg';
import Image3 from './images/image3.svg';
import Image4 from './images/image4.svg';
import Image from 'next/image';

const images = [Image1, Image2, Image3, Image4];

const AnimatedReview = () => {
  const [order, setOrder] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prevOrder) => {
        const last = prevOrder[prevOrder.length - 1];
        const rest = prevOrder.slice(0, prevOrder.length - 1);
        return [last, ...rest];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-6 transition-transform duration-1000">
        {order.map((image, index) => (
          <Image
            key={index}
            className="flex-shrink-0 xl:w-[300px] 2xl:w-[400px]"
            src={image}
            alt={`image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedReview;
