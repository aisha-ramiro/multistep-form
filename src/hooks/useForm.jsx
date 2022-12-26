import { useState } from "react";

export default function useForm (steps) {
  const [ currentStep, setCurrentStep ] = useState(1)

  return{
    currentStep,
    currentComponent: steps[currentStep]
  }
}