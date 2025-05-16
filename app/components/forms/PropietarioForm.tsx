"use client"
import React, { useState } from "react";
import {Form} from "@heroui/form";

import {Input} from "@heroui/input";
import {Tabs, Tab} from "@heroui/tabs";
import {Card, CardBody} from "@heroui/card";

interface PropietarioFormProps {
  onSubmit: (data: any) => void;
}

export default function PropietarioForm({ onSubmit }: PropietarioFormProps) {
  const [tipoPropietario, setTipoPropietario] = useState<"fisica" | "empresa" | null>(null);
  const [tipoDocumento, setTipoDocumento] = useState<"cedula" | "pasaporte">("cedula");
  

   const sizes = ["lg"];
   const background = ["bg-[aliceblue"];
  const colors = ["blue", "green", "red", "yellow", "purple", "pink", "gray", "aliceblue"];
  const variants = ["solid", "outline", "ghost", "link"];
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);

  // Estado para persona física
  const [personaFisica, setPersonaFisica] = useState({
    documento: "",
    nombres: "",
    apellidos: "",
    nacionalidad: "",
    ciudad: "",
    direccion: "",
    celular: "",
    email: ""
  });

  // Estado para empresa
  const [empresa, setEmpresa] = useState({
    tipoEmpresa: "privada",
    rnc: "",
    registroMercantil: "",
    nombreEmpresa: "",
    representante: "",
    cedulaRepresentante: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    email: ""
  });

  const handlePersonaFisicaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPersonaFisica(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmpresaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmpresa(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = tipoPropietario === "fisica" ? {
      tipoPropietario,
      ...personaFisica,
      tipoDocumento
    } : {
      tipoPropietario,
      ...empresa
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full  mx-auto bg-[alisblue] p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-[#003876]">Datos del Propietario</h3>
      <div className="flex w-full flex-col">
        <label className="block text-sm font-medium text-gray-700 mb-2">Seleccione para tipo de propietario</label>
        <div className="flex flex-col md:flex-row gap-2 mb-8">
          <button
            type="button"
            className={`flex-1 flex items-start gap-4 p-6 rounded-2xl bg-[#f3f8fe] border-2 transition-colors ${tipoPropietario === 'fisica' ? 'border-[#003876] shadow-lg' : 'border-transparent'} hover:border-[#003876]`}
            onClick={() => setTipoPropietario('fisica')}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#003876] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 17.25c2.086 0 3.977.797 5.499 2.118M18 21v-2.25A2.25 2.25 0 0015.75 16.5h-7.5A2.25 2.25 0 006 18.75V21" />
              </svg>
            </span>
            <div className="text-left">
              <div className="font-semibold text-base text-[#003876]">Persona Física</div>
              <div className="text-sm text-gray-600"><span className="font-bold">Haz clic aquí</span> para crear trámite como persona física</div>
            </div>
          </button>
          <button
            type="button"
            className={`flex-1 flex items-start gap-4 p-6 rounded-2xl bg-[#f3f8fe] border-2 transition-colors ${tipoPropietario === 'empresa' ? 'border-[#003876] shadow-lg' : 'border-transparent'} hover:border-[#003876]`}
            onClick={() => setTipoPropietario('empresa')}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#003876] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 17.25h15m-13.5 0V5.25A2.25 2.25 0 018.25 3h7.5a2.25 2.25 0 012.25 2.25v12" />
              </svg>
            </span>
            <div className="text-left">
              <div className="font-semibold text-base text-[#003876]">Empresa</div>
              <div className="text-sm text-gray-600"><span className="font-bold">Haga clic aquí</span> si crearás un trámite para empresa</div>
            </div>
          </button>
        </div>
        {tipoPropietario === null ? null : tipoPropietario === 'fisica' ? (
          <div className="mb-4">
            {/* Formulario persona física */}
            <div className="flex gap-4 mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#003876]"
                  name="tipoDocumento"
                  value="cedula"
                  checked={tipoDocumento === "cedula"}
                  onChange={() => setTipoDocumento("cedula")}
                />
                <span className="ml-2">Cédula</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#003876]"
                  name="tipoDocumento"
                  value="pasaporte"
                  checked={tipoDocumento === "pasaporte"}
                  onChange={() => setTipoDocumento("pasaporte")}
                />
                <span className="ml-2">Pasaporte</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input className="rounded-2xl border-0 shadow-none"
                  label="No. de documento*"
                  type="text"
                  id="documento"
                  background="aliceblue"
                  backgroundColor="white"
                  size={size}
                  placeholder="Numero de cedula sin guiones"
                  name="documento"
                  value={personaFisica.documento}
                  onChange={handlePersonaFisicaChange}
                  isRequired
                />
              </div>
              <Input label="Email" placeholder="su email" type="email" />
              <div>
                <Input
                  label="Nombres"
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={personaFisica.nombres}
                  onChange={handlePersonaFisicaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Apellidos"
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={personaFisica.apellidos}
                  onChange={handlePersonaFisicaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Nacionalidad"
                  type="text"
                  id="nacionalidad"
                  name="nacionalidad"
                  value={personaFisica.nacionalidad}
                  onChange={handlePersonaFisicaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Ciudad"
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  value={personaFisica.ciudad}
                  onChange={handlePersonaFisicaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Dirección"
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={personaFisica.direccion}
                  onChange={handlePersonaFisicaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Celular"
                  type="tel"
                  id="celular"
                  name="celular"
                  value={personaFisica.celular}
                  onChange={handlePersonaFisicaChange}
                  isRequired
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-4">
            {/* Formulario empresa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  label="RNC"
                  type="text"
                  placeholder="999999"
                  id="rnc"
                  name="rnc"
                  value={empresa.rnc}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="N° de Registro Mercantil"
                  type="text"
                  id="registroMercantil"
                  name="registroMercantil"
                  value={empresa.registroMercantil}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Nombre de la Empresa"
                  type="text"
                  id="nombreEmpresa"
                  name="nombreEmpresa"
                  value={empresa.nombreEmpresa}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Persona Representante"
                  type="text"
                  id="representante"
                  name="representante"
                  value={empresa.representante}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Cédula del representante"
                  type="text"
                  id="cedulaRepresentante"
                  name="cedulaRepresentante"
                  value={empresa.cedulaRepresentante}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Ciudad"
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  value={empresa.ciudad}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Dirección"
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={empresa.direccion}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Teléfono"
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={empresa.telefono}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={empresa.email}
                  onChange={handleEmpresaChange}
                  isRequired
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Empresa</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#003876]"
                    name="tipoEmpresa"
                    value="privada"
                    checked={empresa.tipoEmpresa === "privada"}
                    onChange={handleEmpresaChange}
                  />
                  <span className="ml-2">Privada</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#003876]"
                    name="tipoEmpresa"
                    value="publica"
                    checked={empresa.tipoEmpresa === "publica"}
                    onChange={handleEmpresaChange}
                  />
                  <span className="ml-2">Pública</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 flex justify-end"></div>
     
    </form>
  );
}