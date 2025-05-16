"use client"
import React, { useState } from "react";
import Stepper from "./Stepper";
import { useRouter } from "next/navigation";

const opciones = [
  {
    titulo: "Propietario",
    icono: (
      <svg width="28" height="28" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#0A2E6E"/><circle cx="24" cy="20" r="6" fill="#fff"/><path d="M36 36c0-6.627-5.373-12-12-12s-12 5.373-12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    descripcion: "Presione iniciar para crear el trámite para Profesional responsable diseño",
  },
  {
    titulo: "Profesional responsable diseño",
    icono: (
      <svg width="28" height="28" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#0A2E6E"/><circle cx="24" cy="20" r="6" fill="#fff"/><path d="M36 36c0-6.627-5.373-12-12-12s-12 5.373-12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    descripcion: "Presione iniciar para crear el trámite para Profesional responsable diseño",
  },
  {
    titulo: "Propietario & Profesional ",
    icono: (
      <svg width="28" height="28" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#0A2E6E"/><circle cx="17" cy="21" r="4" fill="#fff"/><circle cx="31" cy="21" r="4" fill="#fff"/><path d="M24 36c0-4.418-3.582-8-8-8s-8 3.582-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M40 36c0-4.418-3.582-8-8-8s-8 3.582-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    descripcion: "Presione iniciar para crear el trámite para Ambos",
  },
  {
    titulo: "Tramitador",
    icono: (
      <svg width="28" height="28" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#0A2E6E"/><circle cx="24" cy="20" r="3" fill="#fff"/><circle cx="16" cy="24" r="2" fill="#fff"/><circle cx="32" cy="24" r="2" fill="#fff"/><path d="M24 36c0-4.418-3.582-8-8-8s-8 3.582-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M40 36c0-4.418-3.582-8-8-8s-8 3.582-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    descripcion: "Presione iniciar para crear el trámite para Ninguno",
  },
];

export default function OpcionesTramite() {
  const [seleccionada, setSeleccionada] = useState<number|null>(null);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const router = useRouter();

  const handleSeleccion = (idx:number) => {
    setSeleccionada(idx);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAceptaTerminos(e.target.checked);
  };

  const puedeContinuar = seleccionada !== null && aceptaTerminos;

  return (
    <section className="relative w-full h-full lg:min-h-[75vh] flex flex-col px-5 md:px-14 -mt-10">
      <Stepper steps={["Seleccionar opción", "Aceptar términos", "Confirmar trámite"]} currentStep={seleccionada === null ? 0 : aceptaTerminos ? 2 : 1} />
      <h2 className="text-sm font-semibold mb-8 text-start mt-5 border-b-[#003876] px-1 py-1.5 text-[#003876]     ">
        Seleccione para quién se crea el trámite
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full justify-center items-center  ">
        {opciones.map((opcion, idx) => (
          <button
            key={opcion.titulo}
            type="button"
            onClick={() => handleSeleccion(idx)}
            className={`bg-[aliceblue] w-[600px] text-left rounded-2xl hover:shadow-md transition-all p-4 max-w-[360px] flex items-start gap-4 border-2 ${seleccionada === idx ? 'border-[#003876] shadow-lg ring-2 ring-[#003876]' : 'border-transparent'}`}
            aria-pressed={seleccionada === idx}
          >
            <div className="text-zinc-800">{opcion.icono}</div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">{opcion.titulo}</h3>
              <p className="text-sm text-zinc-500 mt-1 leading-snug">
                {opcion.descripcion ? (
                  <>
                    <span className="font-semibold text-zinc-700">
                      {opcion.descripcion.split(' ').slice(0, 2).join(' ')}
                    </span>{' '}
                    {opcion.descripcion.split(' ').slice(2).join(' ')}
                  </>
                ) : null}
              </p>
            </div>
         
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {/* ACEPTAR TERMINOS */}
        <div className="col-12 my-5 w-full flex flex-nowrap justify-center items-center gap-3 text-xs">
          <input
            id="declarationCheck"
            type="checkbox"
            className="h-4 w-4 rounded-full border-2 after:bg-[#002b5c] bg-[#002b5c] "
            checked={aceptaTerminos}
            onChange={handleCheck}
          />
          <label htmlFor="declarationCheck" className="max-w-[70%] md:max-w-[90%] text-gray-500">
            Declaro haber leído y estar de acuerdo con los
            <button type="button" className="text-vuc-secondary underline underline-offset-1 ml-1">
              términos y condiciones
            </button>
          </label>
        </div>
        </div>
      <div className="flex justify-center ">
        <button
          className={`bg-[#003876] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ${puedeContinuar ? 'hover:bg-[#002b5c]' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!puedeContinuar}
          onClick={() => {
            if (!puedeContinuar) return;
            if (seleccionada === 0) {
              router.push("/pasos/propietario");
            } else if (seleccionada === 1) {
              router.push("/pasos/autor-proyecto");
            } else if (seleccionada === 2) {
              router.push("/pasos/propietario"); // Ajustar según la lógica deseada
            } else if (seleccionada === 3) {
              router.push("/pasos/autor-proyecto"); // Ajustar según la lógica deseada
            }
          }}
        >
          Iniciar trámite
        </button>
      </div>
    </section>
  );
}
