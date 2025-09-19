import React from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, i'm</span>
            <span className="text-primary md:text-5xl opacity-0 animate-fade-in-delay-1">
              {" "}
              Sonam
            </span>
            <span className="text-gradient md:text-5xl ml-2 opacity-0 animate-fade-in-delay-2">
              {""}
              Kesharwani
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.<br></br>
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absoulte bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce mt-30 ml-4">
        <span className="text-sem text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="h-5 w-5 pt-1 text-primary"></ArrowDown>
      </div>
    </section>
  );
};
