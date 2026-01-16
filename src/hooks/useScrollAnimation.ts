import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn" | "stagger";

interface UseScrollAnimationOptions {
  type?: AnimationType;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  start?: string;
  once?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const ref = useRef<T>(null);
  const {
    type = "fadeUp",
    delay = 0,
    duration = 0.8,
    start = "top 85%",
    once = true,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationProps: gsap.TweenVars = {
      duration,
      delay,
      ease: "power3.out",
    };

    // Set initial state based on animation type
    switch (type) {
      case "fadeUp":
        gsap.set(element, { opacity: 0, y: 60 });
        animationProps = { ...animationProps, opacity: 1, y: 0 };
        break;
      case "fadeIn":
        gsap.set(element, { opacity: 0 });
        animationProps = { ...animationProps, opacity: 1 };
        break;
      case "fadeLeft":
        gsap.set(element, { opacity: 0, x: -60 });
        animationProps = { ...animationProps, opacity: 1, x: 0 };
        break;
      case "fadeRight":
        gsap.set(element, { opacity: 0, x: 60 });
        animationProps = { ...animationProps, opacity: 1, x: 0 };
        break;
      case "scaleIn":
        gsap.set(element, { opacity: 0, scale: 0.9 });
        animationProps = { ...animationProps, opacity: 1, scale: 1 };
        break;
      default:
        gsap.set(element, { opacity: 0, y: 60 });
        animationProps = { ...animationProps, opacity: 1, y: 0 };
    }

    const animation = gsap.to(element, {
      ...animationProps,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [type, delay, duration, start, once]);

  return ref;
};

// Hook for staggered children animations
export const useStaggerAnimation = <T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const ref = useRef<T>(null);
  const {
    delay = 0,
    duration = 0.6,
    staggerDelay = 0.1,
    start = "top 85%",
    once = true,
  } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.children;
    if (children.length === 0) return;

    gsap.set(children, { opacity: 0, y: 40 });

    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger: staggerDelay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, staggerDelay, start, once]);

  return ref;
};

export default useScrollAnimation;
