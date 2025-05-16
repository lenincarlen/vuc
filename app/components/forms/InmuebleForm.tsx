"use client"
import React, { useState } from "react";

interface InmuebleFormProps {
  onSubmit: (data: any) => void;
}

export default function InmuebleForm({ onSubmit }: InmuebleFormProps) {
  const [inmuebleData, setInmuebleData] = useState({
    designacionCatastral: "",
    matricula: "",
    superficie: "",
    numeroParcela: "",
    distritoCatastral: "",
    fechaInscripcion: "",
    manzana: "",
    nombrePropietario: "",
    coPropietario: "no",
    nombreCopropietario: "",
    apellidoCopropietario: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInmuebleData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInmuebleData(prev => ({
      ...prev,
      coPropietario: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inmuebleData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-[#003876]">Inmueble</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="designacionCatastral" className="block text-sm font-medium text-gray-700 mb-1">
            Designación Catastral
          </label>
          <input
            type="text"
            id="designacionCatastral"
            name="designacionCatastral"
            value={inmuebleData.designacionCatastral}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="matricula" className="block text-sm font-medium text-gray-700 mb-1">
            Matrícula
          </label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={inmuebleData.matricula}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="superficie" className="block text-sm font-medium text-gray-700 mb-1">
            Superficie (m²)
          </label>
          <input
            type="number"
            id="superficie"
            name="superficie"
            value={inmuebleData.superficie}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="numeroParcela" className="block text-sm font-medium text-gray-700 mb-1">
            Número de Parcela o Solar
          </label>
          <input
            type="text"
            id="numeroParcela"
            name="numeroParcela"
            value={inmuebleData.numeroParcela}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="distritoCatastral" className="block text-sm font-medium text-gray-700 mb-1">
            Distrito Catastral
          </label>
          <input
            type="text"
            id="distritoCatastral"
            name="distritoCatastral"
            value={inmuebleData.distritoCatastral}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="fechaInscripcion" className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de Inscripción
          </label>
          <input
            type="date"
            id="fechaInscripcion"
            name="fechaInscripcion"
            value={inmuebleData.fechaInscripcion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="manzana" className="block text-sm font-medium text-gray-700 mb-1">
            Manzana
          </label>
          <input
            type="text"
            id="manzana"
            name="manzana"
            value={inmuebleData.manzana}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="nombrePropietario" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre Propietario
          </label>
          <input
            type="text"
            id="nombrePropietario"
            name="nombrePropietario"
            value={inmuebleData.nombrePropietario}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Co-Propietario
          </label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#003876]"
                name="coPropietario"
                value="si"
                checked={inmuebleData.coPropietario === "si"}
                onChange={handleRadioChange}
              />
              <span className="ml-2">Sí</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#003876]"
                name="coPropietario"
                value="no"
                checked={inmuebleData.coPropietario === "no"}
                onChange={handleRadioChange}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        
        {inmuebleData.coPropietario === "si" && (
          <>
            <div>
              <label htmlFor="nombreCopropietario" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Copropietario
              </label>
              <input
                type="text"
                id="nombreCopropietario"
                name="nombreCopropietario"
                value={inmuebleData.nombreCopropietario}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
                required={inmuebleData.coPropietario === "si"}
              />
            </div>
            
            <div>
              <label htmlFor="apellidoCopropietario" className="block text-sm font-medium text-gray-700 mb-1">
                Apellido Copropietario
              </label>
              <input
                type="text"
                id="apellidoCopropietario"
                name="apellidoCopropietario"
                value={inmuebleData.apellidoCopropietario}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
                required={inmuebleData.coPropietario === "si"}
              />
            </div>
          </>
        )}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-[#003876] text-white px-4 py-2 rounded hover:bg-[#002b5c] transition-colors"
        >
          Guardar y Continuar
        </button>
      </div>
    </form>
  );
}