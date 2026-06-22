'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RoomCard({ image, title, description, price }) {
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const text = textRef.current;

    gsap.fromTo(card, { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: card, start: 'top 85%' }
    });
    gsap.fromTo(text, { opacity: 0, x: -60 }, {
      opacity: 1, x: 0, duration: 1, delay: 0.2,
      scrollTrigger: { trigger: card, start: 'top 85%' }
    });
  }, []);

  return (
    <div ref={cardRef} className="flex flex-col md:flex-row gap-8 items-center mb-24 opacity-0">
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
        <img src={image} alt={title} className="w-full h-80 object-cover" />
      </div>
      <div ref={textRef} className="w-full md:w-1/2 space-y-4 opacity-0">
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <p className="text-2xl font-semibold text-emerald-700">₦{price} / night</p>
        <button className="border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}