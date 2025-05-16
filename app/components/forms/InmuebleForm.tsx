"use client"
import { Input } from "@heroui/input";
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
          
          <Input
            type="text"
            label="Designación Catastral"
           placeholder="Designación Catastral"
            id="designacionCatastral"
            name="designacionCatastral"
            value={inmuebleData.designacionCatastral}
            onChange={handleChange}
              isRequired
          />
        </div>
        
        <div>
         
          <Input
            type="text"
            id="matricula"
            name="matricula"
            label="Matricula"
            placeholder="matricula"
            value={inmuebleData.matricula}
            onChange={handleChange}
             isRequired
          />
        </div>
        
        <div>
       
          <Input
            type="number"
            label="Superficie (m²)"
            placeholder="00m²"
            id="superficie"
            name="superficie"
            value={inmuebleData.superficie}
            onChange={handleChange}
           isRequired
          />
        </div>
        
        <div>
      
          <Input
            type="text"
            id="numeroParcela"
            placeholder="00000"
            label="Número de Parcela o Solar"
            name="numeroParcela"
            value={inmuebleData.numeroParcela}
            onChange={handleChange}
             isRequired
          />
        </div>
        
        <div>
       
          <Input
            type="text"
            placeholder=""
            label=" Distrito Catastral"
            id="distritoCatastral"
            name="distritoCatastral"
            value={inmuebleData.distritoCatastral}
            onChange={handleChange}
          
          />
        </div>
        
        <div>
        
          <Input
            type="date"
            id="fechaInscripcion"
            name="fechaInscripcion"
            label="Fecha de Inscripción"
            value={inmuebleData.fechaInscripcion}
            onChange={handleChange}
           
          />
        </div>
        
        <div>
       
          <Input
            type="text"
            id="manzana"
            name="manzana"
            label="Manzana"
            placeholder="#"
            value={inmuebleData.manzana}
            onChange={handleChange}
           
          />
        </div>
        
        <div>
       
          <Input
            type="text"
            placeholder="Juan Perez"
            id="nombrePropietario"
            label="Nombre Propietario"
            name="nombrePropietario"
            value={inmuebleData.nombrePropietario}
            onChange={handleChange}
         
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
             
                  <Input
            type="text"
            placeholder="Pedro"
            id="nombrePropietario"
            label="Nombre Co-Propietario"
            name="nombrePropietario"
            value={inmuebleData.nombrePropietario}
            onChange={handleChange}
         
          />
            </div>
            
            <div>
               <Input
            type="text"
            placeholder="Mendez"
            id="nombrePropietario"
            label="Apellido Co-Propietario"
            name="apellidoPropietario"
            value={inmuebleData.nombrePropietario}
            onChange={handleChange}
         
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