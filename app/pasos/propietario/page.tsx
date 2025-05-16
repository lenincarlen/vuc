"use client"
import React, { useState } from "react";
import Stepper from "../../components/Stepper";
import PropietarioForm from "../../components/forms/PropietarioForm";
import AutorProyectoForm from "../../components/forms/AutorProyectoForm";
import MemoriaDescriptivaForm from "../../components/forms/MemoriaDescriptivaForm";
import DatosTramiteForm from "../../components/forms/DatosTramiteForm";
import InmuebleForm from "../../components/forms/InmuebleForm";
import FacturacionForm from "../../components/forms/FacturacionForm";
import DocumentosForm from "../../components/forms/DocumentosForm";

const pasosPropietario = [
  "Propietario",
  "Autor del proyecto",
  "Memoria",
  "Datos",
  "Inmuebles",
  "Facturación",
  "Documentos"
];

export default function PasoPropietario() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data: any) => {
    setFormData(prev => ({
      ...prev,
      [pasosPropietario[currentStep]]: data
    }));
    
    // Avanzar al siguiente paso después de guardar los datos
    if (currentStep < pasosPropietario.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const renderFormByStep = () => {
    switch (currentStep) {
      case 0: // Propietario
        return <PropietarioForm onSubmit={handleFormSubmit} />;
      case 1: // Autor del proyecto
        return <AutorProyectoForm onSubmit={handleFormSubmit} />;
      case 2: // Memoria
        return <MemoriaDescriptivaForm onSubmit={handleFormSubmit} />;
      case 3: // Datos
        return <DatosTramiteForm onSubmit={handleFormSubmit} />;
      case 4: // Inmuebles
        return <InmuebleForm onSubmit={handleFormSubmit} />;
      case 5: // Facturación
        return <FacturacionForm onSubmit={handleFormSubmit} />;
      case 6: // Documentos
        return <DocumentosForm onSubmit={handleFormSubmit} />;
      default:
        return <div>Paso no encontrado</div>;
    }
  };

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-5">
      <Stepper steps={pasosPropietario} currentStep={currentStep} />
      <div className="mt-8 w-full max-w-2xl">
    
        {/* Renderizar el formulario según el paso actual */}
        {renderFormByStep()}
        
        <div className="mt-6 flex justify-end gap-3" >
        <button
            className=" text-red-600 px-3 py-2 rounded-lg disabled:opacity-50"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
          >
            Anular tramite
          </button>
          <button
            className="bg-gray-200 text-gray-600 px-3 py-2 rounded-lg disabled:opacity-50"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
          >
            Anterior
          </button>
          <button
            className="bg-[#003876] text-white px-3 py-2 rounded-lg disabled:opacity-50"
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, pasosPropietario.length - 1))}
            disabled={currentStep === pasosPropietario.length - 1}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}