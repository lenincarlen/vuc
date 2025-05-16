"use client"
import React, { useState } from "react";

interface FacturacionFormProps {
  onSubmit: (data: any) => void;
}

export default function FacturacionForm({ onSubmit }: FacturacionFormProps) {
  const [facturacionData, setFacturacionData] = useState({
    tipoCliente: "fisica",
    tipoComprobante: "consumidor",
    nombreDestinatario: "",
    rnc: "",
    cedulaPasaporte: "",
    ciudad: "",
    sector: "",
    calle: "",
    telefono: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFacturacionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFacturacionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(facturacionData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-[#003876]">Datos Factura con Comprobante</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Cliente</label>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#003876]"
                name="tipoCliente"
                checked={facturacionData.tipoCliente === "fisica"}
                onChange={() => handleRadioChange("tipoCliente", "fisica")}
              />
              <span className="ml-2">Persona Física</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#003876]"
                name="tipoCliente"
                checked={facturacionData.tipoCliente === "compania"}
                onChange={() => handleRadioChange("tipoCliente", "compania")}
              />
              <span className="ml-2">Compañía</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#003876]"
                name="tipoCliente"
                checked={facturacionData.tipoCliente === "gobierno"}
                onChange={() => handleRadioChange("tipoCliente", "gobierno")}
              />
              <span className="ml-2">Gobierno</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Comprobante</label>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#003876]"
                name="tipoComprobante"
                checked={facturacionData.tipoComprobante === "gubernamental"}
                onChange={() => handleRadioChange("tipoComprobante", "gubernamental")}
              />
              <span className="ml-2">Gubernamental</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#003876]"
                name="tipoComprobante"
                checked={facturacionData.tipoComprobante === "zonafranca"}
                onChange={() => handleRadioChange("tipoComprobante", "zonafranca")}
              />
              <span className="ml-2">Zona Franca</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#003876]"
                name="tipoComprobante"
                checked={facturacionData.tipoComprobante === "consumidor"}
                onChange={() => handleRadioChange("tipoComprobante", "consumidor")}
              />
              <span className="ml-2">Consumidor Final</span>
            </label>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="nombreDestinatario" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del destinatario de la factura
            </label>
            <input
              type="text"
              id="nombreDestinatario"
              name="nombreDestinatario"
              value={facturacionData.nombreDestinatario}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
              required
            />
          </div>
          
          {(facturacionData.tipoCliente === "compania" || facturacionData.tipoCliente === "gobierno") && (
            <div>
              <label htmlFor="rnc" className="block text-sm font-medium text-gray-700 mb-1">
                RNC
              </label>
              <input
                type="text"
                id="rnc"
                name="rnc"
                value={facturacionData.rnc}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
                required={facturacionData.tipoCliente === "compania" || facturacionData.tipoCliente === "gobierno"}
              />
            </div>
          )}
          
          {facturacionData.tipoCliente === "fisica" && (
            <div>
              <label htmlFor="cedulaPasaporte" className="block text-sm font-medium text-gray-700 mb-1">
                Cédula/Pasaporte
              </label>
              <input
                type="text"
                id="cedulaPasaporte"
                name="cedulaPasaporte"
                value={facturacionData.cedulaPasaporte}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
                required={facturacionData.tipoCliente === "fisica"}
              />
            </div>
          )}
          
          <div>
            <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-1">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={facturacionData.ciudad}
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
              value={facturacionData.sector}
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
              value={facturacionData.calle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
              required
            />
          </div>
          
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={facturacionData.telefono}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003876]"
              required
            />
          </div>
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