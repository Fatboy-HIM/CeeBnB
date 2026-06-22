'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const overlayRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo(ctaRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=1');
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/images/hero-fallback.jpg"
      >
        <source src="/videos/drone-orbit.mp4" type="video/mp4" />
      </video>

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-sm md:text-lg uppercase tracking-widest mb-2 opacity-80">
          Experience the View
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Lagos Skyline Retreat</h1>
        <button
          ref={ctaRef}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Your Stay
        </button>
      </div>
    </section>
  );
}