"use client"
import React, { useState } from "react";

import {  RadioGroup} from "@heroui/radio";

import { Input } from "@heroui/input";
import {  Button  } from "@heroui/button";
import { cn } from "tailwind-variants";

 
import { Radio } from "@heroui/radio";
const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;
  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
      }}
    >
      {children}
    </Radio>
  );
};
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
      
      <div className="space-y-4 ">
        <div className="">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Cliente</label>
          <RadioGroup
            value={facturacionData.tipoCliente}
            onValueChange={value => handleRadioChange("tipoCliente", value)}
            className="flex flex-1 gap-4"
            name="tipoCliente"
            label="Tipo de Cliente"
          >
            <CustomRadio value="fisica">Persona Física</CustomRadio>
            <CustomRadio value="compania">Compañía</CustomRadio>
            <CustomRadio value="gobierno">Gobierno</CustomRadio>
          </RadioGroup>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Comprobante</label>
          <RadioGroup
            value={facturacionData.tipoComprobante}
            onValueChange={value => handleRadioChange("tipoComprobante", value)}
            className="flex flex-wrap gap-4"
            name="tipoComprobante"
            label="Tipo de Comprobante"
          >
            <CustomRadio value="gubernamental">Gubernamental</CustomRadio>
            <CustomRadio value="zonafranca">Zona Franca</CustomRadio>
            <CustomRadio value="consumidor">Consumidor Final</CustomRadio>
          </RadioGroup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
          
            <Input
              type="text"
              label="A nombre de:"
              placeholder="Nombre del destinatario de la factura"
              id="nombreDestinatario"
              name="nombreDestinatario"
              value={facturacionData.nombreDestinatario}
              onChange={handleChange}
              required
            />
          </div>
          {(facturacionData.tipoCliente === "compania" || facturacionData.tipoCliente === "gobierno") && (
            <div>
           
              <Input
                type="text"
                label="RNC"
                placeholder="00000000"
                id="rnc"
                name="rnc"
                value={facturacionData.rnc}
                onChange={handleChange}
                required={facturacionData.tipoCliente === "compania" || facturacionData.tipoCliente === "gobierno"}
              />
            </div>
          )}
          {facturacionData.tipoCliente === "fisica" && (
            <div>
              
              <Input
                type="text"
                id="cedulaPasaporte"
                label="Cédula/Pasaporte"
                name="cedulaPasaporte"
                value={facturacionData.cedulaPasaporte}
                onChange={handleChange}
                required={facturacionData.tipoCliente === "fisica"}
              />
            </div>
          )}
          <div>
          
            <Input
              type="text"
              id="ciudad"
              label="Ciudad"
              placeholder="Ciudad"
              name="ciudad"
              value={facturacionData.ciudad}
              onChange={handleChange}
              required
            />
          </div>
          <div>
           
            <Input
              type="text"
              label="Sector"
              id="sector"
              name="sector"
              value={facturacionData.sector}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          
            <Input
              type="text"
              label="Calle"
              placeholder="02 PO Box. Av"
              id="calle"
              name="calle"
              value={facturacionData.calle}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          
            <Input
              type="tel"
              label=" Teléfono"
              placeholder="8090000000"
              id="telefono"
              name="telefono"
              value={facturacionData.telefono}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button type="submit" color="primary">
          Guardar y Continuar
        </Button>
      </div>
    </form>
  );
}