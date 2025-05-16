"use client"
import React, { useState } from "react";

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
          <label htmlFor="extensionTotalTerreno" className="block text-sm font-medium text-gray-700 mb-1">
            Extensión Total del terreno (m²)
          </label>
          <input
            type="number"
            id="extensionTotalTerreno"
            name="extensionTotalTerreno"
            value={tramiteData.extensionTotalTerreno}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="areaDesarrolloProyecto" className="block text-sm font-medium text-gray-700 mb-1">
            Área para el desarrollo del proyecto (m²)*
          </label>
          <input
            type="number"
            id="areaDesarrolloProyecto"
            name="areaDesarrolloProyecto"
            value={tramiteData.areaDesarrolloProyecto}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
            Región
          </label>
          <select
            id="region"
            name="region"
            value={tramiteData.region}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          >
            <option value="">Seleccione una región</option>
            {regiones.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="provincia" className="block text-sm font-medium text-gray-700 mb-1">
            Provincia
          </label>
          <select
            id="provincia"
            name="provincia"
            value={tramiteData.provincia}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
            disabled={!tramiteData.region}
          >
            <option value="">Seleccione una provincia</option>
            {provinciasFiltradas.map(provincia => (
              <option key={provincia} value={provincia}>{provincia}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="municipio" className="block text-sm font-medium text-gray-700 mb-1">
            Municipio
          </label>
          <input
            type="text"
            id="municipio"
            name="municipio"
            value={tramiteData.municipio}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
            Sector
          </label>
          <input
            type="text"
            id="sector"
            name="sector"
            value={tramiteData.sector}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="calle" className="block text-sm font-medium text-gray-700 mb-1">
            Calle
          </label>
          <input
            type="text"
            id="calle"
            name="calle"
            value={tramiteData.calle}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
            Número
          </label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={tramiteData.numero}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="latitud" className="block text-sm font-medium text-gray-700 mb-1">
            Latitud
          </label>
          <input
            type="text"
            id="latitud"
            name="latitud"
            value={tramiteData.latitud}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="longitud" className="block text-sm font-medium text-gray-700 mb-1">
            Longitud
          </label>
          <input
            type="text"
            id="longitud"
            name="longitud"
            value={tramiteData.longitud}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="enlaceLocacion" className="block text-sm font-medium text-gray-700 mb-1">
            Enlace de locación
          </label>
          <input
            type="url"
            id="enlaceLocacion"
            name="enlaceLocacion"
            value={tramiteData.enlaceLocacion}
            onChange={handleChange}
            placeholder="https://maps.google.com/..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
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