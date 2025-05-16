"use client"
import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex   justify-center w-full max-w-7xl mx-auto  ">
      {steps.map((label, idx) => {
        const isActive = idx === currentStep;
        const isCompleted = idx < currentStep;
        return (
          <div key={label} className="flex items-center  ">
            <div className="flex flex-col items-center justify-center ">
              <div
                className={`flex items-center justify-center rounded-full w-6 h-6 border-2 text-base font-bold transition-all
                  ${isCompleted ? 'bg-green-500  text-white' : isActive ? 'bg-white border-[#003876] text-[#003876]' : 'bg-gray-200 border-gray-300 text-gray-400'}`}
              >
                {isCompleted ? (
                  <svg width="10" height="10" fill="none" viewBox="0 0 20 20"><path d="M5 10.5l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  idx + 1
                )}
              </div>
              <span className={`mt-2 text-xs text-center max-w-[200px] ${isActive ? 'font-semibold text-[#003876]' : isCompleted ? 'text-[#003876]' : 'text-gray-400'}`}>{label}</span>
            </div>
            <div className="flex-grow   justify-items-center justify-self-auto items-center">
             {idx !== steps.length - 1 && (
              <div className={`h-0.5 w-5  rounded flex justify-items-center -mt-3 transition-all ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            )} 
</div>
          </div>
        );
      })}
    </div>
  );
}