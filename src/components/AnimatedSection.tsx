import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";
  delay?: number;
  threshold?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animationType = "fadeUp",
  delay = 0,
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";

    switch (animationType) {
      case "fadeUp":
        return `${baseClasses} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`;
      case "fadeIn":
        return `${baseClasses} ${isVisible ? "opacity-100" : "opacity-0"}`;
      case "fadeLeft":
        return `${baseClasses} ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`;
      case "fadeRight":
        return `${baseClasses} ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`;
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}>
      {children}
    </div>
  );
};
