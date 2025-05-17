"use client"
import { Input, Textarea} from "@heroui/input";
import React, { useState } from "react";
import { Select } from "@heroui/select";
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
          label="Nombre del Proyecto"
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
      
      defaultValue="Describ detalladamente su proyecto"
      label="Description"
      placeholder="Description"
     
            onChange={handleChange}
      // eslint-disable-next-line no-console
      onClear={() => console.log("textarea cleared")}
    />
        </div>
        
        <div>
        
          <Input
            type="number"
            id="montoTotalInversion"
            name="montoTotalInversion"
              label="Monto Total de Inversión"
          placeholder="0.00"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
         
          />
        
     
        </div>
            <Input
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>RD</option>
               
              </select>
            </div>
          }
          label=" Inversión Nacional RD$"
         
          placeholder="0.00"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          type="number"
           value={memoriaData.inversionNacional}
            onChange={handleChange}
        />
        
      
        
        <div>
             <Input
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>RD</option>
               
              </select>
            </div>
          }
          label=" Inversión Extranjera"
         
          placeholder="0.00"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          type="number"
           value={memoriaData.inversionExtranjera}
            onChange={handleChange}
        />
        </div>
        
        <div>
         
          <Input
          label="País de Origen del Capital de inversión"
            type="text"
            placeholder="Origen del Capital"
            id="paisOrigenCapital"
            name="paisOrigenCapital"
            value={memoriaData.paisOrigenCapital}
            onChange={handleChange}
            isRequired
          />
        </div>
        
        <div>
          <Select
            label="Tipo de Construcción"
            id="tipoConstruccion"
            name="tipoConstruccion"
            value={memoriaData.tipoConstruccion}
            onChange={handleChange}
            isRequired
            options={tiposConstruccion.map(tipo => ({ label: tipo, value: tipo }))}
          />
        </div>
        <div>
          <Select
            label="Sub Tipo de Construcción"
            id="subTipoConstruccion"
            name="subTipoConstruccion"
            value={memoriaData.subTipoConstruccion}
            onChange={handleChange}
            isRequired
            options={subTiposConstruccion.map(subtipo => ({ label: subtipo, value: subtipo }))}
          />
        </div>
        <div>
          <Select
            label="Tipo de Sistema Constructivo"
            id="tipoSistemaConstructivo"
            name="tipoSistemaConstructivo"
            value={memoriaData.tipoSistemaConstructivo}
            onChange={handleChange}
            isRequired
            options={sistemaConstructivo.map(sistema => ({ label: sistema, value: sistema }))}
          />
        </div>
        <div>
          <Input
            label="Altura Máxima (m)"
            type="number"
            id="alturaMaxima"
            name="alturaMaxima"
            value={memoriaData.alturaMaxima}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Área de Construcción Total (m²)"
            type="number"
            id="areaConstruccionTotal"
            name="areaConstruccionTotal"
            value={memoriaData.areaConstruccionTotal}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Bloques de Edificación"
            type="number"
            id="bloquesEdificacion"
            name="bloquesEdificacion"
            value={memoriaData.bloquesEdificacion}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Cantidad Total de Habitaciones"
            type="number"
            id="cantidadTotalHabitaciones"
            name="cantidadTotalHabitaciones"
            value={memoriaData.cantidadTotalHabitaciones}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Cantidad Total de Plazas de Parqueo*"
            type="number"
            id="cantidadTotalPlazasParqueo"
            name="cantidadTotalPlazasParqueo"
            value={memoriaData.cantidadTotalPlazasParqueo}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Cobertura de Suelo (m² 1er. Nivel)"
            type="number"
            id="coberturaSuelo"
            name="coberturaSuelo"
            value={memoriaData.coberturaSuelo}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Niveles Soterrados"
            type="number"
            id="nivelesSoterrados"
            name="nivelesSoterrados"
            value={memoriaData.nivelesSoterrados}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Niveles a partir de Acera"
            type="number"
            id="nivelesAcera"
            name="nivelesAcera"
            value={memoriaData.nivelesAcera}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Cant. de Apartamentos"
            type="number"
            id="cantidadApartamentos"
            name="cantidadApartamentos"
            value={memoriaData.cantidadApartamentos}
            onChange={handleChange}
            isRequired
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