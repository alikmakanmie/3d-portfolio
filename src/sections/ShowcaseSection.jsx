import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const vocakeyRef = useRef(null);
  const laravel1Ref = useRef(null);
  const laravel2Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [vocakeyRef.current, laravel1Ref.current, laravel2Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" className="max-w-7xl w-full mx-auto px-5 md:px-10 mt-12">
      <p ref={sectionRef} className="head-text">
      </p>

      {/* Project 1: VocaKey - Python/Flask */}
      <div ref={vocakeyRef} className="flex flex-col md:flex-row items-center my-12 gap-8">
        <div className="flex-1">
          <img
            src="/images/vocakey-mockup.png"
            alt="VocaKey Music Application"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:pl-12 mt-8 md:mt-0">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
            VocaKey - Music Pitch Analysis & Transpose
          </h2>
          <p className="text-white-600 mb-4">
            Advanced music application featuring pitch detection and audio processing
            implementation. Built with Python/Flask for backend development with API
            design for mobile integration. Utilizes sophisticated audio algorithms for
            real-time pitch analysis.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
              Python/Flask
            </span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
              Audio Processing
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
              API Development
            </span>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
              Flutter Integration
            </span>
          </div>
          <p className="text-white-500 text-sm">
            Pitch detection, audio signal processing, RESTful API for mobile app integration
          </p>
        </div>
      </div>

      {/* Project 2: Web Application - Laravel (Wesclic) */}
      <div ref={laravel1Ref} className="flex flex-col md:flex-row-reverse items-center my-24 gap-8">
        <div className="flex-1">
          <img
            src="/images/laravel-web1.png"
            alt="Laravel Web Application"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:pr-12 mt-8 md:mt-0">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Enterprise Web Application - PHP Laravel
          </h2>
          <p className="text-white-600 mb-4">
            Contributed to development and maintenance of web applications at Wesclic
            Software House, focusing on backend systems using PHP Laravel. Implemented
            features, managed databases, and performed debugging to ensure optimal
            system functionality and performance.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
              PHP Laravel
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
              MySQL
            </span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
              RESTful API
            </span>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
              Backend Development
            </span>
          </div>
          <p className="text-white-500 text-sm">
            Feature implementation, database management, clean code architecture, team collaboration
          </p>
        </div>
      </div>

      {/* Project 3: Full-Stack Web Platform - Laravel */}
      <div ref={laravel2Ref} className="flex flex-col md:flex-row items-center my-24 gap-8">
        <div className="flex-1">
          <img
            src="/images/laravel-web2.png"
            alt="Laravel Backend System"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
        <div className="flex-1 md:pl-12 mt-8 md:mt-0">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Scalable Backend System - Laravel & API Integration
          </h2>
          <p className="text-white-600 mb-4">
            Designed, developed, and implemented new backend features using Laravel
            and PHP with clean, structured, and maintainable code. Focused on building
            scalable web applications with secure API authentication, third-party
            service integration, and optimal performance.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
              Laravel Framework
            </span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
              API Security
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
              Third-party Integration
            </span>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">
              Docker
            </span>
          </div>
          <p className="text-white-500 text-sm">
            Secure API design, authentication/authorization, database optimization, containerization
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
