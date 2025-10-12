import { useState, useEffect } from "react";
import { AnimatedSection } from "./AnimatedSection";
import Hero from "./Hero";
import Services from "./Services";
import Process from "./Process";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Small delay for smoother effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      {/* Hero stays as is - no animation needed */}
      <Hero />

      {/* Animated sections */}
      <AnimatedSection animationType="fadeUp" delay={100}>
        <Services />
      </AnimatedSection>

      <AnimatedSection animationType="fadeUp" delay={150}>
        <Process />
      </AnimatedSection>

      <AnimatedSection animationType="fadeUp" delay={200}>
        <Portfolio />
      </AnimatedSection>

      <AnimatedSection animationType="fadeUp" delay={250}>
        <Contact />
      </AnimatedSection>
    </div>
  );
}
