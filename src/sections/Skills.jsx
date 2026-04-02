import {PiFileCpp} from 'react-icons/pi';
import { FaPython, FaHtml5, FaReact, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa6';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import {RiTailwindCssFill} from 'react-icons/ri';
import {SiMongodb} from 'react-icons/si';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {

  const skills = [
    { icon: <PiFileCpp />, name: "C++"},
    { icon: <FaPython />, name: "Python"},
    { icon: <FaHtml5 />, name: "HTML"},
    { icon: <DiCss3 />, name: "CSS"},
    { icon: <IoLogoJavascript />, name: "JavaScript"},
    { icon: <IoLogoNodejs />, name: "Node.js"},
    { icon: <FaReact />, name: "React.js"},
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS"},
    { icon: <SiMongodb />, name: "MongoDB"},
    { icon: <FaGitAlt />, name: "Git"},
    { icon: <FaGithub />, name: "GitHub"},
    { icon: <FaBootstrap />, name: "BootStrap"},
  ];
  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const lastPointerX = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if(!el) return;

    const io = new IntersectionObserver((
      [entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold : [0.1] }
    )
    io.observe(el);
    return() => io.disconnect();
  }, [])

  useEffect(() => {
    if(!active) return;

    const el = sectionRef.current;
    if(!el) return;

    const updateDirection = (clientX) => {
      if(lastPointerX.current == null) {
        lastPointerX.current = clientX;
        return;
      }

      const delta = clientX - lastPointerX.current;
      if(Math.abs(delta) > 2) {
        setDir(delta > 0 ? 1 : -1);
      }
      lastPointerX.current = clientX;
    };

    const onMouseMove = (e) => updateDirection(e.clientX);
    const onTouchStart = (e) => updateDirection(e.touches[0].clientX);
    const onTouchMove = (e) => updateDirection(e.touches[0].clientX);
    const resetPointer = () => {
      lastPointerX.current = null;
    };

    el.addEventListener('mousemove', onMouseMove, {passive : true});
    el.addEventListener('touchstart', onTouchStart, {passive : true});
    el.addEventListener('touchmove', onTouchMove, {passive : true});
    el.addEventListener('mouseleave', resetPointer);
    el.addEventListener('touchend', resetPointer);
    el.addEventListener('touchcancel', resetPointer);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('mouseleave', resetPointer);
      el.removeEventListener('touchend', resetPointer);
      el.removeEventListener('touchcancel', resetPointer);
    }
  }, [active]);

  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) => {
      const dt = (now - last)/1000;
      last = now;
      let next = x.get() + SPEED*dir*dt;
      const loop = trackRef.current?.scrollWidth/2 || 0;

      if(loop) {
        if(next <= -loop) next += loop;
        if(next >= 0) next -= loop;
      }
      x.set(next);
      id = requestAnimationFrame(tick);
    }
    id = requestAnimationFrame(tick);
    return() => cancelAnimationFrame(id);
  }, [dir, x]);

  return(
    <section id="skills" 
    ref={sectionRef}
    className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black overflow-hidden">
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-0 w-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-20 blur-[120px] animate-pulse
        '/>
        <div className='absolute bottom-1/4 right-0 w-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-20 blur-[120px] animate-pulse delay-500
        '/>
      </div>

      <motion.h2 className='text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10'
      initial={{opacity:0, y: -30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.1}}
      >
        My Skills
      </motion.h2>
      <motion.p className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10'
      initial={{opacity:0, y: -10}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.1}}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      <div className='relative w-full overflow-hidden'>
          <motion.div 
          ref={trackRef}
          className='flex gap-10 text-6xl text-[#1cd8d2]'
          style={{x, whiteSpace: "nowrap", willChange: "transform"}}
          >
            {repeated.map((s, i) => (
              <div key={i} className='flex flex-col items-center gap-2 min-w-30'
              aria-label={s.name}
              title={s.name}
              >
                <span className='hover:scale-125 transition-transform duration-300'>
                  {s.icon}
                </span>
                <p className='text-sm'>
                  {s.name}
                </p>
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  )
}
