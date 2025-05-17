"use client"
import React, { useState } from "react";
import Stepper from "../../components/Stepper";
import AutorProyectoForm from "../../components/forms/AutorProyectoForm";
import PropietarioForm from "../../components/forms/PropietarioForm";
import MemoriaDescriptivaForm from "../../components/forms/MemoriaDescriptivaForm";
import DatosTramiteForm from "../../components/forms/DatosTramiteForm";
import InmuebleForm from "../../components/forms/InmuebleForm";
import FacturacionForm from "../../components/forms/FacturacionForm";
import DocumentosForm from "../../components/forms/DocumentosForm";
import { AnimatePresence, motion } from "framer-motion";

const pasosAutorProyecto = [
  "Propietario ",
  "Autor del Proyecto",
  "Memoria",
  "Datos",
  "Inmuebles",
  "Facturación",
  "Documentos"
];

export default function PasoAutorProyecto() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data: any) => {
    setFormData(prev => ({
      ...prev,
      [pasosAutorProyecto[currentStep]]: data
    }));
    
    // Avanzar al siguiente paso después de guardar los datos
    if (currentStep < pasosAutorProyecto.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const renderFormByStep = () => {
    switch (currentStep) {
      case 0:
        return <AutorProyectoForm onSubmit={handleFormSubmit} />;
      case 1:
        return <PropietarioForm onSubmit={handleFormSubmit} />;
      case 2:
        return <MemoriaDescriptivaForm onSubmit={handleFormSubmit} />;
      case 3:
        return <DatosTramiteForm onSubmit={handleFormSubmit} />;
      case 4:
        return <InmuebleForm onSubmit={handleFormSubmit} />;
      case 5:
        return <FacturacionForm onSubmit={handleFormSubmit} />;
      case 6:
        return <DocumentosForm onSubmit={handleFormSubmit} />;
      default:
        return <div>Paso no encontrado</div>;
    }
  };

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-5">
      <Stepper steps={pasosAutorProyecto} currentStep={currentStep} />
      <div className="mt-8 w-full max-w-2xl">
        <div className="flex justify-end">
        {/* boton atras */}
        <button className="bg-[#003876] rounded-full h-8 w-8 text-white justify-center items-center  flex">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6L5 12M5 12L11 18M5 12H19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </button>
        </div>

       
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {renderFormByStep()}
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex justify-start">
          <button
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded disabled:opacity-50"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
          >
            Anterior
          </button>
          <button
            className="bg-[#003876] text-white px-4 py-2 rounded disabled:opacity-50"
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, pasosAutorProyecto.length - 1))}
            disabled={currentStep === pasosAutorProyecto.length - 1}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}