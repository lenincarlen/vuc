"use client"
import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Select } from "@heroui/select";
interface DatosTramiteFormProps {
  onSubmit: (data: any) => void;
}

export default function DatosTramiteForm({ onSubmit }: DatosTramiteFormProps) {
  const [tramiteData, setTramiteData] = useState({
    extensionTotalTerreno: "",
    areaDesarrolloProyecto: "",
    region: "",
    provincia: "",
    municipio: "",
    sector: "",
    calle: "",
    numero: "",
    latitud: "",
    longitud: "",
    enlaceLocacion: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTramiteData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(tramiteData);
  };

  // Opciones para los selectores
  const regiones = ["Cibao Norte", "Cibao Sur", "Cibao Nordeste", "Cibao Noroeste", "Valdesia", "Enriquillo", "El Valle", "Yuma", "Higuamo", "Ozama"];
  const provincias = {
    "Cibao Norte": ["Santiago", "Puerto Plata", "Espaillat"],
    "Cibao Sur": ["La Vega", "Monseñor Nouel", "Sánchez Ramírez"],
    "Cibao Nordeste": ["Duarte", "Hermanas Mirabal", "María Trinidad Sánchez", "Samaná"],
    "Cibao Noroeste": ["Valverde", "Monte Cristi", "Dajabón", "Santiago Rodríguez"],
    "Valdesia": ["San Cristóbal", "Peravia", "San José de Ocoa"],
    "Enriquillo": ["Barahona", "Bahoruco", "Independencia", "Pedernales"],
    "El Valle": ["San Juan", "Elías Piña"],
    "Yuma": ["La Romana", "La Altagracia", "El Seibo"],
    "Higuamo": ["San Pedro de Macorís", "Hato Mayor", "Monte Plata"],
    "Ozama": ["Santo Domingo", "Distrito Nacional"]
  };

  // Filtrar provincias según la región seleccionada
  const provinciasFiltradas = tramiteData.region ? provincias[tramiteData.region as keyof typeof provincias] || [] : [];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-[#003876]">Datos del Trámite</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            label="Extensión Total del terreno (m²)"
            type="number"
            id="extensionTotalTerreno"
            name="extensionTotalTerreno"
            value={tramiteData.extensionTotalTerreno}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Área para el desarrollo del proyecto (m²)*"
            type="number"
            id="areaDesarrolloProyecto"
            name="areaDesarrolloProyecto"
            value={tramiteData.areaDesarrolloProyecto}
            onChange={handleChange}
            isRequired
          />
        </div>
   
      
         
        <div>
          <Input
            label="Municipio"
            type="text"
            id="municipio"
            name="municipio"
            value={tramiteData.municipio}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Sector"
            type="text"
            id="sector"
            name="sector"
            value={tramiteData.sector}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Calle"
            type="text"
            id="calle"
            name="calle"
            value={tramiteData.calle}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Número"
            type="text"
            id="numero"
            name="numero"
            value={tramiteData.numero}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Latitud"
            type="text"
            id="latitud"
            name="latitud"
            value={tramiteData.latitud}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div>
          <Input
            label="Longitud"
            type="text"
            id="longitud"
            name="longitud"
            value={tramiteData.longitud}
            onChange={handleChange}
            isRequired
          />
        </div>
        <div className="md:col-span-2">
          <Input
            label="Enlace de locación"
            type="url"
            id="enlaceLocacion"
            name="enlaceLocacion"
            value={tramiteData.enlaceLocacion}
            onChange={handleChange}
            placeholder="https://maps.google.com/..."
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