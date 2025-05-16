"use client"
import { Input, Textarea } from "@heroui/input";
import React, { useState } from "react";

interface MemoriaDescriptivaFormProps {
  onSubmit: (data: any) => void;
}

export default function MemoriaDescriptivaForm({ onSubmit }: MemoriaDescriptivaFormProps) {
  const [memoriaData, setMemoriaData] = useState({
    nombreProyecto: "",
    descripcionGeneral: "",
    montoTotalInversion: "",
    inversionNacional: "",
    inversionExtranjera: "",
    paisOrigenCapital: "",
    tipoConstruccion: "",
    subTipoConstruccion: "",
    tipoSistemaConstructivo: "",
    alturaMaxima: "",
    areaConstruccionTotal: "",
    bloquesEdificacion: "",
    cantidadTotalHabitaciones: "",
    cantidadTotalPlazasParqueo: "",
    coberturaSuelo: "",
    nivelesSoterrados: "",
    nivelesAcera: "",
    cantidadApartamentos: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMemoriaData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(memoriaData);
  };

  // Opciones para los selectores
  const tiposConstruccion = ["Residencial", "Comercial", "Industrial", "Institucional", "Mixto"];
  const subTiposConstruccion = ["Unifamiliar", "Multifamiliar", "Oficinas", "Local comercial", "Nave industrial", "Educativo", "Salud"];
  const sistemaConstructivo = ["Hormigón armado", "Estructura metálica", "Mampostería confinada", "Mixto"];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-[#003876]">Memoria Descriptiva</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
        
          <Input
          label="Mombre del Proyecto"
            type="text"
            id="nombreProyecto"
            name="nombreProyecto"
            value={memoriaData.nombreProyecto}
            onChange={handleChange}
             isRequired
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="descripcionGeneral" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción General
          </label>
        
           <Textarea
      isClearable
      
      defaultValue="DEscrib detalladamente su proyecto"
      label="Description"
      placeholder="Description"
     
            onChange={handleChange}
      // eslint-disable-next-line no-console
      onClear={() => console.log("textarea cleared")}
    />
        </div>
        
        <div>
          <label htmlFor="montoTotalInversion" className="block text-sm font-medium text-gray-700 mb-1">
            Monto Total de Inversión
          </label>
          <input
            type="number"
            id="montoTotalInversion"
            name="montoTotalInversion"
            value={memoriaData.montoTotalInversion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="inversionNacional" className="block text-sm font-medium text-gray-700 mb-1">
            Inversión Nacional RD$*
          </label>
          <input
            type="number"
            id="inversionNacional"
            name="inversionNacional"
            value={memoriaData.inversionNacional}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="inversionExtranjera" className="block text-sm font-medium text-gray-700 mb-1">
            Inversión Extranjera RD$
          </label>
          <input
            type="number"
            id="inversionExtranjera"
            name="inversionExtranjera"
            value={memoriaData.inversionExtranjera}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
          />
        </div>
        
        <div>
          <label htmlFor="paisOrigenCapital" className="block text-sm font-medium text-gray-700 mb-1">
            País de Origen del Capital de inversión*
          </label>
          <input
            type="text"
            id="paisOrigenCapital"
            name="paisOrigenCapital"
            value={memoriaData.paisOrigenCapital}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="tipoConstruccion" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Construcción
          </label>
          <select
            id="tipoConstruccion"
            name="tipoConstruccion"
            value={memoriaData.tipoConstruccion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          >
            <option value="">Seleccione una opción</option>
            {tiposConstruccion.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="subTipoConstruccion" className="block text-sm font-medium text-gray-700 mb-1">
            Sub Tipo de Construcción
          </label>
          <select
            id="subTipoConstruccion"
            name="subTipoConstruccion"
            value={memoriaData.subTipoConstruccion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          >
            <option value="">Seleccione una opción</option>
            {subTiposConstruccion.map(subtipo => (
              <option key={subtipo} value={subtipo}>{subtipo}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="tipoSistemaConstructivo" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Sistema Constructivo
          </label>
          <select
            id="tipoSistemaConstructivo"
            name="tipoSistemaConstructivo"
            value={memoriaData.tipoSistemaConstructivo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          >
            <option value="">Seleccione una opción</option>
            {sistemaConstructivo.map(sistema => (
              <option key={sistema} value={sistema}>{sistema}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="alturaMaxima" className="block text-sm font-medium text-gray-700 mb-1">
            Altura Máxima (m)
          </label>
          <input
            type="number"
            id="alturaMaxima"
            name="alturaMaxima"
            value={memoriaData.alturaMaxima}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="areaConstruccionTotal" className="block text-sm font-medium text-gray-700 mb-1">
            Área de Construcción Total (m²)
          </label>
          <input
            type="number"
            id="areaConstruccionTotal"
            name="areaConstruccionTotal"
            value={memoriaData.areaConstruccionTotal}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="bloquesEdificacion" className="block text-sm font-medium text-gray-700 mb-1">
            Bloques de Edificación
          </label>
          <input
            type="number"
            id="bloquesEdificacion"
            name="bloquesEdificacion"
            value={memoriaData.bloquesEdificacion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="cantidadTotalHabitaciones" className="block text-sm font-medium text-gray-700 mb-1">
            Cantidad Total de Habitaciones
          </label>
          <input
            type="number"
            id="cantidadTotalHabitaciones"
            name="cantidadTotalHabitaciones"
            value={memoriaData.cantidadTotalHabitaciones}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="cantidadTotalPlazasParqueo" className="block text-sm font-medium text-gray-700 mb-1">
            Cantidad Total de Plazas de Parqueo*
          </label>
          <input
            type="number"
            id="cantidadTotalPlazasParqueo"
            name="cantidadTotalPlazasParqueo"
            value={memoriaData.cantidadTotalPlazasParqueo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="coberturaSuelo" className="block text-sm font-medium text-gray-700 mb-1">
            Cobertura de Suelo (m² 1er. Nivel)
          </label>
          <input
            type="number"
            id="coberturaSuelo"
            name="coberturaSuelo"
            value={memoriaData.coberturaSuelo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="nivelesSoterrados" className="block text-sm font-medium text-gray-700 mb-1">
            Niveles Soterrados
          </label>
          <input
            type="number"
            id="nivelesSoterrados"
            name="nivelesSoterrados"
            value={memoriaData.nivelesSoterrados}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="nivelesAcera" className="block text-sm font-medium text-gray-700 mb-1">
            Niveles a partir de Acera
          </label>
          <input
            type="number"
            id="nivelesAcera"
            name="nivelesAcera"
            value={memoriaData.nivelesAcera}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="cantidadApartamentos" className="block text-sm font-medium text-gray-700 mb-1">
            Cant. de Apartamentos
          </label>
          <input
            type="number"
            id="cantidadApartamentos"
            name="cantidadApartamentos"
            value={memoriaData.cantidadApartamentos}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
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